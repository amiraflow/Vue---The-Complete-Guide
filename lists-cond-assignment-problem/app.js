const app = Vue.createApp({
    data() {
      return { 
        inputtedTask: '',
        tasks: [],
        visibility: true,

       };
    },
    methods: {
      addTask(){
        this.tasks.push(this.inputtedTask);
      },
      toggleVisibility(){
        this.visibility = !this.visibility;
      }
    }
  });
  
  app.mount('#assignment');