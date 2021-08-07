import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';

import './src/all.js';

Dative.importstyle('css/all')

var app = new Dative({
  el: '#app',
  data:{
    title: 'Made with DativeJs',
    link: '/'
  },
  methods:{
    navopen(){
      this.$ref.menu.classList.toggle("hidden")
    }
  }
})
app.render()