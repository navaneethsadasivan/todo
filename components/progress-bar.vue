<template>
  <el-card>
    <div slot="header">
      <span>Completed Tasks</span>
    </div>
    <div v-if="total">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-progress type="circle" :color="colors" :percentage="Math.floor((completed/total)*100)"></el-progress>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-progress type="circle" :percentage="0" :show-text="0"></el-progress>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
    import { mapGetters } from 'vuex'
    let completed = null
    let total = null

    export default {
      name: "progress",
      computed: {
        ...mapGetters({
          completed: 'list/getCompletedCount',
          total: 'list/getCount'
        })
      },
      data() {
        return {
          colors: [
            {color: '#f50c0c', percentage: 20},
            {color: '#f2cf07', percentage: 40},
            {color: '#cbf207', percentage: 60},
            {color: '#6ee810', percentage: 80},
            {color: '#13eb1a', percentage: 100}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
