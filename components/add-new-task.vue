<template>
  <el-card>
    <div slot="header">
      Enter a new task
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="input">
        <el-input placeholder="Enter the new task" v-model="ruleForm.input"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio">
        <el-radio-button v-for="radio in radios" :key="radio.name" :label="radio.name"></el-radio-button>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click.native="addNewToDo('ruleForm')">Add +</el-button>
  </el-card>
</template>

<script>
    export default {
      name: "add-new-task",
      data() {
        return {
          ruleForm: {
            input: '',
          },
          rules: {
            input: [
              {required: true, message: 'Please enter task', trigger: 'blur'}
            ]
          },
          radio: 'Critical',
          radios: [
            { name: 'Low', style: 'success' },
            { name: 'Medium', style: 'warning' },
            { name: 'Critical', style: 'danger' },
          ]
        }
      },
      methods: {
        addNewToDo(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = {
                text : this.ruleForm.input,
                priority: this.radio
              }
              this.$store.commit('list/add', data)
              this.ruleForm.input = ''
              this.$message({
                message: 'Task added',
                type: 'success'
              })
            }
          })
        }
      },
    }
</script>

<style scoped>

</style>
