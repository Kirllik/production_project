import path from "path"; //стандартный модуль из среды Node.js
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {    //объект с путями
        entry: path.resolve   //метод для склейки путей
            (
                __dirname,   //папка в которой мы находимся
                'src',       //участки пути для склейки
                'index.tsx'   //участки пути для склейки
            ),
        build: path.resolve(__dirname, 'build'), //путь сохранения сборки
        html: path.resolve(__dirname, 'public', 'index.html')  // для встраивания root корневой ссылки в build/index.html
    }
//------------------------------------------------------------------------------------------------------
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;  //если при старте скрипта передать --env port=4000, то переменная PORT будет равна 4000, если ничего не передать, то 3000

    const isDev = mode === 'development';
    console.log(isDev)
    console.log(PORT)

    //---------------------------------------------------------------------------------------------
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode, //можно написать и просто mode,
        paths,  //объект с путями
        isDev,
        port: PORT,
    })

    return config
};