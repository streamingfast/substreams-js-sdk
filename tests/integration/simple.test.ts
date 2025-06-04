import { bytesToHex } from "../../src/utils";

test("bytesToHex basic integration", () => {
	const result = bytesToHex(new Uint8Array([1, 2, 255]));
	expect(result).toBe("0102ff");
});
