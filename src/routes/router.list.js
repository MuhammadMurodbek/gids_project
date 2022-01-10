import * as ListRouter from "./import"


export const routes_user = [
    {
        url:'/gids', 
        component:ListRouter.ChooseGids,
    },
    {
        url:'/application-form',
        component:ListRouter.FillOutApplication,
    },
    {
        url:'/gid-personal',
        component:ListRouter.GidPersonal
    },
    {
        url:'/answer-me/:id',
        component:ListRouter.AnsverMyapp
    },
    {
        url:'/answer-me/edit/:id',
        component:ListRouter.AnsverMyappEdit
    },
    {
        url:'/seeprofile',
        component:ListRouter.SeeProfile
    },
  

] 
export const routes_gid = [
  
    {
        url:'/request',
        component:ListRouter.Request
    },
    {
        url:'/request/:id',
        component:ListRouter.Fullrequest
    },
    {
        url:'/gid-personal-wider',
        component:ListRouter.GidPersonalWider
    },
    {
        url:'/article',
        component:ListRouter.Article
    },
    {
        url:'/advertising',
        component:ListRouter.Advertising
    },
      {
        url:'/reklama',
        component:ListRouter.Reklama
    },
    {
        url:'/pay',
        component:ListRouter.Pay
    },
    {
        url:'/history',
        component:ListRouter.History
    },
    {
        url:'/forgits',
        component:ListRouter.Forgits
    },
    {
        url:'/write-article',
        component:ListRouter.MaqolaYozish
    }
]

export const routes_traslater =  [
  
    {
        url:'/request',
        component:ListRouter.Request
    },
    {
        url:'/fullrequest',
        component:ListRouter.Fullrequest
    },
    {
        url:'/gid-personal-wider',
        component:ListRouter.GidPersonalWider
    },
    {
        url:'/article',
        component:ListRouter.Article
    },
    {
        url:'/advertising',
        component:ListRouter.Advertising
    },
    {
        url:'/pay',
        component:ListRouter.Pay
    },
    {
        url:'/reklama',
        component:ListRouter.Reklama
    },
    {
        url:'/history',
        component:ListRouter.History
    },
    {
        url:'/forgits',
        component:ListRouter.Forgits
    },
    {
        url:'/write-article',
        component:ListRouter.MaqolaYozish
    }

]

export const routes_write =  [
   
    {
        url:'/request',
        component:ListRouter.Request
    },
    {
        url:'/fullrequest',
        component:ListRouter.Fullrequest
    },
    {
        url:'/gid-personal-wider',
        component:ListRouter.GidPersonalWider
    },
    {
        url:'/article',
        component:ListRouter.Article
    },
    {
        url:'/advertising',
        component:ListRouter.Advertising
    },
    {
        url:'/pay',
        component:ListRouter.Pay
    },
    {
        url:'/reklama',
        component:ListRouter.Reklama
    },
    {
        url:'/history',
        component:ListRouter.History
    },
    {
        url:'/forgits',
        component:ListRouter.Forgits
    },
]


export const routes = [
    {
        url:'/gids',
        component:ListRouter.ChooseGids,
    },
    {
        url:'/seeprofile',
        component:ListRouter.SeeProfile
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
        url:'/auth/update-password',
        component:ListRouter.UpdatePassword
    },
    {
        url:"/auth/reset",
        component:ListRouter.ResetPassword
    },
    {
        url:'/about',
        component:ListRouter.About
    },
    {
        url:'/connect',
        component:ListRouter.Connect
    },
    {
        url:'/',
        component:ListRouter.MainPage
    },
    {
        url:'/cities',
        component:ListRouter.Cities
    },
    {
        url:'/blog/:id',
        component:ListRouter.FullData,
    },
    {
          url:'/blog',
          component:ListRouter.Blog
    },
    {
        url:'*',
        component:ListRouter.notFound
    }

]

const full_user = [...routes_user, ...routes]
const full_gid = [...routes_gid , ...routes]
const full_writer = [...routes_write, ...routes]
const full_translator = [...routes_traslater, ...routes]

export function check_route(params) {
    if(params === 'gid') return full_gid
    else if(params ==="simple_user") return full_user
    else if(params === "writer") return full_writer
    else return full_translator
}