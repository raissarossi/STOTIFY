totalContas = 0;
totalContasC = 0;
totalContasP = 0;
totalContasN = 0;
totalContasT = 0;
valorAtual = 0;
car = []

function changeNP(){
    car = []
    var selectNP = document.getElementById('number_people').value
    var teste = document.getElementById('has_children').value = 0
    var choice = document.getElementById('choice-children')
    choice.classList.remove('show')

    var teste2 = document.getElementById('has_podcast').value = 0
    var choice = document.getElementById('choice-podcast')
    choice.classList.remove('show')
    console.log(selectNP)
    totalContas = selectNP
    totalContasN = totalContas
    var valorIndividual = 0;
    if (selectNP <= 1){
        total1 = selectNP * 3.5
        valorIndividual += 3.5
    }
    else if (selectNP == 2) {
        total1 = selectNP * 2
        valorIndividual += 2
    }
    else if(selectNP <= 6){
        total1 = selectNP * 1.4
        valorIndividual += 1.4

    }
    else{
        total1 = selectNP * 1.2
        valorIndividual += 1.2

    }
    valorAtual = valorIndividual
    inserirnaLista(selectNP, valorIndividual)
    return valorIndividual

    }
function selectChildren(){
    var selectNC = document.getElementById('select-children').value
    var selectPC = document.getElementById('select-podcast').value
    totalContasC = selectNC
    totalContasP = selectPC
    alterarLista()    
}

function alterarLista(){
    var contasCriancas = document.getElementById('select-children').value
    var contasPodcast = document.getElementById('select-podcast').value
    var contasPessoas = document.getElementById('number_people').value

    contasPessoas = contasPessoas - contasPodcast
    contasPessoas = contasPessoas - contasCriancas
    car = []

    console.log(totalContas)
    for (let index = 0; index < contasPessoas; index++) {
        car.push({'plano': 'Normal Account', 'valor': valorAtual});
    }

    for (let index = 0; index < contasCriancas; index++) {
        car.push({'plano': "Children's Account", 'valor': valorAtual + " + 0.20"});
    }

    for (let index = 0; index < contasPodcast; index++) {
        car.push({'plano': 'Normal Account + podcast', 'valor': valorAtual + " + 0.30"});
    }
    exibirLista(car)
}

function inserirnaLista(num, precoConta){
   
    for (let index = 0; index < num; index++) {
        car.push({'plano': 'Normal Account', 'valor': precoConta});
    }
    exibirLista(car)

    //limitar o número de childrens de acordo com o número de pessoas selecionado
    var childrenSelect = document.getElementById('select-children');
    childrenSelect.innerHTML = ''
    for (let index = -1; index < num; index++) {
        var opt = document.createElement('option')
        opt.value = index + 1
        opt.innerHTML = index + 1
        childrenSelect.appendChild(opt)
    }

}

function exibirLista(lista){
    var conteudo = ""
    lista.forEach(item => {
        conteudo += `<span id="cont"> 
        <div id = "account">${item.plano}</div> 
        <div id = "price">${item.valor}</div> 
        </span>`
    });
    document.getElementById('carrinho').innerHTML = 
    `<h1 class='titulo'>
    <img src="images/cart.png" alt="">${conteudo}
    </h1>`
}

function checkChildren(){
    var selectCH = document.getElementById('has_children').value
    var choice = document.getElementById('choice-children')
    if (selectCH == 1){
        choice.classList.add('show')
    }
    else{
        choice.classList.remove('show')
        document.getElementById('select-children').value = 0
        alterarLista()
    }
}

function checkPodcast(){
    var selectPC = document.getElementById('has_podcast').value
    var choice = document.getElementById('choice-podcast')
    if (selectPC == 1){
        choice.classList.add('show')

    //limitar o número de podcasts de acordo com o número de pessoas selecionado
        var numMaxPC = totalContas - totalContasC;
        var podcastSelect = document.getElementById('select-podcast');
        podcastSelect.innerHTML = ''
        for (let index = -1; index < numMaxPC; index++) {
            var opt1 = document.createElement('option')
            opt1.value = index + 1
            opt1.innerHTML = index + 1
            podcastSelect.appendChild(opt1)
        }
    }
    else{
        choice.classList.remove('show')
        document.getElementById('select-podcast').value = 0
        alterarLista()
    }
}

function selectPodcast(){
    var contasCriancas = document.getElementById('select-children').value
    var contasPodcast = document.getElementById('select-podcast').value
    totalcontasN = document.getElementById('number_people').value
    totalcontasT = 0
    console.log(contasCriancas)
    console.log(contasPodcast)
    alterarLista()
}

function closeCart(){
    var carrinho = document.getElementById('perguntas_cart')
    carrinho.classList.add('escurecer')
    finalCart()
   
}

function finalCart(){
    var codCart = ""
    var contador = 0
    car.forEach(item => {
        codCart += `<span id="${contador}">
        ${item.plano} - 
        ${item.valor} 
        <a href='javascript:void(0)' 
        onclick="removerItem(${contador})"><img src="images/x.png" alt=""></a> 
        </span>`
        contador++
    });
    console.log(codCart)
    document.getElementById('endCart').innerHTML = 
    `<h1 class='conta'>
    <img src="images/cart.png" alt="">${codCart}
    </h1>
    <hr class= "linha">`
    total()
}

function removerItem(index){
    ex = document.getElementById(index)
    console.log(index)
    car.splice(index, 1)
    if (car == ''){
        document.location.reload()
    }
    finalCart()
}

function total(){
    var valorTotal = 0
    car.forEach(item =>{
        valorTotal += item.valor
    })
    document.getElementById('total').innerHTML =
    `<h1 class='total'>Total payable: ${valorTotal}</h1>
    <div class="checkout" id="nots" onclick="alertC()">
            <a href="javascript:void">Checkout</a>
    </div>`
}

function alertC(){
    Swal.fire({
      title: 'Do you want to complete your purchase??',
      text: "After completing the purchase, the ticket will be available for payment or will be charged to the credit card.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1DAF00',
      cancelButtonColor: '#491CCE',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Finished!',
          'Your Stotify Premium vaccount has been created.',
          'success'
        )
        window.location.replace("index.html");
      }else{
        window.location.replace("indexCustom.html");
      }
    })
  }
    