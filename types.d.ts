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
    class Stream extends NodeStream {}
    interface ReadableOptions extends NodeReadableOptions {}
    class Readable extends NodeReadable {}
    interface WritableOptions extends NodeWritableOptions {}
    class Writable extends NodeWritable {}
    interface DuplexOptions extends NodeDuplexOptions {}
    class Duplex extends NodeDuplex {}
    interface TransformOptions extends NodeTransformOptions {}
    class Transform extends NodeTransform {}
  }

  export = internal;
}
