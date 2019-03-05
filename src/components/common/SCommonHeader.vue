<template>
    <header>
        <router-link  to="/" class="logo">
            <img src="@/assets/img/logo.png" alt="">
        </router-link>
        <a @click.stop="" class="cust_online">
            <img src="@/assets/img/head_customer_online.png" alt="">
        </a>
        <i class="cut_line"></i>
        <a  @click.stop="" class="download">
            <img src="@/assets/img/head_download.png" alt="">
        </a>
    </header>
</template>
<script>
export default {
    
}
</script>

<style scoped>
header{
    height: 44px;
}
</style>
