<template>
    <div class="wrap">
	    <s-common-header></s-common-header>
            <div class="banner">	
                <div class="swiper-container">
                    <div class="swiper-wrapper" v-if="indexData.images">
                        <div class="swiper-slide"  v-for="(item,index) in indexData.images" :key="index">
                            <a href="">
                                <img :src="item.src" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="nav-link">
                <router-link to="/projects">
                    <span class="icon-case"></span>
                    <h2>设计案例</h2>
                </router-link>
                <router-link to="/works">
                    <span class="icon-works"></span>
                    <h2>装修图库</h2>
                </router-link>
                <router-link to="/designer">
                    <span class="icon-zsj"></span>
                    <h2>找设计师</h2>
                </router-link>
                <router-link to="/ask">
                    <span class="icon-ask"></span>
                    <h2>有问必答</h2>
                </router-link>
                <router-link to="/interview">
                    <span class="icon-sjszf"></span>
                    <h2>设计专访</h2>
                </router-link>
            </div>
            <div class="link-tuji">
                <a v-for="(item,index) in indexData.imagesLink" :key="index">
                    <img :src="item.src">
                </a>
            </div>
             <div class="hot-sjs">
                <s-title v-if="indexData.hotSjs&&indexData.hotSjs.title" :titles ="indexData.hotSjs.title"></s-title>
                <div class="sjs-list">
                    <ul v-if="indexData.hotSjs&&indexData.hotSjs.sjsList">
                        <s-hot-list  v-for="(items,index) in indexData.hotSjs.sjsList" :key="index" :items="items"></s-hot-list>
                    </ul>
                </div>
                <div class="company-list">
                    <ul v-if="indexData.hotSjs&& indexData.hotSjs.company">
                        <s-hot-list v-for="(items,index) in indexData.hotSjs.company" :key="index" :items="items"></s-hot-list> 
                    </ul>
                </div>
            </div>
            <div class="case-list">
                <s-title v-if="indexData.caseList&&indexData.caseList.title" :titles="indexData.caseList.title"></s-title>
                <ul v-if="indexData.caseList&&indexData.caseList.case">
                <s-case v-for="(items,index) in indexData.caseList.case" :key="index" :items="items"></s-case>
                </ul>
                <s-more v-if="indexData.caseList&&indexData.caseList.more" :more ="indexData.caseList.more"></s-more>	
            </div>
            <div class="work-list" v-if="indexData.workList">
                <s-title v-if="indexData.workList&&indexData.workList.title" :titles ="indexData.workList.title"></s-title>
                <a href="##"  class="pic" v-for="(items,index) in indexData.workList.pic" :key="index" >
                    <img :src="items.src" alt="">
                </a>
                <div class="tag">
                    <p>热门搜索</p>
                    <i></i>
                    <span>
                        <s-index-a v-for="(items,index) in indexData.workList.tag" :key="index" :items="items"> </s-index-a>
                    </span>
                </div>
                <s-more v-if="indexData.workList&&indexData.workList.more" :more="indexData.workList.more"></s-more>
            </div>
            <div class="sjszf-list" v-if="indexData.sjszfs">
                <s-title v-if="indexData.sjszfs&&indexData.sjszfs.title" :titles="indexData.sjszfs.title"></s-title>
                <s-she-ji-shi  v-for="(items,index) in indexData.sjszfs.sjszf" :key="index" :items ="items"></s-she-ji-shi>
                <s-more v-if="indexData.sjszfs&&indexData.sjszfs.more" :more="indexData.sjszfs.more"></s-more>
            </div>
            <div class="other-module">
                <s-title v-if="indexData.other&&indexData.other.title" :titles ="indexData.other.title"></s-title>
                <div class="sjs-list"> 
                    <router-link to="">提交需求</router-link>
                    <router-link to="/news">设计资讯</router-link>
                    <router-link to="/module">模型下载</router-link>
                    <router-link to="/mall">逛商城</router-link>
                </div>
            </div>
 
		<s-common-footer></s-common-footer>   
	</div>
</template>

<script>
import Swiper from "swiper"

import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import STitle from "../components/children/STitle"
import SCase from "../components/children/SCase"
import SMore from "../components/children/SMore"
import SHotList from "../components/children/SHotList"
import SSheJiShi from "../components/children/SSheJiShi"
import SIndexA from "../components/children/SIndexA"
import DataApi from "../api/DataApi"

export default {
    components:{
        SCommonHeader,
        SCommonFooter,
        STitle,
		SCase,
        SMore,
        SHotList,
        SSheJiShi,
        SIndexA
       
    },
     data () {
        return {  
             indexData:{}
        }
    },
    methods:{
        //初始化数据
           _initData(){
            DataApi.getData(data=>{
                 console.log(data.indexData)
                this.indexData = data.indexData
              
            })
        },
        //初始化Swiper插件
        _initSwiper(){
           	var mySwiper = new Swiper('.swiper-container', {
                    loop : true,
                    autoplay:{
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
       
    },
   
    updated(){
        this._initSwiper()
    },
    created(){
        this._initData() 
    }
}
</script>

<style>
@import "../../node_modules/swiper/dist/css/swiper.css";

@import "../assets/css/index.css";
</style>

