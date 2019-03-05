<template>
    <div class="wrap">
        <s-module-header :istrue="istrue" @show="showMu()"></s-module-header>
        <section>
            <ul class="rec-3d">
                <li>
                    <a href="" class="active">推荐</a>
                    <i ></i>
                </li>
                <li>
                    <a href="">分类</a>
                    <i></i>
                </li>
            </ul>
        </section>
        <div class="mx-list">
            <div>
                <div class="split"></div>
                <ul class="shoppinggoods" v-if="moduleData">
                    <s-module v-for="(good,index) in moduleData.goods" :key="index" :good="good"></s-module>
                </ul>
                <s-common-page :page="moduleData.page"></s-common-page>  
            </div>
        </div>
        <s-common-footer></s-common-footer>
           <s-go-top></s-go-top>
    </div>
</template>

<script>
import SModuleHeader from "../components/common/SModuleHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import SCommonPage from "../components/common/SCommonPage"
import SGoTop from "../components/common/SGoTop"
import SModule from "../components/children/SModule"
import DataApi from "../api/DataApi"
export default {
    data () {
        return {
            moduleData:{},
            istrue:false
           
        }
    },
    components: {
        SModuleHeader,
        SCommonFooter,
        SCommonPage,
        SGoTop,
        SModule
    },
      created(){
        this._initData() 
    },
    methods: {
         //初始化数据
           _initData(){
            DataApi.getData(data=>{
                 console.log(data.moduleData)
                this.moduleData = data.moduleData
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
    .rec-3d{
        height: 44px;
        line-height: 44px;
        border-bottom: solid 1px #dfdfdf;
        background: #fff;
    }
    .rec-3d li{
        width: 50%;
        text-align: center;
        float: left;
        position: relative;
    }
   .rec-3d li a {
    border-left: solid 1px #E3E3E3;
    display: block;
    position: relative;
}
.rec-3d li .active{
    color:#d03939;
}
.rec-3d li i{
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
    border-top: 0;
    position: absolute;
    bottom: -1px;
    left: 45%;
    display: none;
}
.mx-list .split {
    border-top: solid 1px #e3e3e3;
    border-bottom: solid 1px #e3e3e3;
    height: 10px;
    background: #eee;
}
.mx-list section{
    background: #fff;
    padding: 0px 0px 1px 0;
}
.shoppinggoods{
    margin-bottom: 10px;
    overflow: hidden;
}
.shoppinggoods li {
    background: #fff;
    border-radius: 8px;
    border: solid 1px #E3E3E3;
    overflow: hidden;
    float: left;
    width: 45.3125%;
    margin-left: 3.125%;
    margin-top: 10px;
}
.shoppinggoods li img{
    width: 100%;
    height: 160px;
}
.shoppinggoods li h1{
    font-size:14px;
    padding: 8px 10px 2px 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: normal
}
.shoppinggoods li h2{
    font-size:12px;
    color:#999;
    padding-left: 10px;
    padding-bottom: 10px;
    font-weight: normal
}
</style>
