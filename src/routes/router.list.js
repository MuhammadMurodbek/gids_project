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
        url:'/main',
        component:ListRouter.MainPage
    },
    {
        url:'/application-form',
        component:ListRouter.FillOutApplication,
    },
    {
        url:'/request',
        component:ListRouter.Request
    },
    {
        url:'/fullrequest',
        component:ListRouter.Fullrequest
    },
    {
        url:'/cities',
        component:ListRouter.Cities
    },
    {
        url:'/fulldata',
        component:ListRouter.FullData,
    },
    {
        url:'/gid-personal',
        component:ListRouter.GidPersonal
    },
    {
        url:'/article',
        component:ListRouter.Article
    }


]