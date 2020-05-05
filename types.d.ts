import {
  Readable, Stream, ReadableOptions
} from 'stream';

declare namespace unstream {
  export type IsomorphicReadable = Readable;
  export type IsomorphicReadableOptions = ReadableOptions;
}

declare const unstream: typeof Stream;

export default unstream;
