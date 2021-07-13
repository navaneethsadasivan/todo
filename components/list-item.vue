<template>
  <el-row type="flex" align="center" justify="space-between">
    <el-col :span="4">
      <el-checkbox :checked="listItem.done" @change="toggle(listItem)"></el-checkbox>
    </el-col>
    <el-col :span="16">
        <el-collapse-item :name="listItem.id">
          <template slot="title">
            <p>{{ listItem.text }}</p>
          </template>
          <div>
            <el-form ref="form" :label-position="labelPosition" :model="form" label-width="100px">
              <el-form-item label="Task: ">
                <span>{{ listItem.text }}</span>
              </el-form-item>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="Created At: ">
                    <span>12 December 2019</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Priority: ">
                    <el-tag effect="dark" :type="task.priority">Critical</el-tag>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-collapse-item>
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
      },
      data() {
        return {
          labelPosition: 'left',
          form: {
            name: this.listItem.text
          },
          task: {
            priority: 'danger'
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
