import {
  Stream as NodeStream,
  Readable as NodeReadable,
  ReadableOptions as NodeReadableOptions,
  WritableOptions as NodeWritableOptions,
  Writable as NodeWritable,
  DuplexOptions as NodeDuplexOptions,
  Duplex as NodeDuplex,
  TransformOptions as NodeTransformOptions,
  Transform as NodeTransform,
} from 'stream';

declare module "isomorphic-stream" {
  namespace internal {
    export type Stream = NodeStream;
    export type ReadableOptions = NodeReadableOptions;
    export type Readable = NodeReadable;
    export type WritableOptions = NodeWritableOptions;
    export type Writable = NodeWritable;
    export type DuplexOptions = NodeDuplexOptions;
    export type Duplex = NodeDuplex;
    export type TransformOptions = NodeTransformOptions;
    export type Transform = NodeTransform;
  }

  export = internal;
}
