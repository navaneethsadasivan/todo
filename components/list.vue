<template>
  <div>
    <el-card>
      <div slot="header">
        <el-row type="flex" align="center">
          <el-col :span="6">
            <span>To-Do List</span>
            <i class="ri-todo-line" style="margin-left: 5px"></i>
          </el-col>
          <el-col>
            <el-button @click="drawer.drawer = true">Filter</el-button>
          </el-col>
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

    <el-drawer
      title="Filters"
      :visible.sync="drawer.drawer"
      :direction="drawer.direction"
    >
      <el-divider></el-divider>
      <h3>Task Status</h3>
      <el-row type="flex">
        <el-col>
          <span>Completed Tasks</span>
          <el-switch
            v-model="drawer.completed"
          ></el-switch>
        </el-col>
        <el-col>
          <span>Pending Tasks</span>
          <el-switch
            v-model="drawer.pending"
          ></el-switch>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h3>Priority</h3>
      <el-row class="drawerPriority">
        <el-col>
          <span>Critical Tasks</span>
          <el-switch
            v-model="drawer.critical"
          ></el-switch>
        </el-col>
        <el-col>
          <span>Medium Tasks</span>
          <el-switch
            v-model="drawer.medium"
          ></el-switch>
        </el-col>
        <span>Low Tasks</span>
        <el-switch
          v-model="drawer.low"
        ></el-switch>
      </el-row>
      <el-button @click="addFilter" type="success">Submit</el-button>
    </el-drawer>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ListItem from "./list-item";

    export default {
      components: {ListItem},
      computed: {
        ...mapGetters({
          list: 'list/getWithFilters',
          listSize: 'list/getCount'
        })
      },
      methods: {
        addFilter() {

        }
      },
      data() {
        return {
          input: '',
          dialogVisible: false,
          drawer: {
            drawer: false,
            direction: 'ltr',
            completed: 0,
            pending: 0,
            critical: 0,
            medium: 0,
            low: 0
          }
        }
      }
    }
</script>

<style scoped>
  .drawerPriority {
    margin-bottom: 40px;
  }
  .drawerPriority > .el-col {
    margin-bottom: 20px;
  }
</style>
