<template>
  <el-card>
    <div slot="header">
      Enter a new task
    </div>
    <el-input placeholder="Enter the new task" v-model="input"></el-input>
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
              this.$store.commit('list/add', this.input)
              this.input = ''
            }
          }
      },
      data() {
        return {
          input: ''
        }
      }
    }
</script>

<style scoped>

</style>
