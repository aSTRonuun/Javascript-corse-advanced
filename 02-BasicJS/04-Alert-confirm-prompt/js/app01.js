/**
    alert reutrn undefind
    confirm return boolean
    prompt return string | null 
*/

alert("Site do Vitor");
const confirma = confirm("Deseja continuar?");

if(confirma){
    const nome = prompt("Digite seu nome");
    if(nome === null){
        alert("Bem vindo, visitante!");
    }else{
        alert(`Bem vindo ${nome}`);
    }
    
}else{
    alert("Você cancelou");
}