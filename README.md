后台管理系统
1,项目文件介绍：
api:封装请求API
components:组件封装
router:路由
utils:公共封装库
views:页面组件
store:数据状态管理
common.js:公共引入文件
.env.development:开发环境
.env.production:生产环境
vue.config.js:配置环境
2,初步完成注册登录样式,并封装公共部分，通过props属性传值方式,如下:
components/title.vue文件
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

components/views.vue文件
<template>
  <div class="register">
    <div class="register_item">
      <Titles :message="'注册'"></Titles>
      <a-form-model>
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
}