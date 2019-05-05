<template>
  <div class="admin-page">
    <div class="loginBar">
      <div class="input-bar">
        <div>
          <p>请输入你的账号密码</p>
        </div>
        <hr>
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules"  label-width="60px">
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.userId" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" icon="" @click="login" round plain>登陆</el-button>
          <el-button icon="" round plain>取消</el-button>
        </el-form>
        <nuxt-link to="registered" style="float:left">没有账号？注册一个</nuxt-link>
        <nuxt-link to="resetPassword" style="float:right">忘记密码？</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userId:'',
        password:''
      }, //用户输入的账号密码;
      dialogFormVisible:false,//注册对话框是否打开标识;
      loginRules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
      })
      this.$axios({
        method:'post',
        url:'http://localhost:9090/api/user/login',
        data: this.loginForm
      }).then((res) => {
        if(res.data.code = 'e1001') {
          this.$message({
            type:'error',
            message:res.data.message
          })
        } else {
          this.$message({
            type:'success',
            message:res.data.meessage
          })
        }
      },error => {
        console.log(error);
      }).catch(error => {
        console.log(error);
      })
    },
    clearJson(form) {
      for(var i in form) {
        console.log(i);
        form[i] = '';
      }
    }
  },
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
    width: 30%;
    height: 30%;
    border: solid 1px;
    background-color: #ffffff;
    float:right;
    margin-top: 10%;
    margin-right: 5%;
    border-radius: 15px;
  }

  .input-bar {
    padding: 20px;
    text-align: center;
  }
</style>

