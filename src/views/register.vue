<template>
  <div class="register">
    <div class="register_item">
      <Titles :message="'注册'"></Titles>
      <a-form-model>
        <!-- 用户名 -->
        <a-form-model-item>
          <a-input placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <!-- 密码 -->
        <a-form-model-item>
          <a-input placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <!-- 登录按钮 -->
        <a-button type="primary" html-type="submit" style="width:60%;align-self:center;">注册</a-button>
        <a-form-model-item>
          <a-button html-type="submit" style="float:right;margin-top:30px;">去登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import Titles from "../components/titles"
export default {
  name: "register",
  components:{
    Titles
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.register {
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  .register_item {
    width: 30%;
    h1 {
      color: #fff;
      font-size: 20px;
      text-align: center;
      margin-bottom:30px;
    }
    .ant-form {
      display: flex;
      flex-direction: column;
      .ant-row {
        text-align: center; //水平居中
        ::v-deep.ant-input {
          height: 40px;
        }
      }
    }
  }
}
</styleo>
