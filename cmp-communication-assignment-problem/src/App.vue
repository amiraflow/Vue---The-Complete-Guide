<template>
<div>
<active-user :username="user.name" :age="user.age"></active-user>
<user-data @set-data="setUserData"></user-data> //slušamo emit koji se zove set data i kad se on desi, pokrećemo setUserData
</div>

</template>

<script>

export default {
    data() {
        return {
            user :{
                name: 'Peter Parker',
                age: 21
            }
        };
    },
    methods : {
        setUserData(name, age){
            this.user = {
                name: name,
                age: +age
            };
        }
    }
}

</script>


<style>

html{
    font-family: sans-serif;
}
section{
    margin: 2rem auto;
    max-width: 40rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}
</style>