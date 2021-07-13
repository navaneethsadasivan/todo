<template>
  <div>
    <banner/>
    <el-row type="flex" :gutter="30">
      <el-col :span="14" :offset="1">
        <list/>
      </el-col>
      <el-col :span="8">
        <div style="padding-bottom: 20px">
          <add-new-task/>
        </div>
        <progress-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>
