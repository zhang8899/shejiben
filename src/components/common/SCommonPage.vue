<template>
    <div class="page">
        <ul>
            <li>
                <a  @click.stop="" class="active">上一页</a>
            </li>
            <li>
                <a  @click.stop="">{{page}}</a>
            </li>
            <li>
                <a  @click.stop="" class="links">下一页</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["page"]
}
</script>
<style scoped>
/* 分页 */
.page {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #333;
    font-size: 14px;
    border-top: 1px #f1f1f1 solid;
    background: #fff;
}
.page li {
    width: 33.3%;
    float: left;
    text-align: center;
    color: #333;
    font-size: 16px;
}
.page li:first-child{
    text-align: right;
}
.page li .active {
    color: #999;
}
.page li:last-child{
    text-align: left;
}
.page li .links {
    color: #dd4f50;
}
</style>
