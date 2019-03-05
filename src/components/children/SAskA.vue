<template>
      <a  @click.stop="" class="list-a">{{item}}</a>
</template>

<script>
export default {
    props:['item']

}
</script>

<style scoped>
.lists .list-a {
    font-size: 12px;
    color: #666;
    float: left;
    padding: 10px;
    background: #eee;
    margin: 10px 10px 0 0;
} 
</style>
