import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,  //"production" минимизированный или 'development'
        entry: paths.entry, // склеенный путь

        output: {
            filename: "[name].[contenthash].js",  //имя файла сборки, [contenthash] для уникального номера в имени сборки
            path: paths.build, //путь сохранения сборки
            clean: true,   //для очистки в папке сборки версий сборки
        },

        plugins: buildPlugins(options),
        //instance для TS
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),  //Свойство позволяющее не указывать перечисленные в extensions расширения
    }
}