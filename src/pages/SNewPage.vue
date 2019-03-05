<template>
    <div class="wrap">
        <s-common-header></s-common-header>
        <i class="headerTop">设计资讯</i>
        <div class="concents">
            <div class="infoWrap">
                <div class="info-list">
                    <s-info v-for="(items,index) in newsData.news" :key="index" :items ="items"></s-info>
                </div>
            </div>
        </div>
        <s-common-pgae :page ="newsData.page"></s-common-pgae>
        <s-common-footer></s-common-footer>
    </div>
</template>

<script>
import SCommonTopHot  from "../components/common/SCommonTopHot"
import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPgae from "../components/common/SCommonPage"
import SInfo from "../components/children/SInfo"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonTopHot,
        SCommonHeader,
        SCommonFooter,
        SCommonPgae,
        SInfo

    },
    data () {
        return {
         newsData:{}
        }
    },
     created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                 console.log(data.newsData)
                this.newsData = data.newsData
            })
        }
    }
}
</script>

<style scoped>
@import "../assets/css/news.css"
</style>
