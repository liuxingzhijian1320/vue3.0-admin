<template>
  <div class="login">
    <el-form ref="ruleForm" label-width="100px" style="width: 400px"
      class="demo-ruleForm">
      <div class="title">登录</div>
      <el-form-item class="label" label="账户" prop="account">
        <el-input v-model="account" placeholder="账户名为：admin"></el-input>
      </el-form-item>
      <el-form-item class="label" label="密码" prop="password">
        <el-input v-model="password" placeholder="密码随便写"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">
          立即创建
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  name: "login",
  setup(props) {
    var router = useRouter();

    const ruleForm = reactive({
      account: "admin",
      password: "123",
    });
    // console.log("ruleForm", ruleForm);

    // const account = ref("");
    // const password = ref("");

    const submitForm = () => {
      const { account, password } = ruleForm;
      if (!account) {
        ElMessage.error("请输入账户");
        return;
      } else if (!password) {
        ElMessage.error("请输入密码");
        return;
      } else {
        if (account === "admin" && password) {
          ElMessage.success("登录成功");
          router.push("/console");
        } else {
          ElMessage.error("账户密码错误");
        }
      }
    };

    return {
      ...toRefs(ruleForm),
      submitForm,
      // account,
      // password,
    };
  },
};
</script>
<style lang="scss">
.login {
  height: 100vh;
  background: #344a5f;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .label /deep/ .el-form-item__label {
    color: #fff;
  }
}
</style>
