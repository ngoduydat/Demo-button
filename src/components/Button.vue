<template>
	<div class="btn-group position-relative">
		<button
			v-on:click="handleClick"
			type="button"
			class="btn"
			v-bind:class="[
				icon !== null && 'btn-default-icon',
				type === 'outline' ? 'm-outline-default' : 'btn-primary'
			]"
		>
			<!-- <i class="fas fa-sync-alt mr-1" v-if="icon !== null"></i> -->
			<div class="widget-image" v-if="icon">
				<img v-bind:src="icon !== null && getImage(icon)" alt="" />
			</div>

			{{ name }}
		</button>

		<button
			type="button"
			class="btn btn-primary btn-split-left"
			v-bind:class="icon !== null && 'btn-default-icon'"
			data-toggle="dropdown"
			aria-expanded="false"
			v-if="type === 'btn-dropdown'"
		>
			<i class="fas fa-chevron-down"></i>
		</button>
		<div
			class="dropdown-menu  dropdown-menu-right btn-dropdown"
			v-if="type === 'btn-dropdown' && dataDropdown !== null"
		>
			<a
				class="dropdown-item"
				href="javascript:void(0)"
				v-for="(item, index) in dataDropdown"
				v-bind:key="index"
				v-on:click="item.onClick"
			>
				<div class="widget-image" v-if="item.icon">
					<img
						v-bind:src="item.icon !== null && getImage(item.icon)"
						alt=""
					/>
				</div>
				{{ item.name }}
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Button",
		props: {
			type: {
				type: String,
				default: "default" //default, icon, drop-down, outline
			},
			handleClick: {
				type: Function
			},
			name: String,
			icon: {
				default: null
			},
			dataDropdown: {
				type: Array,
				default: null
			}
		},
		methods: {
			renderIcon() {
				var uri = require(`'${this.icon}'`);
				console.log(uri);
				return uri;
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
