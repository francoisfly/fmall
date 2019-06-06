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
    <div class="swiper-squared">
        <div class="swiper_cell">
            <a href="/">
                <i><img src="../assets/images/invite.png" alt=""></i>
                <p>邀请有礼</p>
            </a>
            <a href="/">
                <i><img src="../assets/images/vip.png" alt=""></i>
                <p>会员领劵</p>
            </a>
        </div>
        <div class="swiper-line">
            <div class="title">
                <a href="/">
                    <img src="../assets/images/news.png">
                 </a>
            </div>
            <div class="more"><a href="/">更多</a></div>
            <div class="swiper-scroll">
                <ul class="swiper-wrapper">
                    <li v-for="(item,index) in news" :key="index">
                        <a :href="item.url">
                            {{item.title}}
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <TabBar></TabBar>
</div>
</template>

<script>
var num = 0;
import TabBar from "../components/TabBar";
export default {
    name: "home",
    components: {
        TabBar
    },
    created: function () {
        this.swiperscroll();
    },
    data: function () {
        return {
            imgs: [{
                    url: 'https://res.vmallres.com/pimages//pages/adsImages/YRX8wnxFhorBG3UkwlT0.jpg',
                    alt: ''
                },
                {
                    url: 'https://res.vmallres.com/pimages//pages/adsImages/jgt3b8GrxAk5sg0JdBgF.jpg',
                    alt: ''
                },
                {
                    url: 'https://res.vmallres.com/pimages//pages/adsImages/hb4JpF67sR9eL8qNgM24.jpg',
                    alt: ''
                },
                {
                    url: 'https://res.vmallres.com/pimages//pages/adsImages/kxQO9w2hqQ2lQTKWusLk.jpg',
                    alt: ''
                }
            ],
            news: [{
                url: '/',
                title: '【互动赢好礼】618持续升温！这些优惠信息千万别错过'
            }, {
                url: '/',
                title: '【互动赢好礼】1899元，华为麦芒8正式发布！'
            }, {
                url: '/',
                title: '升级快讯 ▏14款机型开启EMUI 9.1公测，更多机型在路上！'
            }, {
                url: '/',
                title: '华为麦芒8官宣，6月5日成都见！'
            }]
        }
    },
    methods: {
        swiperscroll: function () {

            // $ul.append($li.eq(0).clone());
            setInterval(
                function () {
                    var scrollDiv = $('.swiper-scroll'),
                        $ul = $('.swiper-wrapper'),
                        $li = $ul.find('li'),
                        $length = $li.length,
                        $liHeight = $li.height();
                    num++;
                    if (num == $length) {
                        num = 0;
                    }
                    $ul.css({
                        'transform': 'translate3d(0px, -' + $liHeight * (num) + 'px, 0px)',
                        'transition-duration': '300ms'
                    });

                }, 4000);
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
</style><style lang="scss" scoped>
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
        z-index: 999999;

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
        padding: .4rem;
        padding-top: px2rem(97);

        .swip-img {
            border-radius: 0.2rem;
            width: 97%;
            height: 100%;
            margin-left: 1.5%;
            margin-right: 1.5%;
        }
    }

    .swiper-squared {
        background-color: #fff;

        .swiper_cell::before,
        swiper_cell::after {
            content: " ";
            display: table;
        }

        .swiper_cell {
            position: relative;
            overflow: hidden;
            padding: 0 0.6rem;

            a {
                width: px2rem(120);
                padding: .3rem .2rem;
                display: block;
                text-align: center;
                position: relative;
                float: left;

                i {
                    display: inline-block;
                    width: 2rem;
                    height: 2rem;
                    margin-bottom: .2rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                p {
                    padding-top: 0rem;
                    font-size: .5rem;
                    color: #9b9b9b;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1.3;
                }
            }
        }

        .swiper-line {
            margin: 0 .9rem;
            height: 2rem;
            position: relative;
            border-top:  #f2f2f2 solid 1px;

            .title {
                display: flex;
                -webkit-box-align: center;
                -moz-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                -moz-align-items: center;
                align-items: center;
                float: left;
                height: 2rem;
                position: relative;

                a {
                    height: .6rem;
                    width: auto;
                    display: block;
                    padding: .5rem 0;

                    img {
                        width: auto;
                        height: .6rem;
                        border: 0;
                        max-width: 100%;
                        vertical-align: top;
                    }
                }
            }

            .more {
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -0.3rem;
                z-index: 2;

                a {
                    display: block;
                    font-size: .6rem;
                    color: #999;
                }
            }

            .swiper-scroll {
                margin: 0 auto;
                z-index: 1;
                padding-right: 1.5rem;
                height: 2rem;
                line-height: 2rem;
                vertical-align: middle;
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
               

                .swiper-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    -webkit-transition-property: -webkit-transform;
                    -moz-transition-property: -moz-transform;
                    -o-transition-property: -o-transform;
                    -ms-transition-property: -ms-transform;
                    transition-property: transform;
                    -webkit-box-sizing: content-box;
                    -moz-box-sizing: content-box;
                    -webkit-box-orient: vertical;
                    -moz-box-orient: vertical;
                    -ms-flex-direction: column;
                    -webkit-flex-direction: column;
                    flex-direction: column;

                    li {
                        -webkit-transform: translate3d(0px, 0, 0);
                        -moz-transform: translate3d(0px, 0, 0);
                        -o-transform: translate(0px, 0px);
                        -ms-transform: translate3d(0px, 0, 0);
                        transform: translate3d(0px, 0, 0);
                        -webkit-flex-shrink: 0;
                        -ms-flex: 0 0 auto;
                        flex-shrink: 0;
                        width: 100%;
                        height: 100%;
                        position: relative;
                       

                        a:before {
                            content: '';
                            position: absolute;
                            left: .4rem;
                            top: 50%;
                            margin-top: -0.1rem;
                            width: .2rem;
                            height: .2rem;
                            display: block;
                            border-radius: .2rem;
                            background-color: rgba(155, 155, 155, 0.5)
                        }

                        a {
                            display: block;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-size: .6rem;
                            color: #4d4d4d;
                            padding-left: 1rem;
                        }
                    }
                }
            }
        }
    }

}
</style><style>
.mint-swipe-indicator {
    width: 0.4rem !important;
    height: 0.4rem !important;
    margin: 0 0.1rem !important;
}
</style>
