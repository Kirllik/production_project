import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {   // тип TS для плагинов  WebpackPluginInstance[]

    return [
        new HtmlWebpackPlugin({template: paths.html}), //Для создания странички index.html в buld и упаковки в неё скриптов
        new webpack.ProgressPlugin(), //для возможности настройки отчёта при компиляции сборки(показывает прогресс сборки при компиляции)
        new MiniCssExtractPlugin({   //для создания индивидуальных css файлов, для JS файлов требующих css
            filename:'css/[name].[contenthash:8].css',     //name file
            chunkFilename:'css/[name].[contenthash:8].css',  //name chunkFilename
        }),
        new webpack.DefinePlugin({ //Для проброса в приложение глобальных переменных
            __IS_DEV__:JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(), //Плагин для применения изменений в коде, без перезагрузки страницы приложения
    ]
}