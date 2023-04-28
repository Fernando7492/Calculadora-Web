input = document.querySelector(".view");

adicionarValor = (x) => {
    input.value += `${x}`;
}

apagar = () => {
    input.value = input.value.slice(0, -1);
}

calcular = () => {
    input.value = eval(input.value);
}

limpar = () => {
    input.value = ''
}

mudarSinal = () => {
    if(input.value[0] == '-'){
        input.value = input.value.slice(1);
    }
    else{
        input.value = `-${input.value}`
    }
}