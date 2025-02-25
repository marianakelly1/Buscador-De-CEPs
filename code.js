async function getCepInfo(){  /* async --- função assincrona(esperando uma resposta) */
    var cep = document.querySelector("#cep")  /*Pegando referencia da tag input com id "cep"*/

   if(cep.value.length != 8){
    alert("CEP Inválido!")
    return;
   }
    /*await--- espera a função carregar completamente para seguir o codigo */
   var reply = await fetch(`http://viacep.com.br/ws/${cep.value}/json/`); /* Funçao JS que cria requisição http para uma api --- usando templat e passando a variavel cep.value */
   var data = await reply.json(); /*Extraindo da resposta recebida o json desejado */

   if(data.erro){
    alert("CEP Not Found!")
    return;
   }

   console.log(data.logradouro);
   console.log(data.bairro);
   console.log(data.localidade);
   console.log(data.estado);
   console.log(data.ddd);

   var cep = document.querySelector("#rua").innerHTML = data.logradouro;
   var cep = document.querySelector("#bairro").innerHTML = data.bairro;
   var cep = document.querySelector("#cidade").innerHTML = data.localidade;
   var cep = document.querySelector("#estado").innerHTML = data.estado;

}


function clearCep(){
    document.querySelector("#cep").value = "";
    //innerHTML --- limpando o corpo (parte da pesquisa)
    document.querySelector("#rua").innerHTML = "";
    document.querySelector("#bairro").innerHTML = "";
    document.querySelector("#cidade").innerHTML = "";
    document.querySelector("#estado").innerHTML = "";
}

