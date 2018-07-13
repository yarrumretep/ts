// Type definitions for pull-stream 3.6.8
// Project: https://github.com/pull-stream/pull-stream
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'pull-stream' {
export type PullStream = {
    // FIXME this should be actual streams, not 'any'
    (source: any, sink: any): void;

    collect: (cb: (error: Error | null, values: Array<Buffer>) => any) => void,
    drain: (handler: (message: Buffer) => void, errorHandler?: () => boolean) => void;
    values: (values: Array<string | Buffer>) => void;
};

const pull: PullStream;

export default pull;
}