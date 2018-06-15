const { color, effect, clear } = require('./styles')

const prompt = `${color.red}>${color.yellow}>${color.green}>${effect.reset} `

const questions = [
  'Have you double checked the story requirements?',
  'Does your development fulfills the story requirements?',
  'Have you though about possible impacts of the development?',
  'Is your local test in "classic" mode passing?',
  'Have you checked locally the diff from your branch?',
  'Did you run the linter?',
  'Are unit and integration tests passing?'
]

const styleQuestion = (text) =>
  `\n${color.white}${text}${effect.reset} ${effect.dim}[Y/(N)]${effect.reset}\n\n`

const generateQuestions = (questions) => {
  return questions.map((text) => {
    return {
      question: styleQuestion(text),
      answer: 'N'
    }
  })
}

/**
 * http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
 * font: slant
 */
const intro = `${clear}${color.green}${effect.dim}
    ____  _________    ______  __   ___  ___  ___ 
   / __ \\/ ____/   |  / __ \\ \\/ /  /__ \\/__ \\/__ \\
  / /_/ / __/ / /| | / / / /\\  /    / _/ / _/ / _/
 / _, _/ /___/ ___ |/ /_/ / / /    /_/  /_/  /_/  
/_/ |_/_____/_/  |_/_____/ /_/    (_)  (_)  (_)   
                                               
${effect.reset}`

const victory = `${color.green}${effect.dim}
ᕕ( ᐛ )ᕗ

${effect.reset}`

const defeat = `${color.red}${effect.dim}
(╯°□°）╯︵ ┻━┻

${effect.reset}`

module.exports = {
  prompt,
  questions: generateQuestions(questions),
  intro,
  victory,
  defeat
}
