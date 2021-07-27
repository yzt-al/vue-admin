<template>
  <div class="container">
    <el-upload
      ref="upload"
      class="upload-demo"
      action="#"
      :on-change="handleChange"
      :file-list="fileList"
      list-type="text"
      :auto-upload="false"
      :limit="1"
    >
      <el-button size="small" type="primary" @click="change1">上传文件</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [], //定义初始集合
      file:""
    };
  },
  props: {},
  components: {},
  watch: {},
  computed: {},
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      this.file = file.raw;
    },
    change1() {
    //   const devId = "G0508542101130A00002";
    //   const targetDevType = "1";
    //   const devNo = "1";
    //   const userId = "12345678";

      const formData = new FormData();
      formData.append("file", this.file); //第一个参数是后端的参数，第二个是参数的值
    //   formData.append("devId", devId);
    //   formData.append("devNo", devNo);
    //   formData.append("targetDevType",targetDevType);
    //   formData.append("userId",userId);

      console.log(formData);
      this.$axios({
        url: "http://192.168.2.129:8970/transmission/beginTrans",
        method: "post",
        data:formData   //若需要追加多个参数时直接追加给formData,不需要单独传
      }).then((res) => {
        console.log(res);
      });
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped >
</style>
