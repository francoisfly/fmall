<template>
<div class="tabbar">
    <ul>
        <router-link class="tab-item" v-for="(pages,index) in TabBarList" :to="{name:pages.page}" tag="li" :key="index" @click.native="active(index)">
            <p><i class="icon iconfont" v-html="activebar==index?pages.activeicon:pages.normalicon"></i></p>
            <p>{{pages.title}}</p>
        </router-link>
    </ul>
</div>
</template>

<script>
import store from '../store.js';
import { mapState } from 'vuex';
import {mapMutations} from 'vuex'
export default {
    created:function(){
        //this.active();
        var pageid=0,pagename=this.$route.name;
        for (let index = 0; index < this.TabBarList.length; index++) {
           if(pagename== this.TabBarList[index].page){
               this.active(this.TabBarList[index].id);
           }  
        }
    },
    computed:{
        ...mapState({TabBarList:'TabBarList',activebar:'activebar'})
    },
    methods:{
        ...mapMutations(['active'])
    },
    store,
    name: 'tabbar',
    data: function () {
        return {
            //activebar: 0,
        }
    }
}
</script>

<style lang="scss" scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 0.18rem 0;

    ul {
        .tab-item {
            width: px2rem(150);
            float: left;
            text-align: center;

            p {
                font-size: 0.55rem;

                i {
                    font-size: 1.2rem;
                }
            }
        }

        .router-link-exact-active {
            p {
                color: #0a7bfc;
            }
        }
    }
}
</style>
