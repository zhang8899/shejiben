<template>
    
    <a  @click.stop="">
        <div class="info">
            <h1 class="title">{{items.title}}</h1>
            <div class="content">
                <div class="cont">
                    <p>{{items.concent}}</p>
                </div>
                <div class="date">
                    {{items.date}}
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props:['items']
}
</script>

<style scoped>
.info-list .info{
padding: 11px 3% 10px 3%;
border-bottom:1px solid #e3e3e3;
}
.info-list .info .title{
    font-size: 14px;
    color:#000;
    line-height:20px;
    font-weight: 100;
}
.info-list .info .content{
    margin-top :10px;
    position: relative;
    overflow: hidden;
}
.info-list .info .content .cont{
    float: right;
    width: 100%;
    line-height: 20px;
    font-size: 14px;
    color:#666;
    height: auto;
}
.info-list .info .content .date{
    color:#999;
    font-size:14px;
    text-align: right;
    line-height: 22px;
}
</style>
