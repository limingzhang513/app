// 需要引入脚手架，否则浏览器不能识别，脚手架一般使用最新版本（向下兼容）
//vue脚手架的官方文档：https://cli.vuejs.org/zh/
import App from './App.vue'


new Vue({
    el:"#root",
    template:`<App></App>`,
    components:{
        App
    }
})