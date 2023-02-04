import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {  //тип : webpack.Configuration
    const {paths, mode, isDev} = options;
    console.log("buildWebpackConfig = ",options)

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
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),   //Свойство позволяющее не указывать перечисленные в extensions расширения
        devtool: isDev ? 'inline-source-map' : undefined, //Для отлавливания ошибок в сборке, с указанием модуля с ошибкой из сборки
        devServer: isDev ? buildDevServer(options) : undefined, //Функция ВэбПак-Дев_Сервер
    }
}