// @generated by protoc-gen-es v2.3.0 with parameter "target=ts"
// @generated from file sf/substreams/intern/v2/deltas.proto (package sf.substreams.internal.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import type { StoreDeltas } from "../../v1/deltas_pb";
import { file_sf_substreams_v1_deltas } from "../../v1/deltas_pb";
import { file_sf_substreams_index_v1_keys } from "../../index/v1/keys_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sf/substreams/intern/v2/deltas.proto.
 */
export const file_sf_substreams_intern_v2_deltas: GenFile = /*@__PURE__*/
  fileDesc("CiRzZi9zdWJzdHJlYW1zL2ludGVybi92Mi9kZWx0YXMucHJvdG8SGXNmLnN1YnN0cmVhbXMuaW50ZXJuYWwudjIiygEKDE1vZHVsZU91dHB1dBITCgttb2R1bGVfbmFtZRgBIAEoCRIqCgptYXBfb3V0cHV0GAIgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueUgAEjUKDHN0b3JlX2RlbHRhcxgDIAEoCzIdLnNmLnN1YnN0cmVhbXMudjEuU3RvcmVEZWx0YXNIABIMCgRsb2dzGAQgAygJEhwKFGRlYnVnX2xvZ3NfdHJ1bmNhdGVkGAUgASgIEg4KBmNhY2hlZBgGIAEoCEIGCgRkYXRhIkYKCk9wZXJhdGlvbnMSOAoKb3BlcmF0aW9ucxgBIAMoCzIkLnNmLnN1YnN0cmVhbXMuaW50ZXJuYWwudjIuT3BlcmF0aW9uIqkECglPcGVyYXRpb24SNwoEdHlwZRgBIAEoDjIpLnNmLnN1YnN0cmVhbXMuaW50ZXJuYWwudjIuT3BlcmF0aW9uLlR5cGUSCwoDb3JkGAIgASgEEgsKA2tleRgDIAEoCRINCgV2YWx1ZRgEIAEoDCK5AwoEVHlwZRIHCgNTRVQQABINCglTRVRfQllURVMQARIVChFTRVRfSUZfTk9UX0VYSVNUUxACEhsKF1NFVF9CWVRFU19JRl9OT1RfRVhJU1RTEAMSCgoGQVBQRU5EEAQSEQoNREVMRVRFX1BSRUZJWBAFEhMKD1NFVF9NQVhfQklHX0lOVBAGEhEKDVNFVF9NQVhfSU5UNjQQBxITCg9TRVRfTUFYX0ZMT0FUNjQQCBIXChNTRVRfTUFYX0JJR19ERUNJTUFMEAkSEwoPU0VUX01JTl9CSUdfSU5UEAoSEQoNU0VUX01JTl9JTlQ2NBALEhMKD1NFVF9NSU5fRkxPQVQ2NBAMEhcKE1NFVF9NSU5fQklHX0RFQ0lNQUwQDRIPCgtTVU1fQklHX0lOVBAOEg0KCVNVTV9JTlQ2NBAPEg8KC1NVTV9GTE9BVDY0EBASEwoPU1VNX0JJR19ERUNJTUFMEBESEQoNU0VUX1NVTV9JTlQ2NBASEhMKD1NFVF9TVU1fRkxPQVQ2NBATEhMKD1NFVF9TVU1fQklHX0lOVBAUEhcKE1NFVF9TVU1fQklHX0RFQ0lNQUwQFUJNWktnaXRodWIuY29tL3N0cmVhbWluZ2Zhc3Qvc3Vic3RyZWFtcy9wYi9zZi9zdWJzdHJlYW1zL2ludGVybi92MjtwYnNzaW50ZXJuYWxiBnByb3RvMw", [file_google_protobuf_any, file_sf_substreams_v1_deltas, file_sf_substreams_index_v1_keys]);

/**
 * @generated from message sf.substreams.internal.v2.ModuleOutput
 */
