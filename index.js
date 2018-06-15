#!/usr/bin/env node

const process = require('process')
const readline = require('readline')

const questions = require('./data/questions')
const { intro, victory, defeat, styleQuestions } = require('./src/texts')
const { clear } = require('./src/styles')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function askConfirmation() {
  return new Promise((resolve) => {
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit();
      } else {
        return resolve(str)
      }
    });
  })
}

function shouldContinue(answer) {
  answer = answer.trim().toLowerCase()
  if (answer !== 'y') {
    rl.write(clear)
    rl.write(defeat)
    process.exit()
  }
}

function render(
  remaining = [], 
  answered = []
) {
  rl.write(clear)
  rl.write(intro)
  styleQuestions(remaining[0], answered).map(text => rl.write(text))

  if (remaining.length === 0) {
    rl.write(victory)
  }
}

function interrogate(
  remaining, 
  answered = []
) {
  render(remaining, answered)

  askConfirmation().then((answer) => {
    shouldContinue(answer)

    if (remaining.length !== 1) {
      interrogate(
        [ ...remaining.slice(1, remaining.length) ],
        [ ...answered, remaining[0] ]
      )
    } else {
      render(undefined, [ ...answered, ...remaining ])
      process.exit()
    }
  })
}

interrogate(questions)
