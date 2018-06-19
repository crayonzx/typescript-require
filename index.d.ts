import { CompilerOptions } from "typescript/lib/typescript";

interface TSROptions {
    /**
     * @default true
     */
    exitOnError?: boolean;

    /**
     * Where to generate js files
     * @default 'tmp/tsreq'
     */
    tmpDir?: string;

    extraFiles?: string[];

    /**
     * @default null
     */
    projectDir?: string;

    /**
     * Typescript Compiler options
     */
    tscOptions?: CompilerOptions;
  }

declare var configure: (options: TSROptions) => void;
export = configure;
