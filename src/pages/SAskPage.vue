<template>
    <div class="wrap" >
        <s-common-header></s-common-header>
        <div class="banner-index">
            <figure>
                <img src="https://img.shejiben.com/wap/new_wap/searchbanner.jpg?20170301" alt="">
            </figure>
            <a  @click.stop="" class="btn-ask">我要提问</a>
        </div>
        <s-common-search></s-common-search>
        <div class="ask-list">
            <div class="tab">
                <a  @click.stop="" class="on">最新问题</a>
                <a @click.stop="">精选问题</a>
            </div>
            <ul class="list">
                <s-ask v-for="(items,index) in askData.ask" :key="'a1'+index" :items="items"></s-ask>
                <s-ask class ="ask-hasimg" v-for="(items,index) in askData.askImg" :key="'a2'+index" :items="items"></s-ask>
                <s-ask v-for="(items,index) in askData.ask1" :key="'a3'+index" :items="items"></s-ask>
            </ul>
            <s-more :more ="askData.more"></s-more>
        </div>
        <div class="label-con">
            <s-title :titles="askData.title"></s-title>
            <ul class="label-list" v-if="askData.lists&&askData.lists.listLi">
                <s-ask-list v-for="(items,index) in askData.lists.listLi" :key="'a4'+index" :items="items"></s-ask-list>
            </ul>
            <s-more v-if="askData.lists&&askData.lists.more" :more ="askData.lists.more"></s-more>
        </div> 
        <s-ask-list-a v-for ="(items,index) in askData.hotAsk" :key="'a6'+index" :items="items"></s-ask-list-a>
        <s-common-footer></s-common-footer>
    </div>
</template>

<script>
import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonSearch from "../components/common/SCommonSearch"
import SAsk from "../components/children/SAsk"
import SMore from "../components/children/SMore"
import STitle from "../components/children/STitle"
import SAskList from "../components/children/SAskList"
import SAskListA from "../components/children/SAskListA"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonHeader,
        SCommonFooter,
        SCommonSearch,
        SAsk,
        SMore,
        STitle,
        SAskList,
        SAskListA
    },
    data () {
        return {
            askData:{}
         }   
    },
  created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                 console.log(data.askData)
                this.askData = data.askData
            })
        }
    }
}
</script>
<style scoped>
    @import "../assets/css/ask.css";
</style>
