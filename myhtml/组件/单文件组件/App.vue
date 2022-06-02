<template>
  <div>
      <SchoolVue></SchoolVue>
      <StudentVue></StudentVue>
  </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
    import SchoolVue from './School.vue'
    import StudentVue from './Student.vue'
    export default {
        name:"App",
        components:{
            SchoolVue,
            StudentVue
        }
    }
</script>

<style>

</style>