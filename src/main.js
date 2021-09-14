// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPaperPlane, faCompass, faHeart, faTimesCircle, faSearch, faEllipsisH, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faPaperPlane)
library.add(faCompass)
library.add(faHeart)
library.add(faTimesCircle)
library.add(faSearch)
library.add(faEllipsisH)
library.add(faHeart)
library.add(faComment)


library.add(faBookmark)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
