<template>
	<div class="home">
		<div>
			<router-view></router-view>
		</div>
		<van-tabbar v-model="active" active-color="#f75b3e" route>
			<van-tabbar-item v-for="(item,index) in List" :name="item.name" :to="item.path" @click="toggle(item.name)">
				<template slot="icon" slot-scope="props">
					<img :src="props.active ? item.active : item.normal" />
				</template>
				<span>{{item.title}}</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import {getToken} from '@/apis/example.js'
	export default {
		name: 'home',
		components: {},
		data() {
			return {
				active: 'home',
				List:[{
					name:'dynamic',
					path:'/dynamic',
					title:'动态',
					normal: require('@/static/icon/market.png'),
					active: require('@/static/icon/market_selected.png')
				},{
					name:'homeworld',
					path:'/homeworld',
					title:'家园',
					normal: require('@/static/icon/live.png'),
					active: require('@/static/icon/live_selected.png')
				},{
					name:'news',
					path:'/news',
					title:'消息',
					normal: require('@/static/icon/news.png'),
					active: require('@/static/icon/news_selected.png')
				},{
					name:'own',
					path:'/own',
					title:'我的',
					normal: require('@/static/icon/own.png'),
					active: require('@/static/icon/own_selected.png')
				}],
			}
		},
		mounted() {
			let formData = new FormData();
			formData.append("appKey",'90c6410891364652917e01389e304d34');
			formData.append("appSecret",'a1fab98b774297e341038314b2cc8800');
			getToken(formData).then(res =>{
				console.log(res);
			})
		},
		methods: {
			toggle(e) {
				this.active = e;
			}
		}
	}
</script>
<style lang="scss">
	.van-tabbar-item {
		color: #333333;
	}
	
	.van-tabbar {
		height: 58px;
		box-shadow: 0 -2px 2px #f1f1f1;
		z-index: 999 !important;
		background: #FFFFFF;
	}
</style>
