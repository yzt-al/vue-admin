<template>
  <div class="titles">
    <h1>{{message}}</h1>
  </div>
</template>
<script>
export default {
  name: 'titles',
  props:{
    message:{
      type:String,
      default:""
    }
  }
}
</script>
<style scoped lang="scss">
  h1{
    color:#fff;
    text-align: center;
    font-size:20px;
    margin-bottom:20px;
    letter-spacing: 10px;
  }
</style>
