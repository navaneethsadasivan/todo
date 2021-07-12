<template>
  <div>
    <banner/>
    <el-row type="flex" :gutter="30">
      <el-col :span="14" :offset="1">
        <list/>
      </el-col>
      <el-col :span="8">
        <add-new-task/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>
