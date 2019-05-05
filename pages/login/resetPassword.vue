<template>
    <el-container>
        <el-card class="singUp-bar">
            <div v-if="flag === 'info'">
                <el-form :model="userInfo" ref="userInfo" :rules="rules" label-width="80px"> 
                    <el-form-item label="账号" prop="userId">
                        <el-input v-model="userInfo.userID" placeholder="请输入用户账号"></el-input>
                    </el-form-item>
                    <el-form-item label="注册方式" prop="mode">
                        <el-select v-model="userInfo.mode" placeholder="请选择注册方式">
                            <el-option v-for="item_select in registeredMode" :value="item_select.value" :label="item_select.label" :key="item_select.index">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-if="userInfo.mode == 'phone'">
                        <el-form-item label="手机号" prop="phone">
                            <el-input placeholder="请输入手机号" v-model="userInfo.phone"></el-input>
                        </el-form-item>
                    </div>
                    <div v-else-if="userInfo.mode == 'email'">
                        <el-form-item label="邮箱" prop="email">
                            <el-input placeholder="请输入邮箱号" v-model="userInfo.email"></el-input>
                        </el-form-item>
                    </div>
                    <div class="button-list">
                        <el-button plain round>取 消</el-button>
                        <el-button type="primary" plain round @click="setFlag">确 认</el-button>
                    </div>
                </el-form>
            </div>
            <div v-else>
                <el-form :model="inputPassword" ref="inputPassword" :rules="passwordRule">
                    <el-form-item label="新密码" prop="password">
                        <el-input type="password" v-model="inputPassword.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="againPassword">
                        <el-input type="password" v-model="againPassword" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-form>
                <div class="button-list">
                    <el-button plain round>取 消</el-button>
                    <el-button type="primary" plain round>确认修改</el-button>
                </div>
            </div>
        </el-card>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                userId:'',
                mode:'',
                email:'',
                phone:''
            },
            inputPassword:{
                password:''
            },
            flag:'info',
            againPassword:'',
            registeredMode: [
                {label:'手机注册', value:'phone'},
                {label:'邮箱注册',  value:'email'}
            ],
            rules: {
                userId: [
                {required: true, message: '请输入注册账号', trigger: 'blur'},
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
            },
            passwordRule: {
                password: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
                againPassword: [
                {required: true, message: '请确认密码', trigger: 'blur'},
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        setFlag() {
            console.log("set");
            this.flag = 'password';
        }
    }
}
</script>

<style lang="less" scoped>
    .singUp-bar {
        margin-left: 35%;
        margin-top: 5%;
        width:30%;
    };
    .button-list {
        float:right 
    }
</style>


