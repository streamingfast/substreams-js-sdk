import { fromBinary, toBinary, DescMessage, Message } from "@bufbuild/protobuf";
import { Store } from "./store";

// Registry for substreams handlers (map, store)
const handlerRegistry = new Map<
	string,
	{
		type: "map" | "store";
		inputTypes?: any[];
		outputType?: any;
		handler: Function;
		instance: any;
		storeType?: DescMessage;
	}
>();

export namespace substreams {
	export namespace handlers {
		// Registers a map handler function. This decorator stores the handler metadata and binds the function to its class instance.
		export function map(inputTypes: any[], outputType: any) {
			// target gives us access to the class where the method(s) lives, propertyKey is the name of the method being decorated, descriptor is a reference to the actual function.
			return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
				const handler = descriptor.value;
				const instance = new target.constructor();
				handlerRegistry.set(propertyKey, {
					type: "map",
					inputTypes,
					outputType,
					handler,
					instance,
				});
			};
		}

		// Registers a store handler with the protobuf input
		export function store(storeType: DescMessage) {
			return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
				const handler = descriptor.value;
				const instance = new target.constructor();
				handlerRegistry.set(propertyKey, {
					type: "store",
					handler,
					instance,
					storeType,
				});
			};
		}
	}
}

// Executes a registered map handler by name. Deserializes input using the registered schema, invokes the handler, and serializes the output back into a binary buffer.
export function executeMapHandler(handlerName: string, inputBytes: Uint8Array): Uint8Array {
	const registered = handlerRegistry.get(handlerName);
	if (!registered || registered.type !== "map") {
		throw new Error(`Map handler '${handlerName}' not found`);
	}

	const inputs = registered.inputTypes!.map((type) => fromBinary(type, inputBytes));
	const result = registered.handler.call(registered.instance, ...inputs);
	return toBinary(registered.outputType, result);
}

// Deserializes input using the registered schema, wraps the store interface and calls the handler with the StoreSet and input object.
export function executeStoreHandler(handlerName: string, storeInterface: any, inputBytes: Uint8Array): void {
	const registered = handlerRegistry.get(handlerName);
	if (!registered || registered.type !== "store") {
		throw new Error(`Store handler '${handlerName}' not found`);
	}

	const store = new Store(storeInterface, registered.storeType!);

	const input = fromBinary(registered.storeType!, inputBytes);
	registered.handler.call(registered.instance, store, input);
}

export function getHandlerType(handlerName: string): "map" | "store" | undefined {
	return handlerRegistry.get(handlerName)?.type;
}

// Needed to expose for v8 binding
(globalThis as any).getHandlerType = getHandlerType;
(globalThis as any).executeMapHandler = executeMapHandler;
(globalThis as any).executeStoreHandler = executeStoreHandler;
