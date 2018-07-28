import Vue from "vue";
import Router from "vue-router";
import ImgDisplay from "@/components/ImgDisplay";
import ItemListElement from "@/components/ItemListElement";
import AuthPanel from "@/components/AuthPanel";

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
    }
  ]
});
