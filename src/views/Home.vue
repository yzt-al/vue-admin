<template>
  <div>
       <el-button type="primary" @click="upload">上传文件</el-button>
  </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        upload(){
            this.$router.push('/upload')
        }
    }
}
</script>

<style>

</style>