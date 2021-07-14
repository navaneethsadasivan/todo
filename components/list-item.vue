<template>
  <el-row type="flex" align="center" justify="space-between">
    <el-col :span="4">
      <el-tooltip effect="light" :content="statusSwitchTooltip(listItem.done)" placement="top-start">
        <el-switch
          :value="listItem.done"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="toggle(listItem)"
        ></el-switch>
      </el-tooltip>
    </el-col>
    <el-col :span="12">
      <span>{{ listItem.text }}</span>
    </el-col>
    <el-col :span="4">
      <el-tag
        effect="dark"
        :key="listItem.priority"
        :type="tag(listItem.priority)"
      >
        {{ listItem.priority }}
      </el-tag>
    </el-col>
    <el-col :span="4">
      <el-row type="flex">
        <el-col>
          <i @click="remove(listItem)" class="ri-close-circle-line ri-2x" style="color: orangered"></i>
        </el-col>
<!--        <el-col>-->
<!--          <i class="ri-edit-2-line ri-2x" style="color: dodgerblue"></i>-->
<!--        </el-col>-->
      </el-row>
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
      },
      data() {
        return {
          tag: function (priority) {
            if (priority === 'critical') {
              return 'danger'
            } else if (priority === 'medium') {
              return 'warning'
            } else {
              return 'success'
            }
          },
          statusSwitchTooltip: function (status) {
            if (status) {
              return 'Completed'
            } else {
              return 'Pending'
            }
          }
        }
      }
    }
</script>

<style scoped>
  .el-col {
    align-self: center;
  }
</style>
