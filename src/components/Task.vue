<template>
    <div>
        <div v-if="!tarefa">
             {{tarefa}}
        </div>
        <div v-else>
            <b-badge variant="danger">{{tarefa}}<span id='closeBadge' class="sr-only">X</span></b-badge>
        </div>
        
    </div>
</template>
<script>
export default {
    props : {task: String},

    data: function() {
        return {
            
        }
    },
   

    
}
</script>
<style>
    
</style>