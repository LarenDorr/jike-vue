<template>
	<div class="nav-bar">
		<div
			v-for="tab,index in tabs"
			:key="index"
			:class="['tab', currentRoute === tab.route ? 'active-tab' : '']"
			@click="handleClick(tab.route)"
		>
			<img :src="require('@/assets/img/dot.png')" class="dot" v-show="tab.hasNew && currentRoute !== tab.route">
			<img :src="currentRoute === tab.route ? tab.selected : tab.unselected" class="tab-img">
			<p>{{tab.name}}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NavBar',
	data () {
		return {
			tabs: [
				{
          name: '首页',
          route: 'home',
          selected: require('@/assets/img/ic_tabbar_home_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_home_unselected.png'),
					hasNew: false
        },
        {
          name: '动态',
          route: 'activity',
          selected: require('@/assets/img/ic_tabbar_activity_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_activity_unselected.png'),
					hasNew: true
        },
        {
          name: '发现',
          route: 'discovery',
          selected: require('@/assets/img/ic_tabbar_discovery_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_discovery_unselected.png'),
					hasNew: false
        },
        {
          name: '我的',
          route: 'personal',
          selected: require('@/assets/img/ic_tabbar_personal_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_personal_unselected.png'),
					hasNew: true
        }
			]
		}
	},
	computed: {
		currentRoute () {
			return this.$route.name
		}
	},
	methods: {
		handleClick (route) {
			this.$router.push({
				path: `/main/${route}`
			})
		}
	}
}
</script>
<style scoped lang="scss">
.tab{
	width: 15%;
	text-align: center;
	color: #aaa;
	position: relative;
  transition: all 0.3s ease;
}
.dot{
	position: absolute;
	width: 30%;
	height: 30%;
	right: 12%;
	top: -10%;
}
.tab-img{
	display: inline-block;
	width: 40%;
	height: 40%;
}
.active-tab{
	transform: scale(1.1);
  transition: all 0.3s ease;
	color: black;
}
</style>