// o onclick só ativa o get_data()
function get_data() {
    var xhttp = new XMLHttpRequest();

    // esta função fica escutando a requisição -> GET para o servidor
    xhttp.onreadystatechange = function () {
        // aí quando a request estiver pronta e OK (200), passo a manipular a lista que veio do server
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            // quando pegamos uma resposta -> xhttp.responseText
            // esse cara vem como string
            // precisamos converter para JSON
            let json = JSON.parse(xhttp.responseText);
            console.log(json);

            var data = new Date();

            var dia = data.getDate();
            var mes = data.getMonth() + 1; // adiciona 1 pois janeiro é representado pelo número 0
            var ano = data.getFullYear()
            

            dia = dia < 10 ? "0" + dia : dia;
            mes = mes < 10 ? "0" + mes : mes;

            var dataAtual = ano + mes + dia;
            console.log('A data de hoje é: ',dataAtual)

        

            // para cada objeto, injeta ele no html
            json.forEach(element => {
                var data_digitada = (element.data).split("/").join("");
                console.log('A data digitada é:',data_digitada)

                if (data_digitada < dataAtual) {
                    document.getElementById('historico_reuniao').innerHTML +=
                        "<div class='card'>" +
                        "<h1>" + element.titulo + "</h1>" +
                        "<span> localização: " + element.location + "</span>" +
                        "<span> data: " + element.data + "</span>" +
                        "<br>" +
                        "<span> email: " + element.email + "</span>" +
                        "</div>"
                }

                else {
                    document.getElementById('agendamento_reuniao').innerHTML +=
                        "<div class='card'>" +
                        "<h1>" + element.titulo + "</h1>" +
                        "<span> localização: " + element.location + "</span>" +
                        "<span> data: " + element.data + "</span>" +
                        "<br>" +
                        "<span> email: " + element.email + "</span>" +
                        "</div>"
                }

            });
        }
    };
    xhttp.open("GET", "http://localhost:3000/pega-reunioes", true);
    xhttp.send();

}