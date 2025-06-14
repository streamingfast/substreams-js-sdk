// @generated by protoc-gen-es v2.3.0 with parameter "target=ts"
// @generated from file sf/substreams/v1/deltas.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sf/substreams/v1/deltas.proto.
 */
export const file_sf_substreams_v1_deltas: GenFile = /*@__PURE__*/
  fileDesc("Ch1zZi9zdWJzdHJlYW1zL3YxL2RlbHRhcy5wcm90bxIQc2Yuc3Vic3RyZWFtcy52MSJBCgtTdG9yZURlbHRhcxIyCgxzdG9yZV9kZWx0YXMYASADKAsyHC5zZi5zdWJzdHJlYW1zLnYxLlN0b3JlRGVsdGEixwEKClN0b3JlRGVsdGESOQoJb3BlcmF0aW9uGAEgASgOMiYuc2Yuc3Vic3RyZWFtcy52MS5TdG9yZURlbHRhLk9wZXJhdGlvbhIPCgdvcmRpbmFsGAIgASgEEgsKA2tleRgDIAEoCRIRCglvbGRfdmFsdWUYBCABKAwSEQoJbmV3X3ZhbHVlGAUgASgMIjoKCU9wZXJhdGlvbhIJCgVVTlNFVBAAEgoKBkNSRUFURRABEgoKBlVQREFURRACEgoKBkRFTEVURRADQkZaRGdpdGh1Yi5jb20vc3RyZWFtaW5nZmFzdC9zdWJzdHJlYW1zL3BiL3NmL3N1YnN0cmVhbXMvdjE7cGJzdWJzdHJlYW1zYgZwcm90bzM");

/**
 * @generated from message sf.substreams.v1.StoreDeltas
 */
export type StoreDeltas = Message<"sf.substreams.v1.StoreDeltas"> & {
  /**
   * @generated from field: repeated sf.substreams.v1.StoreDelta store_deltas = 1;
   */
  storeDeltas: StoreDelta[];
};

/**
 * Describes the message sf.substreams.v1.StoreDeltas.
 * Use `create(StoreDeltasSchema)` to create a new message.
 */
export const StoreDeltasSchema: GenMessage<StoreDeltas> = /*@__PURE__*/
  messageDesc(file_sf_substreams_v1_deltas, 0);

/**
 * @generated from message sf.substreams.v1.StoreDelta
 */
export type StoreDelta = Message<"sf.substreams.v1.StoreDelta"> & {
  /**
   * @generated from field: sf.substreams.v1.StoreDelta.Operation operation = 1;
   */
  operation: StoreDelta_Operation;

  /**
   * @generated from field: uint64 ordinal = 2;
   */
  ordinal: bigint;

  /**
   * @generated from field: string key = 3;
   */
  key: string;

  /**
   * @generated from field: bytes old_value = 4;
   */
  oldValue: Uint8Array;

  /**
   * @generated from field: bytes new_value = 5;
   */
  newValue: Uint8Array;
};

/**
 * Describes the message sf.substreams.v1.StoreDelta.
 * Use `create(StoreDeltaSchema)` to create a new message.
 */
export const StoreDeltaSchema: GenMessage<StoreDelta> = /*@__PURE__*/
  messageDesc(file_sf_substreams_v1_deltas, 1);

/**
 * @generated from enum sf.substreams.v1.StoreDelta.Operation
 */
export enum StoreDelta_Operation {
  /**
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * @generated from enum value: CREATE = 1;
   */
  CREATE = 1,

  /**
   * @generated from enum value: UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * @generated from enum value: DELETE = 3;
   */
  DELETE = 3,
}

/**
 * Describes the enum sf.substreams.v1.StoreDelta.Operation.
 */
export const StoreDelta_OperationSchema: GenEnum<StoreDelta_Operation> = /*@__PURE__*/
  enumDesc(file_sf_substreams_v1_deltas, 1, 0);

