const { default: Vue } = require("vue");

export default new Vue({

    methods:{
        setTask(task){
            this.$emit('inputTask', task)
        },
        onInputTask(callback){
            this.$on('inputTask', callback)
        }
    }
})