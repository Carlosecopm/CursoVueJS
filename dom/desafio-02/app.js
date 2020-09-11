new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta Desafio")
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})