<template>
  <div id="div">
    <b-form-input v-model="text" placeholder="Nova Tarefa" id="inputTask"></b-form-input>
    <b-button variant="success" id='AddTask'  @click="setTask">+</b-button>
  </div>
 
</template>

<script>

import barramento from '../barramento.js'
export default {
   
  data() {
    return {
      text:''
    }
  },
   methods: {
     
     setTask(text){

       barramento.setTask(text)
       
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