const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';      
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
    outputFullName(){
      return this.name + ' ' + 'Schwarzmuller';
    }
  }
});

app.mount('#events');
