import * as ListRouter from "./import"

export const routes = [
    {
        url:'/',
        component:ListRouter.MainPage
    },
    {
        url:'/auth',
        component:ListRouter.Auth
    }
]