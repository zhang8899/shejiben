<template>
    	<li>
            <a  @click.stop="" class="case-pic">
                <img :src="items.pic" alt="" width="100%">
            </a>
            <a @click.stop="" class="head">
                <img :src="items.head" alt="" width="60px" height="60px">
            </a>
            <a  @click.stop="" class="name">{{items.name}}</a>
            <a  @click.stop="" class="title">{{items.rank}}</a>
        </li>
</template>
<script>
export default {
    props:["items"]
}
</script>
<style scoped>
/*案例推荐*/
.case-list{
	margin-top: 10px;
    background: #fff;
}
.case-list h1{
	font-size: 16px;
    color: #000;
    padding: 13px 0 15px 10px;
    font-weight: 400;
}
.case-list li{
	position: relative;
    width: 100%;
}
.case-list li a{
	display: block;
}
.case-list .case-pic{
	position: relative;
    padding: 28.34% 0;

    }
.case-list .case-pic img {
    position: absolute;
    top: 0;
    left: 0;
}
.case-list .head{
	position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    display: block;
}
.case-list .head img{
	width: 60px;
    height: 60px;
    display: block;
    border: 2px #fff solid;
    border-radius: 30px;
}
.case-list .name{
	margin: 30px 0 8px;
    height: 20px;
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #999;
    text-align: center;
}
.case-list ul li .title {
    margin: 0 0 20px;
    height: 20px;
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    text-align: center;
}

/*家装案例*/
.case-jiaz{
    margin-top: 10px;
    background: #fff;
}
.case-jiaz h1{
    font-size: 16px;
    color: #000;
    padding: 13px 0 15px 10px;
    font-weight: 400;
}
.case-jiaz ul li {
    position: relative;
    width: 100%;
    padding-bottom: 20px;
}
.case-jiaz ul li a {
    width: 100%;
    display: block;
    }
.case-jiaz ul li .case-pic{
    position: relative;
    padding: 28.34% 0;
    overflow: hidden;
}
.case-jiaz ul li .case-pic img{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.case-jiaz ul li .head{
    position: absolute;
    bottom: 73px;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    display: block;
}
.case-jiaz ul li .head img{

    width: 60px;
    height: 60px;
    display: block;
    border: 2px #fff solid;
    border-radius: 30px;
}
.case-jiaz ul li .name {
    margin: 32px 0 10px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    color: #999;
    text-align: center;
}

.case-jiaz ul li .title {
    margin: 0;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    text-align: center;
}

</style>

