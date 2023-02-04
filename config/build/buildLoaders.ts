import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {  // тип TS для лоудеров  RuleSetRule[]

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? 'style-Loader' : MiniCssExtractPlugin.loader,  //Если режим dev-используем style-Loader. Если PROD генерим CSS в отдельный файл build/css
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName:isDev
                            ? '[path][name]__[local]--[hash:base64:5]' //Путь до компонента, имя, локальность стиля, индивидуальный текст (для читабельности в консоли инстр.разраб. при дебагинге)
                            : '[hash:base64:5]'
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }
    //Если не используем тайпскрипт - нужен babel-loader для работы c JSX
    const typescriptLoader = {
        test: /\.tsx?$/,  //регулярное выражение, для поиска файлов, которые нужно пропустить через лоадер. В данном случае это tsx
        use: 'ts-loader', //лоадер который надо использовать для регулярки выше
        exclude: /node_modules/ //исключение папки
    }

    return [
        typescriptLoader,
        cssLoader   //Лоадер для SCSS

    ]
}