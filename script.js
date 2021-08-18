function tratarDados() {
    let nome = document.getElementById('nomeInput').value;
    let cpf = document.getElementById('cpfInput').value;;
    let dataNascimento = document.getElementById('idadeInput').value;
    let email = document.getElementById('emailInput').value;
    let nickname = document.getElementById('usernameInput').value;
    let senha = document.getElementById('senhaInput').value;
    let senhaConfirma = document.getElementById('confirmaSenhaInput').value;

    let validacao = 0;

    //Tratamento Nome
    if (nome.trim() == '' || undefined) {
        $('#nomeInput').addClass('input-padrao-danger');

        validacao = 1;
    }

    //Tratamento do CPF
    if (cpf.trim() == '' || undefined) {
        $('#cpfInput').addClass('input-padrao-danger');

        validacao = 1;
    } else if (regCPF.test(cpf) == false) {
        $('#cpfInput').addClass('input-padrao-danger');
        $('#cpfLabel').text('CPF:  (CPF inválido)');
        validacao = 1;
    } else {
        $('#cpfLabel').text('CPF: ');
    };

    //Tratamento Data de Nascimento
    if (dataNascimento.trim() == '' || undefined) {
        $('#idadeInput').addClass('input-padrao-danger');

        validacao = 1;
    }
    
    //Tratamneto EMAIL
    if (email.trim() == '' || undefined) {
        $('#emailInput').addClass('input-padrao-danger');
        validacao = 1;
    }
    else if (regEmail.test(email) == false) {
        $('#emailInput').addClass('input-padrao-danger');
        $('#emailLabel').text('E-Mail: (E-Mail inválido)')
        validacao = 1;
    } 
    else {
        $('#emailLabel').text('E-Mail:');

    };
    
    //Tratamento USERNAME
    if (nickname.trim() == '' || undefined) {
        $('#usernameInput').addClass('input-padrao-danger');
        validacao = 1;
    } else if (/\s/.test(nickname) == true){
        $('#usernameLabel').text('Username: (Não pode conter espaços em branco)');
    } else {
        $('#usernameLabel').text('Username:');
    };


    
    //Tratamento SENHA e SENHA CONFIRMADA
    if (senha.trim() == '' || undefined) {
        $('#senhaInput').addClass('input-padrao-danger');
        $('#confirmaSenhaInput').addClass('input-padrao-danger');
        validacao = 1;
    };
    if (senhaConfirma.trim() == '' || undefined) {
        $('#senhaInput').addClass('input-padrao-danger');
        $('#confirmaSenhaInput').addClass('input-padrao-danger');
        validacao = 1;
    };

    if (senha != senhaConfirma) {
        $('#senhaInput').addClass('input-padrao-danger');
        $('#senhaInput').val('');
        $('#confirmaSenhaInput').addClass('input-padrao-danger');
        $('#confirmaSenhaInput').val('');
        $('#senhaLabel').text('Digite uma senha: (Senhas Diferentes)');
        $('#senhaConfirmaLabel').text('Confirme a senha: (Senhas Diferentes)');
        validacao = 1;
    } else {
        $('#senhaLabel').text('Digite uma senha: ');
        $('#senhaConfirmaLabel').text('Confirme a senha: ');
    };

    //Criaçâo do OBJETO pessoa com dados do USUARIO cadastrado
    let pessoa = {};

    if (validacao == 0) {
        pessoa.nome = nome;
        pessoa.cpf = cpf;
        pessoa.dataDeNascimento = dataNascimento;
        pessoa.email = email;
        pessoa.nickname = nickname;
        pessoa.senha = senha;


    } else {
        $('#alertas').addClass('block');
        $('#alertaPreenchimento').addClass('block');
        throw Error('Algo deu errado em "VALIDACAO');
    };
    return pessoa;

};

function limparForm() {
    document.getElementById('nomeInput').value = '';
    document.getElementById('cpfInput').value = '';
    document.getElementById('idadeInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('usernameInput').value = '';
    document.getElementById('senhaInput').value = '';
    document.getElementById('confirmaSenhaInput').value = '';

};

function limparFormCSS() {
    $('#nomeInput').removeClass('input-padrao-danger');
    $('#alertas').removeClass('block');
    $('#alertaPreenchimento').removeClass('block');
    $('#cpfInput').removeClass('input-padrao-danger');
    $('#idadeInput').removeClass('input-padrao-danger');
    $('#emailInput').removeClass('input-padrao-danger');
    $('#usernameInput').removeClass('input-padrao-danger');
    $('#senhaInput').removeClass('input-padrao-danger');
    $('#confirmaSenhaInput').removeClass('input-padrao-danger');
    $('#emailLabel').text('E-Mail:');
    $('#senhaLabel').text('Digite uma senha: ');
    $('#senhaConfirmaLabel').text('Confirme a senha: ');
    $('#cpfLabel').text('CPF: ');
};


function salvarDados() {
    limparFormCSS()
    let pessoa = tratarDados();
    console.log(pessoa);
    limparForm();

};

function limparDados() {
    limparForm();
    limparFormCSS();

};




