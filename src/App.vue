<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :progress="progress"></ProgressBar>
		<NewTask @taskAdded="addTask"></NewTask>
		<ListGroupTask :tasks="tasks"
			@deleteTask="deleteTask"
		></ListGroupTask>
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import NewTask from './components/NewTask.vue'
import ListGroupTask from './components/ListGroupTask.vue'
export default {

	components:{
		ProgressBar, NewTask, ListGroupTask
	},

	data() {
		return {
			tasks :[]
		}
	},
	computed: {
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(x => !x.pending).length
			return Math.round(done/total * 100) || 0
		}
	},
	methods: {
		addTask(task){
			const sameName = t => t.name == task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew){
				this.tasks.push({
					name : task.name,
					pending : task.pending || true

				})
			}
		},
		deleteTask(index){
			this.tasks.splice(index,1)
		},
		toggleTaskStatus(index){
			this.tasks[index].pending = !this.tasks[index].pending
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
