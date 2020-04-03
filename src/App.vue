<template>
	<div id="app">
		<div class="my-5">
			<h5>Button Default</h5>
			<button class="btn btn-primary">Nhập</button>
		</div>

		<div class="my-5">
			<h5>Button Default</h5>
			<Button name="Thêm mới lao động" v-bind:handleClick="handleClick" />
		</div>

		<div class="my-5">
			<h5>Button Icon</h5>
			<Button
				name="Thêm mới lao động"
				icon="ico-adduser.png"
				v-bind:handleClick="handleClick"
			/>
		</div>

		<div class="my-5">
			<h5>Button Icon Outline</h5>
			<Button
				name="Thêm mới lao động"
				type="outline"
				icon="ico-adduser.png"
				v-bind:handleClick="handleClick"
			/>
		</div>

		<div class="my-5">
			<h5>Button Dropdown</h5>
			<Button
				name="Thêm mới lao động"
				icon="ico-adduser.png"
				type="btn-dropdown"
				v-bind:handleClick="handleClick"
				v-bind:dataDropdown="obj"
			/>
		</div>
	</div>
</template>

<script>
	import Button from "./components/Button.vue";

	export default {
		name: "App",
		components: {
			Button
		},
		data: function() {
			return {
				obj: [
					{
						name: "Lưu và Thêm mới",
						icon: "ico-excel.png",
						onClick: () => {
							alert("Click lưu và thêm mới");
						}
					},
					{
						name: "Lưu và Đóng",
						icon: "ico-excel.png",
						onClick: () => {
							alert("Click lưu và đóng");
						}
					}
				]
			};
		},
		methods: {
			handleClick: function() {
				alert("Clicked");
			}
		}
	};
</script>

<style>
	#app {
		padding: 20px;
		color: #333;
	}
</style>
