<template>
  <div id="div">
    <b-form-input :model="name" placeholder="Nova Tarefa ?" id="inputTask"></b-form-input>
    <b-button variant="success" id='AddTask'  @click="addTask">+</b-button>
  </div>
 
</template>

<script>

export default {
   
  data() {
    return {
      name:''
    }
  },
   methods: {
     addTask(){
      this.$emit('taskAdded',{name : this.name})
      this.name = ''
       
    },
  },

}
</script>

<style>
    #div{

        display: flex;
    }
    #AddTask{
      border-radius: 20px;
      margin-left: 5px;
    }
   
</style>