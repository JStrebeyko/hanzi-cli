import chalk from 'chalk';
import readline from 'readline';
import fs from 'fs';
import json from './dict/dict.json'

const option = process.argv.slice(2)[0]

console.log(chalk.red('你好'))

/**
 * ADDING a full card
 */

if (option === 'add') {
	const readlineI = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	let cardObj = {
		hanzi: {
			trans: {

			}
		},
		sentence: {
			trans: {
				
			}
		}
	}

	const lastCat = json && json[json.lenght-1] ? json[json.length - 1].cat : 'color'

	const hanzi = {
		char: () => {
			return new Promise((resolve) => {
				readlineI.question(chalk.red('汉字: '), (answer) => {
					cardObj['hanzi']['char'] = answer;
					resolve()
				})
			})
		},

		pron: () => {
			return new Promise((resolve) => {
				readlineI.question(chalk.blue('合音: '), (answer) => {
					cardObj['hanzi']['pron'] = answer;
					resolve()
				})
			})
		},

		transEN: () => {
			return new Promise((resolve) => {
				readlineI.question('Meaning: ', (answer) => {
					cardObj['hanzi']['trans']['en'] = answer;
					resolve()
				})
			})
		},

		transPL: () => {
			return new Promise((resolve) => {
				readlineI.question('Znaczenie: ', (answer) => {
					cardObj['hanzi']['trans']['pl'] = answer;
					resolve()
				})
			})
		}
	}

	
	const sentence = {
		char: () => {
			return new Promise((resolve) => {
				readlineI.question(chalk.red('句子: '), (answer) => {
					cardObj['sentence']['char'] = answer;
					resolve()
				})
			})
		},

		pron: () => {
			return new Promise((resolve) => {
				readlineI.question(chalk.blue('句子合音: '), (answer) => {
					cardObj['sentence']['pron'] = answer;
					resolve()
				})
			})
		},

		transEN: () => {
			return new Promise((resolve) => {
				readlineI.question('Sentence meaning: ', (answer) => {
					cardObj['sentence']['trans']['en'] = answer;
					resolve()
				})
			})
		},

		transPL: () => {
			return new Promise((resolve) => {
				readlineI.question('Znaczenie zdania: ', (answer) => {
					cardObj['sentence']['trans']['pl'] = answer;
					resolve()
				})
			})
		}
	}

	const catQuestion = () => {
		return new Promise((resolve) => {
			readlineI.question(`Category: `, (answer) => {
				cardObj['cat'] = answer || lastCat;
				resolve()
			})
		})
	}

	const ask = async () => {
		await hanzi.char();
		await hanzi.pron();
		await hanzi.transEN();
		await hanzi.transPL();
		await sentence.char();
		await sentence.pron();
		await sentence.transEN();
		await sentence.transPL();
		await catQuestion();

		readlineI.close()
		
		cardObj.id = Math.floor(Math.random() * 100000);

		console.log(cardObj)

		json.push(cardObj);

		const data = JSON.stringify(json, null, 2);
		fs.writeFile('dict/dict.json', data, function(err) {
			if (err) console.log(err)
			console.log(chalk.bgGreenBright('dict updated!'));
		});
	}

	ask();
}