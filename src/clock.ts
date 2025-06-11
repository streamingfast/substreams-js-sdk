import { ClockSchema, Clock } from "../pb/sf/substreams/v1/clock_pb";
import { fromBinary } from "@bufbuild/protobuf";

/**
 * Returns the current block's clock information (block number, hash, timestamp).
 * This is injected by the runtime and should not be mocked or replaced.
 */
export function getClock(): Clock {
	let buf = (globalThis as any).__clock();

	if (!(buf instanceof Uint8Array)) {
		if (buf?.length !== undefined && typeof buf[0] === "number") {
			buf = Uint8Array.from(buf);
		} else {
			throw new Error("__clock did not return a valid byte array");
		}
	}

	return fromBinary(ClockSchema, buf);
}
