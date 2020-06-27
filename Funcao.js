function nData(){
    data = new Date()
    dia = data.getDate()
    mes = data.getMonth() + 1
    ano = data.getFullYear()
    if (dia < 10){
        dia = "0" + dia
    }
    if (mes < 10){
        mes = "0" + mes
    }
    document.getElementById("n_data").innerHTML = dia + " / " + mes + " / " + ano;
}
function correcao1(){
    var questao1 = document.getElementById("resposta1").value
    var questao2 = document.getElementById("resposta2").value
    var questao3 = document.getElementById("resposta3").value
    resposta1 = "60"
    resposta2 = "1,48"
    resposta3 = "515"

    let a=document.createElement('a');
    a.target='_blank';
    a.href="Simulado2.html";


    acertos = 0
    if (questao1 == resposta1)
    {
        acertos = acertos + 1
    }
    if (questao2 == resposta2)
    {
        acertos = acertos + 1
    }
    if (questao3 == resposta3)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if(window.confirm("Aprovado para o proximo simulado!"))
        {
            a.click();
        }
    }else{
        alert("Não foi desta vez,tente novamente!")
    }
}


function correcao2(){
    var questao4 = document.getElementById("resposta4").value
    var questao5 = document.getElementById("resposta5").value
    var questao6 = document.getElementById("resposta6").value
    resposta4 = "14,3"
    resposta5 = "71"
    resposta6 = "632"

    let a=document.createElement('a');
    a.target='_blank';
    a.href="Simulado3.html";


    acertos = 0
    if (questao4 == resposta4)
    {
        acertos = acertos + 1
    }
    if (questao5 == resposta5)
    {
        acertos = acertos + 1
    }
    if (questao6 == resposta6)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if(window.confirm("Aprovado para o proximo simulado!"))
        {
            a.click();
        }
    }else{
        alert("Não foi desta vez,tente novamente!")
    }
}

function correcao3(){
    var questao7 = document.getElementById("resposta7").value
    var questao8 = document.getElementById("resposta8").value
    var questao9 = document.getElementById("resposta9").value
    resposta7 = "1076"
    resposta8 = "79,5"
    resposta9 = "48000"

    let a=document.createElement('a');
    a.target='_blank';

    acertos = 0
    if (questao7 == resposta7)
    {
        acertos = acertos + 1
    }
    if (questao8 == resposta8)
    {
        acertos = acertos + 1
    }
    if (questao9 == resposta9)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if(window.confirm("Parabéns você passou em todos os simulados!"))
        {
            a.click();
        }
    }else{
        alert("Não foi desta vez,tente novamente!")
    }
}


function bv(){
    var Nome=prompt("Digite Seu Nome");
    alert("Olá  " + Nome + ", seja bem vindo")
}


function media(){
	alert("Este site se consiste em 3 etapas diferentes,uma básica, uma intermediária e uma difícil.Para prosseguir para proxima etapa você deve atinger a pontuação mínima,sendo ela dois pontos. ");
}