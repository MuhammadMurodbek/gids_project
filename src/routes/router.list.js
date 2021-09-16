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
        url:'/request',
        component:ListRouter.Request
    },
    {
        url:'/fullrequest',
        component:ListRouter.Fullrequest
    }

]