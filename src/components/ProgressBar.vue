<template>
<div id="div">
    <b-progress :max="max" id='maximo'>
      <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" id='progresso'></b-progress-bar>
    </b-progress>

</div>
</template>

<script>
export default {

   data() {
       return {
           value:30,
           max:100
       }
   },

}
</script>

<style>
    #div{
        margin-bottom: 50px;
    }
    #progresso{

        width: 400px;
        height: 20px;
        background: tomato;
    }
    #maximo{
        width: 400px;
        height: 20px;
        background-color: white;
    }

</style>

