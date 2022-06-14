const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname(){
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;      
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
