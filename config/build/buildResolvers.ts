import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {  //тип TS ResolveOptions

    return {
        extensions: ['.tsx', '.ts', '.js'], //Свойство позволяющее не указывать перечисленные в extensions расширения
    }
}