const { default: Vue } = require("vue");

export default new Vue({

    methods:{
        addTask(taskName){
            this.$emit('taskAdded', taskName)
        },
        onAddTask(callback){
            this.$on('addTask', callback)
        },
        deleteTask(idTask){
            this.$emit('deleteTask', idTask)
        },
        onDeleteTask(callback){
            this.$emit('deleteTask', callback)
        },
        taskStateChange(task){
            this.$emit('stateChaged', task)
        }

    }
})