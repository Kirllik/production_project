import HtmlWebpackPlugin from "html-webpack-plugin";

import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {   // тип TS для плагинов  WebpackPluginInstance[]

    return [
        new HtmlWebpackPlugin({template: paths.html}), //Для создания странички index.html в buld и упаковки в неё скриптов
        new webpack.ProgressPlugin(), //для возможности настройки отчёта при компиляции сборки(показывает прогресс сборки при компиляции)
    ]
}