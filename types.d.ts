import {
  Readable as StreamReadable, ReadableOptions as StreamReadableOptions
} from 'stream';

declare module "unstream" {
  namespace internal {
    export type Readable = StreamReadable;
    export type ReadableOptions = StreamReadableOptions;
  }

  export = internal;
}
