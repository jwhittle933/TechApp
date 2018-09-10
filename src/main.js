import Vue from 'vue'

new Vue({
  el: "item",
  data: {
    message: "Tech Help @ SBTS"
  },
  methods: {
    refreshMessage(resource) {
      this.$http.get('/message').then((response) {
        this.message = response.data.message;
      });
    }
  }
})

Vue.component('sub-component', {
  template: '<div>{{ message }}</div>',
  props: [ 'message' ]
  methods: {
    refreshMessage() {
      this.$emit('refreshMessage');
    }
  }
});