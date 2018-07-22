<template>
	<div class="mask">
		<div class="mask-top-bar">
			<img :src="arrowLeft">
			<p class="bar-title">{{title}}</p>
			<slot name="bar-right"></slot>
		</div>
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: ['title'],
	data () {
		arrowLeft: require('@/assets/img/common/arrow_left.png')
	}
}
</script>
<style lang="scss">

</style>

