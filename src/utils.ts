import { Interface } from "@ethersproject/abi";
Object.defineProperty(globalThis, "Promise", {
	configurable: false,
	enumerable: false,
	get() {
		throw new Error("Promises are disabled in this runtime");
	},
	set(_) {
		throw new Error("Cannot redefine Promise");
	},
});

export function bytesToHex(arr: Uint8Array): string {
	return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function hexToBytes(hex: string): Uint8Array {
	if (hex.startsWith("0x")) hex = hex.slice(2);
	if (hex.length % 2) hex = "0" + hex;
	const out = new Uint8Array(hex.length / 2);
	for (let i = 0; i < out.length; i++) {
		out[i] = parseInt(hex.substr(i * 2, 2), 16);
	}
	return out;
}

// Open to suggestion, this exists only to prevent having to wrap everything in a try/catch in lib.ts since parseLog throws an error, the execution crashes if its not protected. But I'm aware its weird to have to use an util for a simple operation.
export function safeParseLog(log: any, iface: Interface): ReturnType<Interface["parseLog"]> | null {
	try {
		return iface.parseLog(log);
	} catch {
		return null;
	}
}
