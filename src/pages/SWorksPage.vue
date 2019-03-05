<template>
      <div class="wrap">
       
    	<s-common-header></s-common-header>
        <div class="work-type" @click="show">
            <p >家装</p>
            <span class="type" v-show="istrue">
                <a @click.stop="" class="home on">家装</a>
                <a @click.stop="" class="gongz">工装</a>
            </span>
        </div>
        <s-common-search></s-common-search>
        <div class="filter">
            <ul class="tab">
                <li class="space">
                    全部空间
                    <i class="icon-arrow"></i>
                </li>
                <li class="type">
                    混搭风格
                    <i class="icon-arrow"></i>
                </li> 
            </ul>
        </div>
        <div class="work-list" v-if="works.pic">
            <s-pic v-for="(pic,index) in works.pic" :key="'s1'+index" :pic ="pic"></s-pic>
            <s-pic :pic="works.picc" class="banner"></s-pic>
            <s-pic v-for="(pics,index) in works.pics" :key="'s2'+index" :pic ="pics"></s-pic> 
        </div>
        <s-common-page :page="works.page"></s-common-page>
        <div class="hot-tag" v-if="works">
            <s-title :titles="works.title"></s-title>
            <div class="tag-list">
                <s-work-a :key="'s3'+index" v-for="(items,index) in works.hotTag " :items ="items"></s-work-a>
            </div>
        </div>
	   <s-common-footer></s-common-footer>
        
    </div>
</template>
<script>
import SCommonTopHot from "../components/common/SCommonTopHot"
import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPage  from "../components/common/SCommonPage"
import SCommonSearch from "../components/common/SCommonSearch"
import SPic from "../components/children/SPic"
import STitle from "../components/children/STitle"
import SWorkA from "../components/children/SWorkA"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonTopHot,
        SCommonFooter,
        SCommonHeader,
        SCommonPage,
        SCommonSearch,
        SPic,
        STitle,
        SWorkA
    },
    data () {
        return {
            works:{},
            istrue:false
          
        }
    },
    created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                console.log(data.works)
                this.works = data.works
            })
        },
         show(){
               if(!this.istrue){
                this.istrue = true;
            }else{
                this.istrue = false;
            }  
        }
    }
    
}
</script>
<style scoped>
@import "../assets/css/works.css";

</style>
