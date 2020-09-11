new Vue({
    el: "#desafio",
    data: {
        nome: "Carlos Luiz",
        idade: 29,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        funRandon: function () {
            return (Math.random())
        }
       

    }
})