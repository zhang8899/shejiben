<template>
    <div class="topHot">
        <a  @click.stop="">
            <img src="@/assets/img/431_10236.gif" alt="">
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
/* 顶部广告 */
.topHot {
    width: 100%;
    height: 50px; 
}
.topHot a {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
}
.topHot img {
    width: 100%;
    height: 50px;
}
</style>
