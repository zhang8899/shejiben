<template>
     <li class="" > 
        <a  @click.stop="">
            <h2 class="title">{{items.title}}</h2>
            <span class="ask-number">
                <em class="time">
                    <i></i>
                   {{items.time}}
                </em>
                <em class="answer-total">{{items.answer}}</em>
            </span>
            <img :src="items.src" alt="">
        </a>
    </li>
</template>

<script>
export default {
props:["items"]
}
</script>

<style scoped>
/* 主要内容 */
 .ask-list{
     margin-top: 10px;
     background:#fff;
     overflow: hidden;
 }
 .ask-list .tab{
     width: 100%;
     height: 40px;
     border-bottom: 1px solid #e3e3e3;
 }
 .ask-list .tab a {
    float: left;
    height: 40px;
    width: 50%;
    color: #5c6368;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
}
.ask-list .tab .on{
    border-bottom:2px solid #d03939;
    color:#d03939;
}
.ask-list .list li{
    float: left;
    width: 100%;
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
}
.ask-list .list .title{
    margin-bottom: 20px;
    max-height: 43px;
    font-size: 16px;
    word-wrap: break-word;
    color: #333;
    line-height: 22px;
    overflow: hidden;
    font-weight: 400;
}
.ask-list .list .ask-number{
    width: 100%;
}
.ask-list .time{
    float: left;
    background-size: 90px;
    height: 16px;
    line-height: 16px;
    font-style: normal;
    font-size: 12px;
    color: #999;
}
.ask-list .time i{
    width: 12px;
    height: 12px;
    margin: 0 4px -1px 0;
    display: inline-block;
    background: url(/static/img/icon-time.jpg) no-repeat;
    background-size: 12px 12px;
}
.ask-list .answer-total{
    float: right;
    font-style: normal;
    font-size: 12px;
    color: #999;
}
.ask-hasimg .title {
    position: absolute;
    margin-right: 95px;
}
 .ask-hasimg .ask-number {
    position: absolute;
    bottom: 10px;
}
.ask-hasimg .answer-total {
    margin-right: 110px;
}
.ask-hasimg img {
    width: 80px;
    height: 80px;
    float: right;
    border-radius: 5px;
    overflow: hidden;
}
</style>
