<!-- Vue Template HTML Markup -->

<template>
	<v-select :items="['Foo', 'Bar']" label="Items"></v-select>
	<div>键盘事件</div>
	<input type="text" @keyup="key" />
	<div>
		<v-select :items="['Fizz', 'Buzz']" label="Items">
			<template v-slot:item="{ item, attrs, on }">
				<v-list-item v-bind="attrs" v-on="on">
					<v-list-item-content>
						<v-list-item-title :id="attrs['aria-labelledby']" v-text="item.title"></v-list-item-title>

						<v-list-item-subtitle v-text="item.sub"></v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-select>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'vuetifyVue',
	methods: {
		key(event: any) {
			console.log(event);
		}
	}
})
</script>
