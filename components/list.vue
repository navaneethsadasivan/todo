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
          },
          listSize() {
            console.log(this.$store.getters.getCount)
          }
        },
        methods: {
          addNewToDo(e) {
            this.dialogVisible = false
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
</style>
