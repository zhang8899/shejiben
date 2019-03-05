<template>
     <li>
        <a  @click.stop="">
            <img :src="good.pic" alt="">
        </a>
        <h1>{{good.tith1}}</h1>
        <h2>{{good.tith2}}</h2>
    </li>
</template>

<script>
export default {
    props:['good']
}
</script>

<style scoped>
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
