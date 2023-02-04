// Lista com todos os doadores desde a criação do grupo.
var donors = ["Rodrigues RCD [VIP]", "ITALO [VIP]", "cesar martins [VIP]", "Hunter 2-1 [VIP]", "Rodrigo Mobile [VIP]", "Anderson Nascimento [VIP]", "Preta [VIP]", "Gabriel Sene [VIP]", "Bruno Fontinelle [VIP]", "João Matheus [VIP]", "Fernando P. [VIP]", "Wdl [VIP]", "Fernando Belchior [VIP]", "Daniel Monteiro [VIP]", "Phelipe [VIP]", "Beto [VIP]", "Adm Petre [VIP]", "Jack Back [VIP]", "Jen lisa [VIP]", "Melissa [VIP]", "Samuel Portela [VIP]", "AC DC [VIP]", "Pedro Henrique [VIP]", "🤩 Ff [VIP]", "Ricardo [VIP]", "52071 Gustavo [VIP]", "Sadakinha Feliz [VIP]", "Ricardo jose [VIP]", "Marrelli [VIP]", "Matheus Campos [VIP]", "🇧🇷 𝗪𝗜𝗟𝗟 . ᡃ⃝ᡃ⃝ᡃ⃝...ᡃ⃝ᡃ⃝ᡃ⃝ᡃ [VIP]", "Guilherme Benedet [VIP]", "Andre [VIP]", "Zenao [VIP]", "Ana Paula [VIP]", "João Soares [VIP]", "Gabriel Ramos [VIP]", "Dr Junior [VIP]", "Muzze Bitt [VIP]", "Werbeth Gomes [VIP]", "ʬ Vinny ᱬ⎉🦇 [VIP]", ". [VIP]", "Carlão [VIP]", "Quias Jesus [VIP]", "rumargaS [VIP]", "Zeroth [VIP]", "Paulo Degan [VIP]", "Fabio Rafael Cortez [VIP]", "S Rodrigues [VIP]", "Arthur Sooma [VIP]", "DARLAN [VIP]", "Marco Castilho [VIP]", "ÁTILA [VIP]", "Diogo [VIP]", "Igor Henrique [VIP]", "Joao Vitor [VIP]", "Jcmiranda2111 Miranda [VIP]", "Wes Pereira [VIP]", "Thiago Costa [VIP]", "Suellyntom Resende [VIP]", "Mr. Brooks [VIP]", "Bernardo Dias [VIP]", "felipe felix [VIP]", "Orlando Fermino [VIP]", "André Ribeiro Ortega [VIP]", "Victor Soares [VIP]", "AlyssonGbs [VIP]", "Takuy4 [VIP]", "Ale [VIP]", "Jon [VIP]", "Felipe Camões [VIP]", "Melissa Veiga [VIP]", "Gabriel [VIP]", "Walter White [VIP]", "Gargamel Esmorfe [VIP]", "Marcelo Bandeira [VIP]", "ISRAEL LEITE [VIP]", "@Suares [VIP]", "Helio Lazzarini [VIP]", "Fernando [VIP]", "Italo Luna [VIP]", "Ibelarus [VIP]", "Vicente Coêlho da Silva [VIP]", "Rodrigo Maciel [VIP]", "… [VIP]", "Vitor Chaves [VIP]", "GMF [VIP]", "Jihhanha🐱[VIP]", "Felipe bit [VIP]", "Jessica Soares [VIP]", "Alexandre 2 [VIP]", "MH [VIP]", "Jhon Kazama [VIP]", "Leonardo Pimenta [VIP]", "CESAR [VIP]", "Juliano tz [VIP]", "Antonio pedro [VIP]", "Mauro🇧🇷🇪🇪 [VIP]", "Mauricio Miyabe [VIP]", "Kanin [VIP]", "Alexandre [VIP]", "Leonardo [VIP]", "Marcos Nunes [VIP]", "Tl L [VIP]", "Ranieri [VIP]", "Alessandro Abreu [VIP]", "Luiz Felipe [VIP]", "Julio Cesar [VIP]", "Adri@no [VIP]", "Luan Feitosa [VIP]", "Fernando Barbosa [VIP]", "Heuber Avelar [VIP]", "Everton Ferreira [VIP]", "Victor [VIP]", "Mayco Rolbuche [VIP]", "84612 [VIP]", "Alessandro Dos Santos [VIP]", "Rafael Araujo [VIP]", "Kaw [VIP]", "Amsterdan [VIP]", "Gustavo Henrique [VIP]", "Alisson [VIP]", "Cecília Lima [VIP]", "Pedro Bruno [VIP]", "Gabriel Chaves [VIP]", "Jorge Alves [VIP]", "Carlos Eduardo [VIP]", "Wemerson Sousa [VIP]", "Leonardo Domingues [VIP]", "Leandro Bolaño [VIP]", "Cristopher Gulliver [VIP]", "Thiago Dourado [VIP]", "John Max R.M. [VIP]", "Silas VL [VIP]", "Everton [VIP]", "Luva Pedrero [VIP]", "Adão Sonaque [VIP]", "Raul Leal [VIP]", "Gabriel Morocoima [VIP]", "Pablo Dias [VIP]", "Jairo Rodrigues [VIP]", "Juliano Chagas [VIP]", "OLIVEIRA🇧🇷 [VIP]", "Thiago Lima [VIP]", "Isael De Andrade [VIP]", "Marcos Alessandre [VIP]", "Below [VIP]", "R [VIP]", "Alex [VIP]", ".Leandro [VIP]", "João [VIP]", "joilson [VIP]", "Jeremias Silva [VIP]", "Jef [VIP]", "Marcos Nunes Alves [VIP]", "Zesielson Ribeiro [VIP]", "Murilo Bonasina [VIP]", "Bel [VIP]", "Luis Guilherme [VIP]", "Jorge [VIP]", "Sandes [VIP]", "luck [VIP]", "Raphael [VIP]", "Aps_ [VIP]", "Denise Bittencourt [VIP]", "Wesley Silva [VIP]", "Eduardo [VIP]", "Pedro Oliveira [VIP]", "ACM [VIP]", "Thiago Melo [VIP]", "Viny B ™ [VIP]", "Hudson Gregory [VIP]", "MarshMallow Dub [VIP]", "Edilvo De Sousa [VIP]", "Well Cassio [VIP]", "Igor Sobieski Lazarev [VIP]", "Daniel Guerrenho [VIP]", "Miquéias [VIP]"];

