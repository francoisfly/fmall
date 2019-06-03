import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Classify from "./views/Classify.vue";
import Discover from "./views/Discover.vue";
import Cart from "./views/Cart.vue";
import Me from "./views/Me.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Classify",
      name: "Classify",
      component: Classify
    },
    {
      path: "/Discover",
      name: "Discover",
      component: Discover
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/Me",
      name: "Me",
      component: Me
    }
  ]
});
