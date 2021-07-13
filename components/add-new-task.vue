<template>
  <el-card>
    <div slot="header">
      Enter a new task
    </div>
    <el-input placeholder="Enter the new task" v-model="input"></el-input>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio">
        <el-radio-button v-for="radio in radios" :key="radio.name" :label="radio.name"></el-radio-button>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click.native="addNewToDo">Add +</el-button>
  </el-card>
</template>

<script>
    export default {
      name: "add-new-task",
      methods: {
          addNewToDo() {
            if (this.input !== '') {
              let data = {
                text : this.input,
                priority: this.radio
              }
              this.$store.commit('list/add', data)
              this.input = ''
            }
          }
      },
      data() {
        return {
          input: '',
          radio: 'Critical',
          radios: [
            { name: 'Low', style: 'success' },
            { name: 'Medium', style: 'warning' },
            { name: 'Critical', style: 'danger' },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
