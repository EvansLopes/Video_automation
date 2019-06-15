const readline = require('readline-sync')
function start(){

	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefixes = askAndReturnPrefix()

	function askAndReturnSearchTerm(){
		return readline.question('Digite um termo de pesquisa Wikipedia: ')

		}


	function askAndReturnPrefix(){
		const prefixes = ['Quem é', 'O que é', 'A história de']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText

		console.log(selectedPrefixText)
		
	}

	console.log(content)
}

start()

