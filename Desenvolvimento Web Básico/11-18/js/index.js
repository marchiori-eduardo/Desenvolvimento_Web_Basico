// function (){
//     var estilo = document.getElementsByName("estilo");

//     let nome;

    
    
//     for(i=0; i < estilo.length; i++) {
//         if (text[i].checked){
//             document.getElementById("result").innerHTML = "Boas vindas " + nome + text[i].value;
            
//         }
//     }
    
    
// }

function mensagem(){
    var elemento = document.getElementsByName("estilo");
    
     selectElement= document.querySelector("#nome");
     output = selectElement.value;

    for(i = 0; i < elemento.length; i++) {
    

        if(elemento[i].checked) {

            document.getElementById("result").innerHTML = "Boas vindas: "+ output + " do " + elemento[i].value;
        }
    }
}