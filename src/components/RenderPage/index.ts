import RenderPage from './RenderPage.vue'

RenderPage.install = (app: any) => {
    app.component(RenderPage.name, RenderPage)
}

export default RenderPage
