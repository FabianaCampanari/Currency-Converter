function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmRealNumerico = valorEmDolarNumerico * 5.22;
  console.log(valorEmRealNumerico);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = " Value in Brazilian Reais = " + valorEmRealNumerico;
  elementoValorConvertido.innerHTML = valorConvertido;
}