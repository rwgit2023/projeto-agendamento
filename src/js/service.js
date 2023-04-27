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

            // const data = new Date();

            // const dia = data.getDate();
            // const mes = data.getMonth() + 1; // adiciona 1 pois janeiro é representado pelo número 0
            // const ano = data.getFullYear()
            // const hora = data.getHours();

            // console.log(data_artual = (dia + '/' + mes + '/' + ano))
            const dataAtual = new Date();
            console.log(dataAtual)
            


            // para cada objeto, injeta ele no html
            json.forEach(element => {
                // pega o valor que dentro do cara e soma com algo a mais
                // i = i + 1

                if ((element.data) > dataAtual){

                    document.getElementById('agendamento').innerHTML += 
                    "<div class='card'>" +
                        "<h1>" + element.titulo  + "</h1>" +
                        "<span> localização: " + element.location  + "</span>" +
                        "<span> data: " + element.data  + "</span>" + 
                        "<br>" + 
                        "<span> email: " + element.email  + "</span>" + 
                    "</div>"
                    
                }

                else {

                    document.getElementById('historico').innerHTML += 
                    "<div class='card'>" +
                        "<h1>" + element.titulo  + "</h1>" +
                        "<span> localização: " + element.location  + "</span>" +
                        "<span> data: " + element.data  + "</span>" + 
                        "<br>" + 
                        "<span> email: " + element.email  + "</span>" + 
                    "</div>"
                }
                

                

                
                
            });

            // document.getElementById('titulo').value = json[0].titulo;
            // document.getElementById('local').value = json[0].location;
            // document.getElementById('data').value = json[0].data;
            
        }
    };
    xhttp.open("GET", "http://localhost:3000/pega-reunioes", true);
    xhttp.send();

}