//API PARTE 02

let cep = document.querySelector('#cep');
let message = document.querySelector('#erroMessage');
let rua = document.querySelector('#rua')
let complemento = document.querySelector("#complemento")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#uf") 


cep, addEventListener('focusout', async() => {
    //sabemos que a API pode retornar sucesso ou erro

    try/* se for sucesso*/{
      const onlyNumbers = /^[0-9]+$/;//regex
      const cepValid = /^[0-9]{8}$/;//regex

      if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value))
      /*valor que esta sendo digitado no campo cep é apenas numeros e se é valido*/
      {
         console.log("CEP invalido")
         throw{cep_error: "Cep Invalido"}
      }
      let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

      console.log(retornoAPI)
      if(!retornoAPI.ok){
        throw await retornoAPI.json();/*jogue e espere ao mesmo tempo*/
      }
      let response = await retornoAPI.json();
      console.log(response);
      cep.value = response.cep;
      rua.value = response.logradouro;
      complemento.value = response.complemento;
      bairro.value = response.bairro;
      cidade.value = response.localidade;
      estado.value = response.uf;
    }
    catch(error)/* se for erro*/{
        if(error?.cep_error){
            message.textContent = error.cep_error;
            setTimeout(() => {
                message.textContent = '';
            }, 5000);
        }
        console.log(error);
    }

})