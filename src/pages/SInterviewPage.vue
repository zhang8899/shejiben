
<template>
    <div class="wrap">
       <s-commom-header></s-commom-header>
        <div class="sjszf-list">
            <s-she-ji-shi v-for="(items,index) in sjszfs.sjszf" :key="index" :items ="items"></s-she-ji-shi>
        </div>
        <s-common-page :page="sjszfs.page"></s-common-page>
       
        <s-common-footer></s-common-footer>
    </div>
</template>

<script>
import SCommonTopHot from "../components/common/SCommonTopHot"
import SCommomHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPage from "../components/common/SCommonPage"
import SSheJiShi from "../components/children/SSheJiShi"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonTopHot,
        SCommomHeader,
        SCommonFooter,
        SCommonPage,
        SSheJiShi
    },
    data () {
        return {
            sjszfs:{}
            }
    },
    created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                 console.log(data.sjszfs)
                this.sjszfs = data.sjszfs
            })
        }
    }
}
</script>

<style scoped>
@import "../assets/css/interview.css";
</style>
