//Declarando o objeto dentro do Array
let family = {
    incomes: [2200, 1200,],
    expenses: [2000, 150, 120, 130, 100, 45, 36.75, 30]
}

//Função para calcular as despesas e receitas do objeto acima
function sum(array) {
    let total = 0;
    for(let value of array)
        total += value

    return total
}

//Cálculo final e mostrando qual saldo do usuário.
function calculateBalance () {
    const calculateIncomes  = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOK = total >= 0

    let balanceText = "NEGATIVO"

    if (itsOK) {
        balanceText = "POSITIVO"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()