export type ModuleOutput = Message<"sf.substreams.internal.v2.ModuleOutput"> & {
  /**
   * @generated from field: string module_name = 1;
   */
  moduleName: string;

  /**
   * @generated from oneof sf.substreams.internal.v2.ModuleOutput.data
   */
  data: {
    /**
     * @generated from field: google.protobuf.Any map_output = 2;
     */
    value: Any;
    case: "mapOutput";
  } | {
    /**
     * @generated from field: sf.substreams.v1.StoreDeltas store_deltas = 3;
     */
    value: StoreDeltas;
    case: "storeDeltas";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated string logs = 4;
   */
  logs: string[];

  /**
   * @generated from field: bool debug_logs_truncated = 5;
   */
  debugLogsTruncated: boolean;

  /**
   * @generated from field: bool cached = 6;
   */
  cached: boolean;
};

/**
 * Describes the message sf.substreams.internal.v2.ModuleOutput.
 * Use `create(ModuleOutputSchema)` to create a new message.
 */
export const ModuleOutputSchema: GenMessage<ModuleOutput> = /*@__PURE__*/
  messageDesc(file_sf_substreams_intern_v2_deltas, 0);

/**
 * @generated from message sf.substreams.internal.v2.Operations
 */
export type Operations = Message<"sf.substreams.internal.v2.Operations"> & {
  /**
   * @generated from field: repeated sf.substreams.internal.v2.Operation operations = 1;
   */
  operations: Operation[];
};

/**
 * Describes the message sf.substreams.internal.v2.Operations.
 * Use `create(OperationsSchema)` to create a new message.
 */
export const OperationsSchema: GenMessage<Operations> = /*@__PURE__*/
  messageDesc(file_sf_substreams_intern_v2_deltas, 1);

/**
 * @generated from message sf.substreams.internal.v2.Operation
 */
export type Operation = Message<"sf.substreams.internal.v2.Operation"> & {
  /**
   * @generated from field: sf.substreams.internal.v2.Operation.Type type = 1;
   */
  type: Operation_Type;

  /**
   * @generated from field: uint64 ord = 2;
   */
  ord: bigint;

  /**
   * @generated from field: string key = 3;
   */
  key: string;

  /**
   * @generated from field: bytes value = 4;
   */
  value: Uint8Array;
};

/**
 * Describes the message sf.substreams.internal.v2.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
export const OperationSchema: GenMessage<Operation> = /*@__PURE__*/
  messageDesc(file_sf_substreams_intern_v2_deltas, 2);

/**
 * @generated from enum sf.substreams.internal.v2.Operation.Type
 */
export enum Operation_Type {
  /**
   * @generated from enum value: SET = 0;
   */
  SET = 0,

  /**
   * @generated from enum value: SET_BYTES = 1;
   */
  SET_BYTES = 1,

  /**
   * @generated from enum value: SET_IF_NOT_EXISTS = 2;
   */
  SET_IF_NOT_EXISTS = 2,

  /**
   * @generated from enum value: SET_BYTES_IF_NOT_EXISTS = 3;
   */
  SET_BYTES_IF_NOT_EXISTS = 3,

  /**
   * @generated from enum value: APPEND = 4;
   */
  APPEND = 4,

  /**
   * @generated from enum value: DELETE_PREFIX = 5;
   */
  DELETE_PREFIX = 5,

  /**
   * @generated from enum value: SET_MAX_BIG_INT = 6;
   */
  SET_MAX_BIG_INT = 6,

  /**
   * @generated from enum value: SET_MAX_INT64 = 7;
   */
  SET_MAX_INT64 = 7,

  /**
   * @generated from enum value: SET_MAX_FLOAT64 = 8;
   */
  SET_MAX_FLOAT64 = 8,

  /**
   * @generated from enum value: SET_MAX_BIG_DECIMAL = 9;
   */
  SET_MAX_BIG_DECIMAL = 9,

  /**
   * @generated from enum value: SET_MIN_BIG_INT = 10;
   */
  SET_MIN_BIG_INT = 10,

  /**
   * @generated from enum value: SET_MIN_INT64 = 11;
   */
  SET_MIN_INT64 = 11,

  /**
   * @generated from enum value: SET_MIN_FLOAT64 = 12;
   */
  SET_MIN_FLOAT64 = 12,

  /**
   * @generated from enum value: SET_MIN_BIG_DECIMAL = 13;
   */
  SET_MIN_BIG_DECIMAL = 13,

  /**
   * @generated from enum value: SUM_BIG_INT = 14;
   */
  SUM_BIG_INT = 14,

  /**
   * @generated from enum value: SUM_INT64 = 15;
   */
  SUM_INT64 = 15,

  /**
   * @generated from enum value: SUM_FLOAT64 = 16;
   */
  SUM_FLOAT64 = 16,

  /**
   * @generated from enum value: SUM_BIG_DECIMAL = 17;
   */
  SUM_BIG_DECIMAL = 17,

  /**
   * @generated from enum value: SET_SUM_INT64 = 18;
   */
  SET_SUM_INT64 = 18,

  /**
   * @generated from enum value: SET_SUM_FLOAT64 = 19;
   */
  SET_SUM_FLOAT64 = 19,

  /**
   * @generated from enum value: SET_SUM_BIG_INT = 20;
   */
  SET_SUM_BIG_INT = 20,

  /**
   * @generated from enum value: SET_SUM_BIG_DECIMAL = 21;
   */
  SET_SUM_BIG_DECIMAL = 21,
}

/**
 * Describes the enum sf.substreams.internal.v2.Operation.Type.
 */
export const Operation_TypeSchema: GenEnum<Operation_Type> = /*@__PURE__*/
  enumDesc(file_sf_substreams_intern_v2_deltas, 2, 0);

