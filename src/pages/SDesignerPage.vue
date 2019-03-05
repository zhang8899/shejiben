<template>
      <div class="wrap">
    	<s-common-header></s-common-header>
       <s-common-search></s-common-search>
        <div class="filter">
            <ul class="tab">
                <li class="ect">
                    所在城市
                    <i class="icon-arrow"></i>
                </li>
                <li>
                    擅长空间
                    <i class="icon-arrow"></i>
                </li> 
                <li class="no-border">
                    排序方式
                    <i class="icon-arrow"></i>
                </li> 
            </ul>
        </div>
        <div class="sjs-list">
            <s-sjs-info  v-for="(items,i) in sjisFind.sjis" :key="i" :items="items"></s-sjs-info>
        </div>
        <s-common-page :page ="sjisFind.page"></s-common-page> 
        <s-common-footer></s-common-footer>
    </div>
</template>
<script>
import SCommonTopHot from "../components/common/SCommonTopHot"
import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPage  from "../components/common/SCommonPage"
import SCommonSearch from "../components/common/SCommonSearch"
import SSjsInfo from "../components/children/SSjsInfo"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonTopHot,
        SCommonFooter,
        SCommonHeader,
        SCommonPage,
        SCommonSearch,
        SSjsInfo
    },
    data () {
        return {
           sjisFind: {}
     
        }
    },
    	created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                 console.log(data.sjisFind)
                this.sjisFind = data.sjisFind
            })
        }
    }
}
</script>
<style scoped>
@import "../assets/css/designer.css"
</style>
