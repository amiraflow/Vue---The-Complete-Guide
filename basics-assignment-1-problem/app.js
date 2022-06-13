const app = Vue.createApp({
    data() {
        return {
            myName: 'Amira',
            myAge: 24,
            imageSource: 'https://static.zerochan.net/Green.Goblin.full.3585750.jpg',
        }
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    }
});

app.mount('#assignment');