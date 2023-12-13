var nome = prompt("Digite o seu nome:");
var valorEmReal = prompt("Digite o valor em reais:");

var cotacaoDoBitcoin = 211631.83;  
var cotacaoDoReal = 1;         

valorEmReal = parseFloat(valorEmReal);

if (isNaN(valorEmReal)) {
    alert("Por favor, insira um valor numérico válido.");
} else {
    var valorEmBitcoin = valorEmReal / (cotacaoDoBitcoin * cotacaoDoReal);
    valorEmBitcoin = valorEmBitcoin.toFixed(8); 

    var mensagem = "Olá " + nome + ", o valor em Bitcoin é: BTC " + valorEmBitcoin;

    alert(mensagem);
}

