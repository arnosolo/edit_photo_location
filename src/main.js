import Vue from 'vue'
import App from './App'
import { Navbar, TabItem, TabContainer, 
  TabContainerItem, Button, Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
