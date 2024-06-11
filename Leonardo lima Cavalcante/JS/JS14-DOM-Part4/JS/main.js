// // Busca pelos elementos do Formulário



// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'red';

const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const horario = document.querySelector('#horario');

const msg = document.querySelector('.msg');

const msg_email = document.querySelector('.msg_email');

const userList = document.querySelector('#users');

// Método addEventListener  
myForm.addEventListener('submit', onSubmit);//chamar o evento de submit e depois a função

// Função onSubmit
function onSubmit(e) {// "e" é o parametro
    e.preventDefault();//previnir que está vazio e default
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '')//nameInput e emailInput for igual a vazio ele vai adicionar o error
    
    
    {// alert('Por favor, preencha os dados.');
    msg.classList.add('error');

    msg.innerHTML = 'Por favor, preencha os dados.';

    setTimeout(() => msg.remove(), 3000);//settimeout feito para ver a mensagem por 3000 milisegundos

    } else {
    // console.log('sucess');
    const li = document.createElement('li');
    li.appendChild(
    document.createTextNode(//é quando vc quer aplicar um note texto
    `${nameInput.value} : ${emailInput.value} : ${horario.value}`
    )
    );
    userList.appendChild(li);//userList é um Id em que irá receber uma Li
    // Limpa o formulário
    nameInput.value = '';// aspas vazias significa vazio
    emailInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus(); //Coloca o foco no elemento
    }
    }//value = valor escrito
    // Validando e-mail
    emailInput.addEventListener('change', (e) => { /*é quando o usuario termina de escrever*/
    let padrao = new RegExp/*  o asterico serve para caracteriza o 2 e  baara alcontraio como texto*/(/.*@.*\./*a barra é o dominio e o ponto é oobrigatorio*/.*/i);// a barra serve para inserir um nome de usuario o ponto dividi oque é obrigatorio*/
    if (!padrao.test(emailInput.value)) {
    // alert('Por favor, insira um e-mail válido.');
    msg_email.classList.add('error');
    msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
    setTimeout(() => msg.remove(), 3000);
    btn.getBoundingClientRect()
    }else{
        msg_email.remove()
    }
    });

    /*gmail é um dominio*/