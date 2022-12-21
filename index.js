// faz a pagina nao atualizar apos enviar o formulario.
function Teste() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const email = form.querySelector('.email')
        const nascimento = form.querySelector('.nascimento')
        const senha = form.querySelector('.senha')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            nascimento: nascimento.value,
            senha: senha.value
        });
        
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}<br> email: ${email.value}<br>
        nascido em:${nascimento.value}<br> sua senha é:${senha.value}`
        };
    form.addEventListener('submit', recebeEventoForm);
}
Teste();
