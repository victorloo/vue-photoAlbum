import Vue from "vue";
import Router from "vue-router";
import ImgDisplay from "@/components/ImgDisplay";
import ItemListElement from "@/components/ItemListElement";
import AuthPanel from "@/components/AuthPanel";
import PhotoForm from "@/components/PhotoForm";
import Index from "@/components/Index";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Show from "@/components/Show";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/ImgDisplay",
      name: "ImgDisplay",
      component: ImgDisplay
    },
    {
      path: "/ItemListElement",
      name: "ItemListElement",
      component: ItemListElement
    },
    {
      path: "/AuthPanel",
      name: "AuthPanel",
      component: AuthPanel
    },
    {
      path: "/PhotoForm",
      name: "PhotoForm",
      component: PhotoForm
    },
    {
      path: "/Index",
      name: "Index",
      component: Index
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/Show",
      name: "Show",
      component: Show
    }
  ]
});
