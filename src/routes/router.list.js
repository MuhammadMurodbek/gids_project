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
        url:'/about',
        component:ListRouter.About
    },
    {
        url:'/forgits',
        component:ListRouter.Forgits
    },
    {
        url:'/connect',
        component:ListRouter.Connect
    },
    {
        url: './application',
        component:ListRouter.Application
    }
]