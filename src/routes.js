import	Vue from "vue"
import	VueRouter from "vue-router"
import	Loginpage from "./components/auth/login.vue"
import	Registerpage from "./components/auth/register.vue"

Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'history',
	routes : [
		{
			path: "/login",
			component : Loginpage
		},
		{
			path: "/register",
			component : Registerpage
		}
	]
})
export default router