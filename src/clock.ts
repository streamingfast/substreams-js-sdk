import { ClockSchema, Clock } from "../pb/sf/substreams/v1/clock_pb";
import { fromBinary } from "@bufbuild/protobuf";

export function getClock(): Clock {
	const buf = (globalThis as any).__clock();
	if (!(buf instanceof Uint8Array)) {
		throw new Error("__clock did not return a Uint8Array");
	}
	return fromBinary(ClockSchema, buf);
}
