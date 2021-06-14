<template>
    <div>
         <b-list-group horizontal="md" id="listGroup">
            <b-list-group-item id="groupItem"><Task :task="task" ><slot></slot></Task></b-list-group-item>
        </b-list-group>
        
    </div>
</template>
<script>
import Task from './Task.vue'
import barramento from '../barramento.js'
export default {
    components:{
        Task,
    },
    data() {
        return {
            task : 'vazio'
        }
    },
    computed(){
        barramento.onInputTask(tarefa =>{
            this.task = tarefa
        })
    }
}
</script>
<style>
#listGroup{
    display: flex;
    background-color: transparent;
    width: 300px;
}
#groupItem{
    background-color: transparent;
    border: solid red;
    display: inline-block;
    margin: 5px;
}
    
</style>