// Lista com todos os doadores que sairam do grupo.
var donors_who_left = ["Anne Marinho [VIP]", "Elias Lacerda [VIP]", "Everton 2 [VIP]", "Filemon Junior [VIP]", "J [VIP]", "Jefferson Costa [VIP]", "K [VIP]", "Leandro Lira [VIP]", "leo [VIP]", "Roberto Oliveira [VIP]"];

// Função para remover todos os doadores que sairam do grupo.
// Referência: https://stackoverflow.com/questions/19957348/remove-all-elements-contained-in-another-array
let participants = donors.filter((name) => !donors_who_left.some((name_left) => name === name_left));

// Função para sortear aleatoriamente um resultado.
// Referência: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
Array.prototype.raffle = function() {
	return this[Math.floor(Math.random() * this.length)];
}

// Função para exibir os resultados na página.
// Referência: https://stackoverflow.com/a/66017925/9537649
randomize = (time) => {
	var class_results = document.querySelectorAll(".results > div");
	var intervalId = setInterval(function() {
	    class_results[0].innerHTML = participants.raffle();
	}, 10);
	setTimeout(function(){
	    clearInterval(intervalId);
	}, time);
}

// Função para exibir o número de participantes no sorteio.
var participants_number = document.querySelector(".number");
participants_number.innerHTML = Object.keys(participants).length;

// Função que inicia o sorteio quando o botão e clicado.
// Referência: https://stackoverflow.com/a/70967292/9537649
var button_raffle = document.getElementsByClassName("start-raffle")[0];
button_raffle.addEventListener("click", (event, time = 5000) => {
    randomize(time);
}, false);