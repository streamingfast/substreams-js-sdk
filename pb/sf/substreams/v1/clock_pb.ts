// @generated by protoc-gen-es v2.3.0 with parameter "target=ts"
// @generated from file sf/substreams/v1/clock.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sf/substreams/v1/clock.proto.
 */
export const file_sf_substreams_v1_clock: GenFile = /*@__PURE__*/
  fileDesc("ChxzZi9zdWJzdHJlYW1zL3YxL2Nsb2NrLnByb3RvEhBzZi5zdWJzdHJlYW1zLnYxIlIKBUNsb2NrEgoKAmlkGAEgASgJEg4KBm51bWJlchgCIAEoBBItCgl0aW1lc3RhbXAYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIiYKCEJsb2NrUmVmEgoKAmlkGAEgASgJEg4KBm51bWJlchgCIAEoBEJGWkRnaXRodWIuY29tL3N0cmVhbWluZ2Zhc3Qvc3Vic3RyZWFtcy9wYi9zZi9zdWJzdHJlYW1zL3YxO3Bic3Vic3RyZWFtc2IGcHJvdG8z", [file_google_protobuf_timestamp]);

/**
 * Clock is a pointer to a block with added timestamp
 *
 * @generated from message sf.substreams.v1.Clock
 */
export type Clock = Message<"sf.substreams.v1.Clock"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: uint64 number = 2;
   */
  number: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;
};

/**
 * Describes the message sf.substreams.v1.Clock.
 * Use `create(ClockSchema)` to create a new message.
 */
export const ClockSchema: GenMessage<Clock> = /*@__PURE__*/
  messageDesc(file_sf_substreams_v1_clock, 0);

/**
 * BlockRef is a pointer to a block to which we don't know the timestamp
 *
 * @generated from message sf.substreams.v1.BlockRef
 */
export type BlockRef = Message<"sf.substreams.v1.BlockRef"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: uint64 number = 2;
   */
  number: bigint;
};

/**
 * Describes the message sf.substreams.v1.BlockRef.
 * Use `create(BlockRefSchema)` to create a new message.
 */
export const BlockRefSchema: GenMessage<BlockRef> = /*@__PURE__*/
  messageDesc(file_sf_substreams_v1_clock, 1);

