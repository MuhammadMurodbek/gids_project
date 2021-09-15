import * as ListRouter from "./import"

export const routes = [
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
        url:'/gids',
        component:ListRouter.ChooseGids,
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
        url: '/application',
        component:ListRouter.Application
    },
    {
        url:'/main',
        component:ListRouter.MainPage
    },
    {
        url:'/application-form',
        component:ListRouter.FillOutApplication,
    }
]