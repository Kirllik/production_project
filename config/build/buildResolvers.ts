import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions { // тип TS ResolveOptions
    return {
        extensions: ['.tsx', '.ts', '.js'], // Свойство позволяющее не указывать перечисленные в extensions расширения
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
