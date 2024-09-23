function verificar(){
    let num = document.getElementById('number').value
    let number = Number(num)

    if(number % 2 == 0){
        alert(`O número ${number} é par!`)
    }else{
        alert(`O número ${number} é ímpar!`)
    }
}