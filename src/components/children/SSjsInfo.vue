<template>
      <div class="info-box">
            <a @click.stop="" class="sjs-info">
                <img :src="items.info.src" alt="" class="head">
                <span class="name">
                    <p class="ect">{{items.info.name}}</p>
                    <em class="icon-zm"></em>
                    <em class="icon-rz-qy"></em>
                </span>
                <p class="city">{{items.info.city}}</p>
                <span class="price ect">
                    <p class="numb">{{items.info.price}}</p>
                    <p>元/m²</p>
                </span>
            </a>
            <div class="case-pic clear">
                <s-case-a v-for="(items,index) in  items.case" :key="index" :items="items"></s-case-a>
            </div>
        </div>    
</template>

<script>
import SCaseA from "./SCaseA"
export default {
    props:['items'],
    components: {
        SCaseA
    }
}
</script>

<style scoped>
.sjs-list{
    background: #fff;
    margin-bottom: 10px;
}
.sjs-list .info-box {
    position: relative;
    padding: 15px 0;
    border-bottom: 1px #f1f1f1 solid;
    overflow: hidden;
}
.sjs-list .head {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px #f1f1f1 solid;
    float: left;
    margin-bottom: 15px;
}
.sjs-list .name {
    float: left;
    margin-left: 10px;
    height: 20px;
}
.sjs-list .name p {
    max-width: 95px;
    font-size: 16px;
    float: left;
    line-height: 20px;
}
.sjs-list .name em {
    width: 32px;
    height: 16px;
    display: inline-block;
    background: url(/staic/img/icon_sjs_title.png) no-repeat;
    background-size: 100%,auto;

    margin: 2px 0 0 2px;
}
.sjs-list .name .icon-zm{
    background-position: 0 0;
}
.sjs-list .name .icon-rz-qy{
   
    background-position: 0 -80px;
}
.sjs-list .city {
    position: absolute;
    top: 40px;
    left: 60px;
    color: #999;
}
.sjs-list .price {
    position: absolute;
    top: 15px;
    right: 10px;
    line-height: 20px;
    text-align: center;
}
.sjs-list .price .numb {
    max-width: 90px;
    color: #dd4f50;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.sjs-list .case-pic {
    padding-left: 10px;
    width: 100%;
}
.sjs-list .case-pic a {
    width: 31%;
    margin: 0 5px 0 0;
    padding: 0;
    float: left;
}
.sjs-list .case-pic img{
    width: 100%;
}
</style>
