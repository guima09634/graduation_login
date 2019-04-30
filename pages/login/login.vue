<template>
  <div class="admin-page">
    <div class="loginBar">
      <div class="input-bar">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.userId" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" icon="" @click="login" round plain>登陆</el-button>
          <el-button icon="" round plain>取消</el-button>
        </el-form>
        <a href="#" style="float:left; margin-bottom:10px;" @click="openDialog">没有账号？注册一个</a>
        <a href="#" style="float:right; margin-bottom:5px;">忘记密码？</a>
      </div>
    </div>
    <el-dialog title="注册账号" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="30%">
      <el-form v-model="registeredForm" ref="registeredForm" :rules="registeredRules">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="24">
                <el-form-item label="账号" prop="userId">
                  <el-input type="text" v-model="registeredForm.userId" placeholder="请输入账号" clearable ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="呢称" prop="netName">
              <el-input v-model="registeredForm.netName" placeholder="请输入呢称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="注册方式" prop="mode">
              <el-select v-model="registeredForm.mode" placeholder="请选择注册方式">
                <el-option v-for="item in registeredMode" :value="item.value" :label="item.label" :key="item.index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div v-if="registeredForm.mode == 'phone'">
              <el-form-item label="手机号" prop="phone">
                <el-input placeholder="请输入手机号" v-model="registeredForm.phone"></el-input>
              </el-form-item>
            </div>
            <div v-else>
              <el-form-item label="邮箱" prop="email">
                <el-input placeholder="请输入邮箱号" v-model="registeredForm.email"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="密码" prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="registeredForm.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="请确认密码" prop="againPassword">
              <el-input type="password" placeholder="请再输入一次密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" plain round>取 消</el-button>
        <el-button type="primary" @click="registered" plain round>注册</el-button>
      </div>
    </el-dialog>
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
      },//登陆输入框校验规则
      registeredRules: {
        userId: [
          {required: true, message: '请输入注册账号', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        netName: [
          {required: true, message:'请输入账号呢称', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        mode: [
          {required: true, meessage:'请选择注册模式', trigger: 'change'}
        ],
        phone: [
          {required: true, message:'请输入手机号', trigger: 'blur'},
          { min: 11, max: 11, message: '输入的手机号不正确', trigger: 'blur' }
        ],
        email: [
          {required: true, message:'请输入邮箱', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        againPassword: [
          {required: true, message: '请确认密码', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      },
      registeredForm: {
        userId:'',
        netName:'',
        mode:'',
        phone:'',
        email:'',
        password:'',
      },
      registeredMode: [
        {label:'手机注册 (推荐)', value:'phone'},
        {label:'邮箱注册 (不推荐)',  value:'email'}
      ]
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

    openDialog() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },

    registered() {
      this.$axios({
        method:'post',
        url:'http://localhost:9090/api/user/registered',
        data: this.registeredForm
      }).then((res) => {
        this.$message({
          type:'success',
          message:'注册成功'
        })
        this.dialogFormVisible = !this.dialogFormVisible;
        this.clearJson(this.registeredForm);
      },error => {
        this.$message(注册失败);
      }).catch( error => {
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

