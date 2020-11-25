const net = require('net')

const client = new net.Socket()

/*document.getElementById('#connection_button').onmouseup((event) => {
    console.log("passou por aqui")
    client.connect(1337, ipDestino, () => {
        console.log('Connected to: ' + ipDestino)
    })
})*/
$('#connection_button').mouseup(() => {
    var ipDestino = $("#ipText").val()
    client.connect(1337, ipDestino, () => {
        console.log('Connected to: ' + ipDestino)
        $("#ipText").css('color', 'green')
    })
})

client.on('error', (error) => {
    console.log('Received from server: ' + error)
    $("#ipText").css('color', 'red')
})

client.on('data', (data) => {
    console.log(data)
	$('#result').text(data.toString("ASCII"))
})

$('#pedra_button').mouseup(() => {
    client.write("Pedra")
    
})
$('#papel_button').mouseup(() => {
    client.write("Papel")
    
})
$('#tesoura_button').mouseup(() => {
    client.write("Tesoura")
    
})

client.on('close', () => {
    console.log('Connection closed!')
    $('#ipText').css('color', 'red');
})	