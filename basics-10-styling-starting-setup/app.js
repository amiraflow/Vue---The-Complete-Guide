const app = Vue.createApp({
    data(){
        return {
            boxSelectedA: false,
            boxSelectedB: false,
            boxSelectedC: false,
        }  
    },
    watch: {

    },
    computed: {
        boxAClasses(){
            return { active: this.boxSelectedA };
        },
        
    },
    methods: {
        boxSelected(box){
            if(box === 'A'){
                this.boxSelectedA = !this.boxSelectedA;
            }
            else if(box === 'B'){
                this.boxSelectedB = !this.boxSelectedB;
            }
            else if(box === 'C'){
                this.boxSelectedC = !this.boxSelectedC;
            }
        }
    }
});

app.mount('#styling');