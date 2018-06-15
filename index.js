#!/usr/bin/env node

const process = require('process')
const readline = require('readline')

const { intro, questions, victory, defeat } = require('./src/texts')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = (question) => {
  rl.write(question)

  return new Promise((resolve) => {
    rl.on('line', (input) => {
      return resolve(input)
    })
  })
}

const shouldContinue = (answer) => {
  answer = answer.trim().toLowerCase()
  if (answer !== 'y') {
    rl.write(defeat)
    process.exit()
  }
}

const interrogate = (questions) => {
  const { question } = questions[0]

  ask(question).then((answer) => {
    shouldContinue(answer)

    if (questions.length !== 1) {
      interrogate([
        ...questions.slice(1, questions.length)
      ])
    } else {
      rl.write(victory)
      process.exit()
    }
  })
}

rl.write(intro)
interrogate(questions)
