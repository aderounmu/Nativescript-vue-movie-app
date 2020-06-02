import Vue from 'nativescript-vue';
import NSVueShadow from './nativescript-vue-shadow'
//import HelloWorld from './components/HelloWorld';
import Home from './components/Modules/Home.page/Home';
//import Details from './components/Modules/Details.page/Details'
//import Time from './components/Modules/Time.page/Time'
import page2 from './components/page2'
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.use(NSVueShadow)

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        //HelloWorld,
        Home,
        //Details, 
        //Time,
        page2
    }
}).$start();