let criancas = []

function adicionar(){
    let inNome = document.getElementById('inNome')
    let inIdade = document.getElementById('inIdade')
    let nome = inNome.value 
    let idade = Number(inIdade.value)

    //Validação 
    if(nome.trim().length == 0 || idade == 0 || isNaN(idade)){
        alert('Preencha Informações Válidas!')
        inNome.focus()
        return
    }

    //Add elementos ao Array
    criancas.push({nome: nome, idade: idade})

    //Exibir Informações da lista 
    listarTodos()

    //Limpa Campo de Formulario
    inNome.value = ""
    inIdade.value = ""
    inNome.focus()
}

function listarTodos(){

    //Verificar se a lista está vazia
    if(criancas.length == 0){
        alert('Não há Informações na Lista!')
        return
    }

    let outResultado = document.getElementById('outResultado')
    let resposta = ""
    for(let i = 0; i < criancas.length; i++ ){
        resposta += criancas[i].nome + "  -  " + criancas[i].idade + " Anos\n"
    }
    outResultado.textContent = resposta
}

function filtrarIdade(){
    
    //Verificar se o Vetor Está Vazio
    if(criancas.length == 0){
        alert('Não existe crianças nessas lista!')
        return
    }

    //Cria uma Cópia do Vetor
    let copia = criancas.slice()

    //Faz a ordenação
    copia.sort(function(a,b){ return a.idade - b.idade})
    let resumo = "" //Para Concatenar a Saida 
    let aux = copia[0].idade //Menor idade da lista 
    let nomes = [] // Vetor para add os nomes por idade

    for(let i = 0; i<copia.length; i++){
        if(copia[i].idade == aux){
            nomes.push(copia[i].nome)
        } else {
            resumo += aux + " ano(s): " + nomes.length + " Criança(s) - "
            resumo += (nomes.length / copia.length*100).toFixed(2) + "%\n"
            resumo += "("+ nomes.join(",") +")\n\n"

            aux = copia[i].idade 
            nomes = []
            nomes.push(copia[i].nome)
        }
    }

    resumo += aux + " ano(s): " + nomes.length + " Criança(s) - "
    resumo += (nomes.length / copia.length*100).toFixed(2) + "%\n"
    resumo += "("+ nomes.join(',') +")\n\n"

    document.getElementById('outResultado').textContent = resumo

    
}

