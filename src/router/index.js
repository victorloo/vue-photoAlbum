import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Show from "@/components/Show";
import New from "@/components/New";
import Edit from "@/components/Edit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/photos/new",
      name: "New",
      component: New
    },
    {
      path: "/photos/edit/:id",
      name: "Edit",
      component: Edit
    },
    {
      path: "/photos/:id",
      name: "Show",
      component: Show
    }
  ]
});
