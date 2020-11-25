const net = require('net')
let mensagem
//let renderer = require('./renderer.js')

const server = net.createServer()

var objetos = ["Pedra", "Papel", "Tesoura"]
var jogServer
var resultado

function Calculo(clientChoise, serverChoise){
    if (serverChoise == clientChoise)
		{return "Empate"}
	if (serverChoise == "Pedra")
		if (clientChoise == "Papel")
			return "Voce ganhou!"
		else return "Voce perdeu!"
	if (serverChoise == "Papel")
		if (clientChoise == "Tesoura")
			return "Voce ganhou!"
		else return  "Voce perdeu!"
    if (clientChoise == "Papel")
        return "Voce perdeu!"
    else return "Voce ganhou!"
};

server.on('connection', (socket) => {
	socket.setEncoding('utf8')
	socket.on('data', (data) => {
		mensagem = data
        console.log('Received from client: ' + mensagem)
        $("#jogadaUsuario").val(mensagem)
        jogServer = objetos[(Math.floor(Math.random() * 10))%3]
        console.log('Jogada: ' + jogServer)
        $("#jogadaServer").val(jogServer)
        resultado = Calculo(mensagem, jogServer)
        console.log(resultado)
        socket.write(resultado)
        
	})
})

server.listen(1337)