import path from "path"; //стандартный модуль из среды Node.js
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
    entry: path.resolve   //метод для склейки путей
        (
            __dirname,   //папка в которой мы находимся
            'src',       //участки пути для склейки
            'index.ts'   //участки пути для склейки
        ),
    build: path.resolve(__dirname, 'build'), //путь сохранения сборки
    html: path.resolve(__dirname, 'public', 'index.html')  // для встраивания root корневой ссылки в build/index.html
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'production',
    paths,
    isDev,
})

export default config;