<template>
  <div>
    <el-card>
      <div slot="header">
        <el-row type="flex" align="center">
          <span>To-Do List</span>
          <i class="ri-todo-line" style="margin-left: 5px"></i>
        </el-row>
      </div>
      <div class="listBody">
        <el-row type="flex">
          <el-col :span="4">
            <span>Status</span>
          </el-col>
          <el-col :span="12">
            <span>Task</span>
          </el-col>
          <el-col :span="4">
            <span>Priority</span>
          </el-col>
          <el-col :span="4">
            <span>Action</span>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div v-if="listSize">
        <div v-for="item in list" :key="item.id">
          <list-item
            :list-item="item"
          />
          <el-divider></el-divider>
        </div>
      </div>
      <div v-else>
        <el-empty discription="No Data"></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ListItem from "./list-item";

    export default {
      components: {ListItem},
      computed: {
          list() {
            return this.$store.state.list.list
          },
          ...mapGetters({
            listSize: 'list/getCount'
          })
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
