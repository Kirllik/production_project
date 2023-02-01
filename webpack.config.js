const path = require('path');  //стандартный модуль из среды Node.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',   //"production" минимизированный или 'development'
    entry: path.resolve   //метод для склейки путей
        (
            __dirname,   //папка в которой мы находимся
            'src',       //участки пути для склейки
            'index.ts'   //участки пути для склейки
        ),

    output: {
        filename: "[name].[contenthash].js",  //имя файла сборки, [contenthash] для уникального номера в имени сборки
        path: path.resolve(__dirname, 'build'), //путь сохранения сборки
        clean: true,   //для очистки в папке сборки версий сборки
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')  // для встраивания root корневой ссылки в buld/index.html
        }), //Для создания странички index.html в buld и упаковки в неё скриптов
        new webpack.ProgressPlugin(), //для возможности настройки отчёта при компиляции сборки
        ],
    //instance для TS
    module: {
        rules: [
            {
                test: /\.tsx?$/,  //регулярное выражение, для поиска файлов, которые нужно пропустить через лоадер. В данном случае это tsx
                use: 'ts-loader', //лоадер который надо использовать для регулярки выше
                exclude: /node_modules/ //исключение папки
            },
        ],
    },
    resolve: {   //Свойство позволяющее не указывать перечисленные в extensions расширения
        extensions: ['.tsx', '.ts', '.js'],
    },
}