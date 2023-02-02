
export type BuildMode = 'production' | 'development';  //переменная типа может принимать всего 2 значения

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}