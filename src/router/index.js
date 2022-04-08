import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import dynamic from '../views/dynamic/index.vue'      //动态
import homeworld from '../views/homeworld/index.vue'      //家园
import news from '../views/news/index.vue'    //消息
import own from '../views/own/index.vue'      //我的

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		redirect: '/dynamic',
		component: Home,
		children: [
			{
				path: 'dynamic',
				name: 'dynamic',
				component: dynamic
			
			},
			{
				path: 'homeworld',
				name: 'homeworld',
				component: homeworld
			},
			{
				path: 'news',
				name: 'news',
				component: news
			},
			{
				path: 'own',
				name: 'own',
				component: own
			},
		]
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
