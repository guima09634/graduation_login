<template>
  <div class="admin-page">
    <div class="loginBar">
      <el-form :model="loginForm">
        <el-form-item label="账号">
          <el-input v-model="loginForm.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" icon="" round plain>登陆</el-button>
        <el-button icon="" round plain>取消</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account:'',
        password:''
      }
    }
  }
}
</script>


<style lang="less" scoped>
  .admin-page {
    background: url("~static/background_img.jpeg");
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .loginBar {
    text-align: center;
    width: 400px;
    border: solid 1px;
    background-color: #ffeeee;
    opacity: 0.4;
  }
</style>

