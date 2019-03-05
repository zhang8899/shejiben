<template>
    <a @click.stop="" >
        <img :src="items.src" alt="">
    </a>
</template>

<script>
export default {
    props:['items']
}
</script>

<style scoped>
.sjs-list .case-pic {
    padding-left: 10px;
    width: 100%;
}
.sjs-list .case-pic a {
    width: 31%;
    margin: 0 5px 0 0;
    padding: 0;
    float: left;
}
.sjs-list .case-pic img{
    width: 100%;
}
</style>
