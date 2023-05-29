//array di oggetti

const {createApp} = Vue;

createApp({
    data() {
        return {
            mail: [
                
            ],

            
        }
    },
    mounted (){
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                apiMail => {
                    console.log(apiMail.data);
                    this.mail.push({ user: apiMail.data.response });
            });
        }
    },
    methods: {

    },
}).mount("#app");
