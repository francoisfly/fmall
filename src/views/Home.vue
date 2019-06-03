<template>
<div class="home page">
    <header>
        <router-link to="/">
            <img class="logo" src="../assets/logo.png" alt="logo">
        </router-link>
            <router-link to="/">
                <div class="sreach">
                    <i class="icon iconfont">&#xe65c;</i>
                    <i class="text">搜索</i>
                </div>
            </router-link>
            <router-link to="/Login" class="btn-link">登录</router-link>
    </header>
    <div class="swip">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
              <img :src="img.url"  class="swip-img">
            </mt-swipe-item>

        </mt-swipe>
    </div>

</div>
</template>

<script>
export default {
    name: "home",
    components: {

    },
    data:function(){
      return{
        imgs:[
          {
            url:'https://res.vmallres.com/pimages//pages/adsImages/YRX8wnxFhorBG3UkwlT0.jpg',
            alt:''
          },
          {
            url:'https://res.vmallres.com/pimages//pages/adsImages/jgt3b8GrxAk5sg0JdBgF.jpg',
            alt:''
          },
          {
            url:'https://res.vmallres.com/pimages//pages/adsImages/hb4JpF67sR9eL8qNgM24.jpg',
            alt:''
          },
          {
            url:'https://res.vmallres.com/pimages//pages/adsImages/kxQO9w2hqQ2lQTKWusLk.jpg',
            alt:''
          }
        ]
      }
    }
};
</script>

<style lang="scss">
html,
body,
#app {
    height: 100%;
    background-color: #fff;
    overflow: hidden;

    .page {
        height: calc(100% - 2.3rem);
        background-color: #f2f2f2;
        overflow: auto;
    }
}
</style>
<style lang="scss" scoped>
.home {
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to right, #0a7bfc, #6e6be7, #fd54af);
        padding: .3rem .5rem;
        overflow: hidden;
        height: px2rem(70);
        line-height: px2rem(70);

        .logo {
            width: px2rem(180);
            float: left;
        }

        .sreach {
            width: px2rem(360);
            height: px2rem(70);
            line-height: px2rem(70);
            padding: 0 0.3rem;
            background-color: #fff;
            float: left;
            border-radius: 0.2rem;
            font-size: 0.65rem;
            color: #0a7bfc;
            position: relative;
            overflow: hidden;

            .icon {
                font-size: 1rem;
                margin-right: 0.3rem;
                float: left;
            }

            .text {
                float: left;
                font-style: normal;
            }
        }

        .btn-link {
            float: right;
            font-size: 0.65rem;
            color: #fff;
        }
    }

    .swip {
        height: px2rem(280);
        background: linear-gradient(to right, #0a7bfc, #6e6be7, #fd54af);
        margin-top: px2rem(98);
        padding: .4rem;
      
      .swip-img{
         border-radius: 0.2rem;
         width: 97%;
         height: 100%;
         margin-left:1.5%; 
         margin-right: 1.5%;
      }
    }

}




</style>
<style>
.mint-swipe-indicator {
    width: 0.4rem !important;
    height: 0.4rem !important;
    margin: 0 0.1rem !important;
}
</style>
