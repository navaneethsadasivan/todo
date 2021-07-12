<template>
  <el-row type="flex" align="center" justify="space-between">
    <el-col :span="4">
      <el-checkbox :checked="listItem.done" @change="toggle(listItem)"></el-checkbox>
    </el-col>
    <el-col :span="16">
      <p>{{ listItem.text }}</p>
    </el-col>
    <el-col :span="4">
      <i @click="remove(listItem)" class="ri-close-circle-line ri-2x" style="color: orangered"></i>
    </el-col>
  </el-row>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
      name: "list-item",
      props: {
        listItem: Object
      },
      methods: {
        ...mapMutations({
          toggle: 'list/toggle',
          remove: 'list/remove'
        })
      }
    }
</script>

<style scoped>
  .el-col {
    align-self: center;
  }
</style>
