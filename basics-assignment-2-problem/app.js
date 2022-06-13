const app = Vue.createApp(
    {
        data() {
            return {
                userInput: '',
                userEnter: ''
            }
        },
        methods: {
            showAlert(){
                alert('yaaay');
            },
            onUserInput(event){
                this.userInput = event.target.value;
            },
            onUserEnter(event){
                this.userEnter = this.userInput;
            }
        }
    }
);

app.mount('#assignment');