const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        visibility: true,
        inputBackgroundColor: '',
      };
    },
    computed: {
        paragraphClasses(){
            if(this.visibility){
                return [this.userInput, 'visible'];
            }
            else{
                return [this.userInput, 'hidden'];
            }
            
        },
    },
    methods: {
        toggleParagraph(){
            this.visibility = !this.visibility;
        }
    },
  });
  
  app.mount('#assignment');