import Vue from "vue";
import Router from "vue-router";
import ImgDisplay from "@/components/ImgDisplay";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/ImgDisplay",
      name: "ImgDisplay",
      component: ImgDisplay
    }
  ]
});
