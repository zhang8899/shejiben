<template>
<div>
     <header>
        <div class="header">
             <router-link  to="/" class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </router-link>
            <i class="after-arrow-white">3D模型</i>
            <a  @click.stop="" class="cust_online">
                <img src="@/assets/img/head_customer_online.png" alt="">
            </a>
            <i class="cut_line"></i>
            <a  class="dsn-icon" @click.stop="showMeu()"></a>
        </div>
    </header>
    <div class="menus" v-show ="istrue">
        <div class="meTit"> 
            <router-link to="/login" class="login">请登录</router-link>
            <a  class="back" @click.stop="showMeu()"></a>
        </div>
        <ul>
           <router-link tag="li" to="/">
                <p class="bg"></p>
                <span>首页</span>
           </router-link>
            <router-link tag="li" to="/works"> 
                 <p class="bg"></p>
                <span>装修图库</span>
            </router-link>
             <router-link tag="li" to="/projects">
                 <p class="bg"></p>
                <span>设计案例</span>
           </router-link>
            <router-link tag="li" to="/designer">
                 <p class="bg"></p>
                <span>找设计师</span>
           </router-link>
            <router-link tag="li" to="/ask">
                 <p class="bg"></p>
                <span>有问必答</span>
            </router-link>
            <router-link tag="li" to="/news">
                <p class="bg"></p>
                <span>设计资讯</span>
            </router-link>  
            <router-link tag="li" to="/interview">
                <p class="bg"></p>
                <span>设计师专访</span>
            </router-link> 
             <router-link tag="li" to="">
                <p class="bg"></p>
                <span>提交需求</span>
            </router-link> 
              <router-link tag="li" to="/module">
               <p class="bg"></p>
                <span>模型下载</span>
            </router-link> 
              <router-link tag="li" to="/mall">
                <p class="bg"></p>
                <span>逛商城</span>
            </router-link> 
        </ul>
    </div>
</div>
   
</template>

<script>
import SCommonTopHot from "../common/SCommonTopHot"
export default {
    components: {
        SCommonTopHot
    },
    props:["istrue"],
    methods: {
    showMeu(){
        console.log(0)
        this.$emit('show')
    }
}
}

</script>

<style scoped>
header{
   overflow: hidden;
}
.header{
    position: relative;
    width: 100%;
    height: 44px;
    background-color: #d03939;
}
.after-arrow-white {
    font-style: normal;
    font-size: 14px;
    position: absolute;
    left: 90px;
    bottom: 12px;
    font-weight: normal;
    color: #fff;
}
.after-arrow-white:after {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #fff;
    content: "";
    position: absolute;
    bottom: 5px;
    right: -20px;
}
.cust_online{
    position: absolute;
    top: 6px;
    right: 60px;
    width: 44px;
    height: auto;
    display: block;
}
 .cut_line {
    position: absolute;
    top: 8px;
    right: 45px;
    left: auto;
    width: 1px;
    height: 28px;
    display: block;
    
}
.dsn-icon{
    position: absolute;
    top: 8px;
    width: 30px;
    height: 30px;
    right: 0px;
    display: block;
    z-index: 10;
    background: url(https://img.shejiben.com/wap/new_wap/dsn-icon.png?20170410) no-repeat;
    background-size: 60px;
    background-position: 0 -587px;
}
.menus{
    background: #fff;
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 120;
    /* display: none; */
}
.meTit{
    display: flex;
    justify-content: space-between;
}
.login{
    max-width: 200px;
    height: 30px;
    line-height: 30px;
    margin:5px 0 0 15px;
    font-size:16px;
    background: url(https://img.shejiben.com/wap/new_wap/login_icon.png) no-repeat;
    background-position: -64px -297px;
    background-size: 100px;
    color: #dd4f50;
    padding-left: 34px;
}
.back{
    background: url(https://img.shejiben.com/wap/new_wap/dsn-icon.png?20170410) no-repeat;
    background-position: 29px -1260px;
    background-size: 70px;
    height: 35px;
    width: 65px;
    margin-top: 5px;
}
.menus ul{
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
}
.menus ul li{
    width: 25%;
    height: 63px;
    text-align: center;
    margin-top:15px;

}
.menus ul li p{
   
    height: 40px;
    background:url(https://img.shejiben.com/wap/new_wap/dsn-icon.png?20170410) no-repeat;
    background-size:40px;
}
.menus ul li span{
    display: block;
    font-size: 12px;
    height: 20px;
    margin-top: 3px
}
.menus ul li:nth-of-type(1) p{
    background-position: center 0;
}
.menus ul li:nth-of-type(2) p{
    background-position: center -93px;
}
.menus ul li:nth-of-type(3) p{
    background-position: center -183px;
}
.menus ul li:nth-of-type(4) p{
    background-position: center -273px;
}
.menus ul li:nth-of-type(5) p{
    background-position: center -47px;
}
.menus ul li:nth-of-type(6) p{
    background-position: center -139px;
}

.menus ul li:nth-of-type(7) p{
    background-position: center -227px;
}
.menus ul li:nth-of-type(8) p{
    background-position: center -326px;
}
.menus ul li:nth-of-type(9) p{
    background-position: center -864px;
}
.menus ul li:nth-of-type(10) p{
    background-position: center -911px;
}
</style>
