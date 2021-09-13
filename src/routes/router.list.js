import * as ListRouter from "./import"

export const routes = [
    {
        url:'/',
        component:ListRouter.MainPage
    },
    {
        url:'/auth',
        component:ListRouter.Auth
    },
    {
        url:"/auth/verify",
        component:ListRouter.Verify
    },
    {
        url:'/about',
        component:ListRouter.About
    },
    {
        url:'/forgits',
        component:ListRouter.forgits
    }
]