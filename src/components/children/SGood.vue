<template>
       <li>
            <a  @click.stop="">
                <img :src="good.pic" alt="">
            </a>
            <div>{{good.title}}</div>
            <p>{{good.price}}</p>
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
.shoppinggoods li div{
    font-size: 12px;
    color: #333;
    margin: 8px 6px 0 6px;
    overflow: hidden;
    height: 32px;
    line-height: 16px;
}
.shoppinggoods li p{
    padding: 8px 0 10px 4px;
    color: #d03939;
}
</style>
