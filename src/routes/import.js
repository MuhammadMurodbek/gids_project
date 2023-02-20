import {lazy} from "react";

// import  GidPersonal from '../pages/gid.personal';
const GidPersonal = lazy(() => import("../pages/gid.personal"));
// import Article from '../pages/article';
const Article = lazy(() => import("../pages/article"));
// import AnsverMyapp from '../pages/ansverMyapplication';
const AnsverMyapp = lazy(() => import("../pages/ansverMyapplication"));
// import AnsverMyappEdit from '../pages/fill.application/edit.app';
const AnsverMyappEdit = lazy(() => import("../pages/fill.application/edit.app"));
// import Blog from '../pages/blog';
const Blog = lazy(() => import("../pages/blog"));
// import Advertising from '../pages/advertising';
const Advertising = lazy(() => import("../pages/advertising"));
// import ResetPassword from "../pages/auth/recover"
const ResetPassword = lazy(() => import("../pages/auth/recover"));
// import GidPersonalWider from "../pages/gid.personal.wider";
const GidPersonalWider = lazy(() => import("../pages/gid.personal.wider"));
// import Pay from '../pages/gid.personal.wider/reklama.pay';
const Pay = lazy(() => import("../pages/gid.personal.wider/reklama.pay"));
// import Reklama from '../pages/gid.personal.wider/reklama';
const Reklama = lazy(() => import("../pages/gid.personal.wider/reklama"));
// import History from '../pages/gid.personal.wider/history'
const History = lazy(() => import("../pages/gid.personal.wider/history"));
// import UpdatePassword from "../pages/auth/update"
const UpdatePassword = lazy(() => import("../pages/auth/update"));
// import notFound from "../pages/notFound"
const notFound = lazy(() => import("../pages/notFound"));
// import SeeProfile from '../pages/seeProfile';
const SeeProfile = lazy(() => import("../pages/seeProfile"));
// import MaqolaYozish from '../pages/gid.personal.wider/blog/MaqolaYozish'
const MaqolaYozish = lazy(() => import("../pages/gid.personal.wider/blog/MaqolaYozish"));
// import MaqolaYozishEdit from "../pages/gid.personal.wider/blog/MaqolaYozish/edit"
const MaqolaYozishEdit = lazy(() => import("../pages/gid.personal.wider/blog/MaqolaYozish/edit"));
// import MyAppEdit from "../pages/fullData/editable"
const MyAppEdit = lazy(() => import("../pages/fullData/editable"));
// import PaymentHistory from "../pages/gid.personal.wider/history/pay.history"
const PaymentHistory = lazy(() => import("../pages/gid.personal.wider/history/pay.history"));
// import GidPersonal from '../pages/gid.personal';
// import Article from '../pages/article';



// import MainPage from "../pages/main";
const MainPage = lazy(() => import("../pages/main"));
// import Auth from "../pages/auth/registration";
const Auth = lazy(() => import("../pages/auth/registration"));
// import About from "../pages/about";
const About = lazy(() => import("../pages/about"));
// import Forgits from "../pages/forgits";
const Forgits = lazy(() => import("../pages/forgits"));
// import Connect from "../pages/connect";
const Connect = lazy(() => import("../pages/connect"));
// import Verify from "../pages/auth/verify";
const Verify = lazy(() => import("../pages/auth/verify"));
// import ChooseGids from "../pages/choose.gids.tr";
const ChooseGids = lazy(() => import("../pages/choose.gids.tr"));
// import FillOutApplication from "../pages/fill.application";
const FillOutApplication = lazy(() => import("../pages/fill.application"));
// import FullData from '../pages/fullData';
const FullData = lazy(() => import("../pages/fullData"));
// import Request from '../pages/request';
const Request = lazy(() => import("../pages/request"));
// import Fullrequest from '../pages/follRequest'; 
const Fullrequest = lazy(() => import("../pages/follRequest"));
// import Cities from '../pages/cities';
const Cities = lazy(() => import("../pages/cities"));
// import Samarqand from '../pages/cities/Samarqand'
const Samarqand = lazy(() => import("../pages/cities.Samarqand"));
// import Xiva from '../pages/cities/Xiva'
const Xiva = lazy(() => import("../pages/cities.Xiva"));
// import Toshkent from '../pages/cities/Toshkent'
const Toshkent = lazy(() => import("../pages/cities.Toshkent"));
 
export {
    notFound,
    PaymentHistory,
    MainPage, 
    Auth, 
    About,
    Forgits, 
    Verify, 
    ChooseGids, 
    Connect, 
    Request, 
    Fullrequest, 
    FillOutApplication,
    GidPersonal, 
    Cities,
    Samarqand,
    FullData,
    Article,
    AnsverMyapp,
    AnsverMyappEdit,
    Blog,
    Advertising,
    GidPersonalWider,
    Pay,
    Reklama,
    ResetPassword,
    History, 
    UpdatePassword,
    SeeProfile,
    MaqolaYozish,
    MaqolaYozishEdit,
    MyAppEdit,
    Xiva,
    Toshkent,
}
