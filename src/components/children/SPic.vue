<template>
    <a  @click.stop="" class="pic" >
        <img :src="pic.src" alt="" style="width:100%;">
    </a>
</template>

<script>
export default {
props:["pic"]
}
</script>

<style scoped>
.work-list{
    padding-bottom: 10px;
    background: #fff;
    overflow: hidden;
}
.work-list .pic{
    position: relative;
    width: 47%;
    margin: 10px 0 0 2%;
    float: left;
    padding: 23.5% 0;
    overflow: hidden;
}

.work-list .pic img{
    position: absolute;
    top:0;
    left: 0;
}
.work-list .banner{
    width: 96%;
    height: auto;
    margin: 10px 0 0 2%;
    box-sizing: border-box;
}

</style>
