import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  activebar:0,
  TabBarList: [{
    id:0,
    title: '首页',
    page: 'Home',
    normalicon: '&#xe6b8;',
    activeicon: '&#xe6bb;',
  },
  {
    id:1,
    title: '分类',
    page: 'Classify',
    normalicon: '&#xe7b1;',
    activeicon: '&#xe7b0;'
  },
  {
    id:2,
    title: '发现',
    page: 'Discover',
    normalicon: '&#xe67e;',
    activeicon: '&#xe6ba;'
  },
  {
    id:3,
    title: '购物车',
    page: 'Cart',
    normalicon: '&#xe6af;',
    activeicon: '&#xe6b9;'
  },
  {
    id:4,
    title: '我的',
    page: 'Me',
    normalicon: '&#xe78b;',
    activeicon: '&#xe78c;'
  }]
};

const mutations={
    active(state,index){
      state.activebar=index;
    }
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
});
