<template>
	<div id="app">
		<canvas id="canvas" width="300" height="300"></canvas>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'canvasExp',
	data() {
		return {

		}
	},
	mounted() {
		const el = document.querySelector<HTMLCanvasElement>('#canvas')!
		const app = el.getContext('2d')!
		//填充主画布
		app.fillStyle = '#3498db'
		app.fillRect(0, 0, 300, 300)
		//填充子画布
		app.fillStyle = '#e67e22'
		app.fillRect(el.width / 2 - 50, el.height / 2 - 50, 100, 100)

		app.strokeStyle = '#2d3436'
		app.lineWidth = 30
		app.lineJoin = 'round'
		app.strokeRect(el.width / 2, el.height / 2, 50, 50)
	}
})
</script>
