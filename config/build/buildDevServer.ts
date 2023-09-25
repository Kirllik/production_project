import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server"; //импорт переименованного пакета Configuration в DevServerConfiguration

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,  //port
        open: true,          //Автоматическое открытия окна в браузере при запуске сервера
        historyApiFallback: true,  //Для проксирования запросов через корневую страницу index.html, для SPA(одностраничников)
        hot: true,  //Свойство - HotModuleReplacementPlugin
    }
}