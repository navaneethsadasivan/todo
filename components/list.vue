<template>
  <div>
    <el-card class="card-box">
      <div slot="header">
        <p>To-Do List</p>
      </div>
      <el-collapse accordion>
        <div v-for="item in list" :key="item.id">
          <list-item
            :list-item="item"
          />
        </div>
      </el-collapse>
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
