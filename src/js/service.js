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
            console.log('A data de hoje é: ', dataAtual)



            // para cada objeto, injeta ele no html
            json.forEach(element => {
                if (element != "{}") {
                    let new_json = JSON.parse(element)
                    var data_digitada = (new_json.data).split("/").join("");
                    console.log('A data digitada é:', data_digitada)

                    if (data_digitada < dataAtual) {
                        document.getElementById('historico_reuniao').innerHTML +=
                            "<div class='card'>" +
                            "<h1>" + new_json.titulo + "</h1>" +
                            "<span> localização: " + new_json.local + "</span>" +
                            "<span> data: " + new_json.data + "</span>" +
                            "<br>" +
                            "<span> hora: " + new_json.hora + "</span>" +
                            "<br>" +
                            "<span> email: " + new_json.email + "</span>" +
                            "</div>"
                    }

                    else {
                        document.getElementById('agendamento_reuniao').innerHTML +=
                            "<div class='card'>" +
                            "<h1>" + new_json.titulo + "</h1>" +
                            "<span> localização: " + new_json.local + "</span>" +
                            "<span> data: " + new_json.data + "</span>" +
                            "<br>" +
                            "<span> hora: " + new_json.hora + "</span>" +
                            "<br>" +
                            "<span> email: " + new_json.email + "</span>" +
                            "</div>"
                    }
                }


            });
        }
    };



    // Pede a requisição e trata as informações acima
    xhttp.open("GET", "http://localhost:3000/pega-reunioes", true);
    xhttp.send();

}

// ----------------------------------------------------------------------------------------------

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nova_reuniao = handleFormData(e.target);
    insere_reuniao(nova_reuniao)
});

function handleFormData(form) {
    var formData = new FormData(form);
    /*
    formData = [
        ['titulo': 'titulo da reunião],
        ['local': 'local da reunião']
    ]

    */

    // ...or output as an object
    console.log(Object.fromEntries(formData));
    // pegar o formData -> converte pra Object -> da conversão, converte pra string JSON e retorna
    return JSON.stringify(Object.fromEntries(formData));
}


function insere_reuniao(reuniao) {

    var xhttp = new XMLHttpRequest();

    // Trata as informações e envia a informação ja tratada
    xhttp.open("POST", "http://localhost:3000/insere-reuniao", true);

    //envia uma notificação dizendo que vou enviar um formulátio para o servidor
    xhttp.setRequestHeader('Content-type', 'application/json');

    // esta função fica escutando a requisição -> POST para o servidor
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 201) {

            window.location.href = './Historico.html'; // muda de página

        }

    }
    console.log(reuniao);
    xhttp.send(reuniao);
}