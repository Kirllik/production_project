import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {  // тип TS для лоудеров  RuleSetRule[]

    const typescriptLoader = {
        test: /\.tsx?$/,  //регулярное выражение, для поиска файлов, которые нужно пропустить через лоадер. В данном случае это tsx
        use: 'ts-loader', //лоадер который надо использовать для регулярки выше
        exclude: /node_modules/ //исключение папки
    }

    return [
        typescriptLoader,
    ]
}