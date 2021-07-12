<template>
  <div>
    <el-card class="card-box">
      <div slot="header">
        <p>To-Do List</p>
      </div>
      <div v-for="item in list" :key="item.id">
        <list-item
          :list-item="item"
        />
      </div>
      <el-divider></el-divider>
      <el-button type="primary" @click="dialogVisible = true">Add +</el-button>
    </el-card>

    <el-dialog
      :visible.sync="dialogVisible"
      width="70%"
      title="Enter a new task"
    >
      <el-input @keyup.enter.native="addNewToDo" placeholder="Type and press enter" v-model="input"></el-input>
    </el-dialog>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import ListItem from "./list-item";

    export default {
      components: {ListItem},
      computed: {
          list() {
            return this.$store.state.list.list
          }
        },
        methods: {
          addNewToDo(e) {
            this.dialogVisible = false
            this.input = ''
            this.$store.commit('list/add', e.target.value)
          }
        },
        data() {
          return {
            input: '',
            dialogVisible: false
          }
        }
    }
</script>

<style scoped>
  .card-box {
    width: 40%;
  }
</style>
