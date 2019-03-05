<template>
   <div class="wrap">
       <s-mall-header :istrue="istrue" @show="showMu()"></s-mall-header>
        <ul class="topMenus">
            <li>
                <a >分类</a>
            </li>
            <li>
                <a >价格</a>
            </li>
            <li>
                <a >风格</a>
            </li>
        </ul>
        <ul class="shoppinggoods" v-if="mallData">
            <s-good v-for="(good,index) in mallData.goods" :key="index" :good = "good"></s-good>
        </ul>
        <s-common-page :page="mallData.page"></s-common-page>  
        <s-common-footer></s-common-footer>
        <s-go-top></s-go-top>
    </div> 
</template>

<script>
import SMallHeader from "../components/common/SMallHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPage from "../components/common/SCommonPage"
import SGoTop from "../components/common/SGoTop"
import SGood from "../components/children/SGood"
import DataApi from "../api/DataApi"
export default {
    components: {
        SMallHeader,
        SCommonFooter,
        SCommonPage,
        SGoTop,
        SGood
    },
     data () {
        return {
            mallData:{},
            istrue:false
        }
    },
       created(){
        this._initData() 
    },
    methods: {
          //初始化数据
           _initData(){
            DataApi.getData(data=>{
                 console.log(data.mallData)
                this.mallData = data.mallData
            })
        },
           //导航栏显示或隐藏
        showMu(){
            console.log(1)
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
/* topMenus */
.topMenus{
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    background:#fff;
    overflow: hidden;
}
.topMenus li{
    width: 33%;
    height: 44px;
    float:left;
    border-left: 1px solid #dfdfdf;
    text-align: center;
    color: #5c6386;
    line-height: 44px;
    position: relative;

}
.topMenus li a{
    display: block;
}
.topMenus li a::after{
    height: 8px;
    width: 8px;
    display: block;
    content: ' ';
    border-bottom: 1px solid #5c6368;
    border-right: 1px solid #5c6368;
    transform: rotate(45deg);
     position: absolute;
     top :16px;
     right:30px;
}
/* shoppinggoods */
.shoppinggoods{
    margin-bottom: 10px;
    overflow: hidden;
}
</style>
