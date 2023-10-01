const valor = document.getElementById('textoInput');
const botao = document.getElementById('botãoBusca');
const area = document.getElementById('area');
const rua = document.getElementById('rua');
const Bairro = document.getElementById('Bairro');
const CEP = document.getElementById('CEP');
const Localidade = document.getElementById('Localidade');
const UF = document.getElementById('UF');
const botaoVoltar = document.getElementById('botaoVoltar');
const textoValido = document.getElementById('textoValido');





const buscaInformacao = async (city) => {

  const apiWeatherURL = `https://viacep.com.br/ws/${city}/json/`;

  const respota = await fetch(apiWeatherURL);

  const data = await respota.json();

  console.log(data);

  return data;

}


const colocaInformacao = async (city) => {

  const data = await buscaInformacao(city);

  rua.innerText = data.logradouro;
  Bairro.innerText = data.bairro;
  CEP.innerText = data.cep;
  Localidade.innerText = data.localidade;
  UF.innerText = data.uf;


};



botao.addEventListener('click', () => {

  rua.innerText = 'Não Encontrado';
  Bairro.innerText = 'Não Encontrado';
  CEP.innerText = 'Não Encontrado';
  Localidade.innerText = 'Não Encontrado';
  UF.innerText = 'Não Encontrado';

  const city = valor.value;

  if (city == "") {

    textoValido.innerText = 'Digite um CEP Valido';

  } else {

    textoValido.innerText = '';

    colocaInformacao(city);

    valor.classList.remove('classtextoParecer');
    valor.classList.add('classtextoDesaparecer');
    botao.classList.remove('botaoAperecer');
    botao.classList.add('botaoDesaparecer');
    area.classList.remove('hide');

  };

});


botaoVoltar.addEventListener('click', () => {

  area.classList.add('hide');

});

