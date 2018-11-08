<template>
	<div class="main">
		<router-view class="main-content"></router-view>
		<NavBar class="nav-bar"></NavBar>
	</div>
</template>
<script>
import NavBar from '@/components/main/NavBar.vue'

export default {
	name: 'mainview',
	data () {
		return {
		}
	},
	components: {
		NavBar
	}
}
</script>
<style scoped>
.main{
	height: 100%;
	width: 100%;
}
.main-content{
	height: 91%;
}
.nav-bar{
	height: 8%;
	display: flex;
	justify-content: space-around;
}
</style>
