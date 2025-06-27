<template>
  <div class="home-view">
    <el-container>
      <el-aside width="720px">
        <img src="../../assets/logo.svg" alt="" />
      </el-aside>
      <el-aside width="720px" class="login-form">
        <div class="header">Management system</div>
        <div class="form">
          <el-form
            ref="ruleFormRef"
            style="max-width: 600px"
            :model="userInfo"
            :rules="rules"
            label-width="auto"
          >
            <el-form-item prop="email">
              <el-input v-model="userInfo.email" placeholder="Please enter the user name">
                <!-- 前缀图标 -->
                <template #prefix>
                  <i-ep:user />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="userInfo.password"
                type="password"
                placeholder="Please enter the password"
              >
                <!-- 前缀图标 -->
                <template #prefix>
                  <i-ep-Lock />
                </template>
                <!-- 后缀图标 -->
                <template #suffix>
                  <i-ep-View />
                </template>
              </el-input>
              <el-link underline="never">Forget the password ?</el-link>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin">Sign in</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import type { User } from './types'
import { useRouter } from 'vue-router'

defineOptions({ name: 'HomeView' })

const router = useRouter()

// 响应式数据
const userInfo = reactive<User>({
  email: '',
  password: '',
})

// 表单验证
const rules = {
  email: [
    { required: true, message: 'Please enter the user name', trigger: 'blur' },
    { type: 'email', message: 'Please enter the user name', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: 'Please enter password', trigger: 'blur' },
    { min: 6, message: 'Please enter password', trigger: ['blur', 'change'] },
  ],
}

const onLogin = () => {
  router.push('/bidding')
}
</script>

<style scoped lang="scss">
.home-view {
  .login-form {
    margin-left: 88px;
    .header {
      margin-bottom: 104px;
      font-weight: 500;
      font-size: 40px;
      color: #303133;
    }
    .form .el-form-item {
      position: relative;
      margin-bottom: 48px;
      .el-button {
        width: 100%;
      }
      :deep(.el-input__inner) {
        padding-top: 21px;
        padding-bottom: 21px;
      }
      .el-button {
        padding: 20px 0;
      }
    }
    .el-form-item:last-of-type {
      margin-top: 140px;
      margin-bottom: 0;
    }
    .el-link {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
    }
  }
}
</style>
