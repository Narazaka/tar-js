declare class Tar {
    written: number;
    out: Uint8Array;
    constructor(recordsPerBlock?: number);
    append(filepath: string, input: string | Uint8Array, opts?: Tar.TarOptions, callback?: (out: Uint8Array) => any): Uint8Array;
    append(filepath: string, input: string | Uint8Array, callback?: (out: Uint8Array) => any): Uint8Array;
    clear(): void;
}

declare namespace Tar {
    interface TarOptions {
        mode?: number;
        mtime?: number;
        uid?: number;
        gid?: number;
        owner?: string;
        group?: string;
    }
}

export = Tar;
