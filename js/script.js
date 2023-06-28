
ancora.onclick = function(){
    let saibaMais = document.querySelector("#termos");
    saibaMais.classList.add('active');
    saibaMais.style.transitionDuration = '0.5s';
    saibaMais.style.transitionProperty = 'opacity';
    saibaMais.style.transitionTimingFunction = 'ease';
}

// const ENVIAR = document.querySelector("#enviar");
// ENVIAR.addEventListener("click", function(e) {

//     e.preventDefault();
//     const EMAIL = document.querySelector("#floatingInput");
//     const SENHA = document.querySelector("#floatingPassword");

//     const valueEmail = EMAIL.value;
//     const valueSenha = SENHA.value;

//     console.log(valueEmail, valueSenha);

// });

const formulario = document.querySelector("#formulario");
const btn = document.querySelector("#enviar");

btn.addEventListener('click', evento => {
    evento.preventDefault();

    const formData = new FormData(formulario);
    const data = Object.fromEntries(formData);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})
