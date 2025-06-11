import { toBinary, Message, DescMessage } from "@bufbuild/protobuf";

export class Store<T extends Message> {
  constructor(
    private storeInterface: {
      set: (ordinal: number, key: string, value: Uint8Array) => void;
    },
    private schema: DescMessage
  ) {}

  set(ordinal: number, key: string, value: T) {
    const out = toBinary(this.schema, value);
    this.storeInterface.set(ordinal, key, out);
  }
}
