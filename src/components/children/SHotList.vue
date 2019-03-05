<template>
    <li >
        <a  @click.stop="">
            <img :src="items.src" alt="">
        </a>
        <p class="ect">{{items.name}}</p>
    </li>
</template>
<script>
export default {
    props:["items"]
}
</script>
<style scoped>
/*热门推荐*/
.hot-sjs{
	margin-top: 10px;
    padding-bottom: 10px;
    background: #fff;
}

.hot-sjs h1{
	font-size: 16px;
    color: #000;
    padding: 13px 0 15px 10px;
    font-weight: 400;
}
.hot-sjs .sjs-list{
	width: 96%;
    margin: 0 auto 10px;
    overflow-x: auto;
    overflow-y: hidden;
}
.hot-sjs .sjs-list ul{
	min-width: 2430px;
	overflow: hidden;
}
.hot-sjs .sjs-list ul li{
	float: left;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    position: relative;
}
.hot-sjs .sjs-list ul li img{
	width: 80px;
}
.hot-sjs .sjs-list ul li p{
	height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: #fff;
    text-align: center;
	position: absolute;
    bottom: 0;
    width: 100%;
}
.company-list{
	width: 96%;
    margin: 0 auto 10px;
    overflow-x: auto;
    overflow-y: hidden;
}
.company-list ul{
	min-width: 900px;
	overflow: hidden;
}
.company-list ul li{
	float: left;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    position: relative;
}
.company-list ul li img{
	width: 80px;
}
/*案例解析*/
.case-jiexi{
    margin-top: 10px;
    background: #fff;

}
.case-jiexi h1{
    font-size: 16px;
    color: #000;
    padding: 13px 0 15px 10px;
    font-weight: 400;
}
.case-jiexi li{
    position: relative;
    width: 100%;
}
.case-jiexi li a {
    width: auto;
    display: block;
    margin: 0 10px 10px;
}
.case-jiexi li a img{
    width: 100%;
}
</style>
