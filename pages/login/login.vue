<template>
  <div class="admin-page">
    <div class="loginBar">
      <div class="input-bar">
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
        <a href="#" style="float:left; margin-bottom:10px;" @click="dialogFormVisible=true">没有账号？注册一个</a>
        <a href="#" style="float:right; margin-bottom:5px;">忘记密码？</a>
      </div>
    </div>
    <el-dialog title="注册账号" :visible.sync="dialogFormVisible">
      <el-form v-model="registeredForm">
        <el-row>
          <el-col :span="24">
            <el-form-item label="账号">
              <el-input v-model="registeredForm.userId" placeholder="请输入账号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="呢称">
              <el-input v-model="registeredForm.netName" placeholder="请输入呢称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="注册方式">
              <el-select v-model="registeredForm.mode" placeholder="请选择注册方式">
                <el-option v-for="item in registeredMode" :value="item.value" :label="item.label" :key="item.index">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="手机号" v-if="registeredMode === 'phone'">
              <el-input placeholder="请输入手机号" v-model="registeredForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" v-else>
              <el-input placeholder="请输入邮箱号" v-model="registeredForm.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" v-model="registeredForm.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="请确认密码">
              <el-input placeholder="请再输入一次密码" v-model="registeredForm.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account:'',
        password:''
      }, //用户输入的账号密码;
      dialogFormVisible:false,//注册对话框是否打开标识;
      registeredForm: {
        userId:'',
        netName:'',
        mode:'',
        phone:'',
        email:'',
        password:''
      },
      registeredMode: [
        {label:'手机注册 (推荐)', value:'phone'},
        {label:'邮箱注册 (不推荐)',  value:'email'}
      ]
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
    width: 30%;
    height: 40%;
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

