function Login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "recepção" && senha === "recepção123") {
    
        window.location.href = "Pousada_Cadastro.html"; 
    } else {
        alert("Credenciais inválidas.");
    }
}





function cadastrar(){
    var nome = document.getElementById("nome");

    if(nome.value == "" ){
        alert("Campo vazio! Preencha o nome.");
        nome.focus();
        return;
    }

    var telefone = document.getElementById("telefone");

    if(telefone.value == "" ){
        alert("Campo vazio! Preencha o telefone.");
        telefone.focus();
        return;
    }

    var idade = document.getElementById("idade");

    if(idade.value == "" ){
        alert("Campo vazio! Preencha a idade.");
        idade.focus();
        return;
    }

    if(idade.value <"21" ){
        alert("Idade invalida! Tem quer ser maior de 21.");
        idade.focus();
        return;
    }

    var hospedes = document.getElementById("hospedes");

    if(hospedes.value == "" ){
        alert("Campo vazio! Preencha a Quantidade.");
        hospedes.focus();
        return;
    }

    if(hospedes.value < "1" ){
        alert("Quantidade invalida!");
        hospedes.focus();
        return;
    }
    alert("Cliente inscrito com sucesso!");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('UF').value=(conteudo.uf);
       // document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('UF').value="...";
           // document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

