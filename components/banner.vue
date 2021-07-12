<template>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <p>To-Do</p>
        </div>
      </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
  .grid-content {
    background: #67C23A;
    border-radius: 4px;
    min-height: 36px;
    margin-bottom: 20px;
  }

  p {
    font-family: "Times New Roman", Times, serif;
    font-size: x-large;
  }
</style>
