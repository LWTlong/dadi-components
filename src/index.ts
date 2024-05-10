import {App} from "vue";

export { textDefaultProps , textStylePropNames, TextComponentProps,
    imageDefaultProps, imageStylePropsNames, ImageComponentProps,
    shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps,
    AllComponentProps
} from './defaultProps'

import LText from "@/components/LText";
import LImage from "@/components/LImage";
import LShape from "@/components/LShape";
import RenderPage from "@/components/RenderPage";

const components = [
    LText,
    LImage,
    LShape,
    RenderPage
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export {
    LText,
    LImage,
    LShape,
    RenderPage,
    install
}

export default {
    install
}
