<template>
    <el-container>
        <el-card class="singUp-bar">
            <el-form :model="registeredForm" ref="registeredForm" :rules="registeredRules" label-width="100px">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="账号" prop="userId">
                    <el-input type="text" v-model="registeredForm.userId" placeholder="请输入账号" clearable ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="呢称" prop="netName">
                    <el-input type="text" v-model="registeredForm.netName" placeholder="请输入呢称"></el-input>
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
                <el-input type="password" v-model="againPassword" placeholder="请再输入一次密码"></el-input>
                </el-form-item>
            </el-col>
            </el-row>
            </el-form>
            <div>
                <el-button @click="dialogFormVisible = false" plain round>取 消</el-button>
                <el-button type="primary" @click="registered" plain round>注册</el-button>
            </div>
        </el-card>
    </el-container>
</template>


<script>
export default {
  data() {
    return {
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
      againPassword:'',//确认输入的密码;
      registeredMode: [
        {label:'手机注册 (推荐)', value:'phone'},
        {label:'邮箱注册 (不推荐)',  value:'email'}
      ]
    }
  },
  methods: {
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
  .singUp-bar {
    margin-left: 35%;
    margin-top: 5%;
  }
</style>