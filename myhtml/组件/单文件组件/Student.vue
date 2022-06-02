<template>
    <div>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showName">点我显示学生名字</button>
    </div>
</template>

<script>
    //第四种暴露方式，也是最常用最简洁的方式
    export default {
        name:"Student", //尽量保持与文件名一致
        data() {
            return {
                name: "李明章",
                age: 30
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
</style>