<template>
    <div>
        <el-form :model="userInfo" ref="userInfo" :rules="rules"> 
            <el-form-item label="账号" prop="userId">
                <el-input v-model="userInfo.userID" placeholder="请输入用户账号"></el-input>
            </el-form-item>
            <el-form-item label="注册方式" prop="mode">
                <el-select v-model="registeredForm.mode" placeholder="请选择注册方式">
                    <el-option v-for="item in registeredMode" :value="item.value" :label="item.label" :key="item.index">
                    </el-option>
                </el-select>
            </el-form-item>
            <div v-if="registeredForm.mode == 'phone'">
                <el-form-item label="手机号" prop="phone">
                    <el-input placeholder="请输入手机号" v-model="userInfo.phone"></el-input>
                </el-form-item>
                </div>
                <div v-else>
                <el-form-item label="邮箱" prop="email">
                    <el-input placeholder="请输入邮箱号" v-model="userInfo.email"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-button plain round>取 消</el-button>
                <el-button type="primary" plain round>注册</el-button>
            </div>
        </el-form>
    </div>
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
            registeredMode: [
                {label:'手机注册 (推荐)', value:'phone'},
                {label:'邮箱注册 (不推荐)',  value:'email'}
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
        }
    }
}
</script>
