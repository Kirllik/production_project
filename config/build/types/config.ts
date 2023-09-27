export type BuildMode = 'production' | 'development'; // переменная типа может принимать всего 2 значения

export interface BuildPaths { // типизация путей
    entry: string;
    build: string;
    html: string;
    src: string; // Путь до папки с исходным кодом
}

export interface BuildEnv{ // переменные окружения
    mode: BuildMode,
    port: number
}

export interface BuildOptions { // типизация опций для передачи в buildWebpackConfig(options)
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
