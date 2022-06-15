const app = Vue.createApp({
    data(){
        return {
            result: 0
        }  
    },
    watch: {
        fullResult(value){
            const that = this;
            setTimeout(function(){ 
                that.result = 0; },
                5000);
        }
    },
    computed: {
        fullResult(){
            if(this.result < 37){
                return 'Not there yet';
            }
            if(this.result === 37){
                return this.result;
            }
            if(this.result > 37){
                return 'Too much!';
            }
        }
    },
    methods: {
        addNumber(num){
            this.result = this.result + num;
        },
    }
});

app.mount('#assignment');