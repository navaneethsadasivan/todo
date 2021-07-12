<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="4">
      <el-checkbox :checked="listItem.done" @change="toggle(listItem)"></el-checkbox>
    </el-col>
    <el-col :span="20">
      <p>{{ listItem.text }}</p>
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
          toggle: 'list/toggle'
        })
      }
    }
</script>

<style scoped>

</style>
