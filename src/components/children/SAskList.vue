<template>
     <li class="list-li" >
        <p>{{items.title}}</p> 
        <a  @click.stop="" class="list-icon"></a>
        <div class="lists">
            <s-ask-a class="list-a" v-for="(item,index) in items.list" :key="'a5'+index" :item ="item"></s-ask-a>
        </div>
    </li>
</template>

<script>
import SAskA from "./SAskA"
export default {

    props:['items'],
    components: {
        SAskA
    }
}
</script>

<style scoped>
.label-con{
    margin-top: 8px;
    background: #fff;
    border-top: solid 1px #e3e3e3;
    border-bottom: solid 1px #e3e3e3
}
.label-con h1{
    height: 45px;
    padding: 0 10px;
    font-size: 16px;
    color: #000;
    line-height: 45px;
    font-weight: 400;
    border-bottom: solid 1px #e3e3e3;
}
.list-li{
    padding: 12px 0 0 0;
    border-bottom: solid 1px #e3e3e3;
}
.list-li p{
    font-size: 14px;
    color: #666;
    float: left;
    padding-left: 10px;
}
.list-li .list-icon{
    float: right;
    margin: 5px 16px 0 0;
    width: 7px;
    height: 7px;
    border-right: solid 1px #999;
    border-bottom: solid 1px #999;
    transform: rotate(45deg);
}
 .lists{
    padding:  0 0 15px 10px;
    clear: left;
    overflow: hidden;
}
.lists .list-a {
    font-size: 12px;
    color: #666;
    float: left;
    padding: 10px;
    background: #eee;
    margin: 10px 10px 0 0;
} 
</style>
