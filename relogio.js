/* Desenvolvimento do Código JavaScript:
    https://flexiple.com/javascript-clock/

    Etapa 1: Criar uma função chamada “showTime”.

    Etapa 2: Criar uma instância do objeto "Date".

    Etapa 3: Usando os métodos do objeto "Date", obter "hora", "minuto" e "segundos".
    
    Etapa 4: Dependendo do valor da hora, mostrar "AM" ou "PM". Lembrando que o objeto "Date" usa o formato 24-h. 
    Então, quando "hora" > 12, por exemplo, 13h, voltar para 1 e seguir a contagem.

    Etapa 5: A partir dos valores obtidos do objeto "Date", montar uma string que use o formato "HH:MM:SS".

    Etapa 6: Para mostrar em tempo real a modificação da "Etapa 5", substituímos as variáveis contidas na string usando a propriedade "innerHTML".

    Etapa 7: Para que a função seja executada (chamada) a cada segundo, dando a impressão de um relógio em tempo real, usamos o método "setInterval()"" e configuramos o intervalo para 1000ms, equivalente a 1s.
    Ref: https://www.w3schools.com/jsref/met_win_setinterval.asp

    Etapa 8: Ao final do código, devemos chamar a função para que assim ela seja executada exatamente após 1s.
    
    */


//Etapa 1: Criar função showTime
function showTime() {
    let horario = new Date;
}

//Etapa 7: Repetir a cada segundo
setInterval(showTime, 1000);