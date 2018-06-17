const { color, effect, clear } = require('./styles')

const info = () => `${effect.dim}[Y/(N)]${effect.reset}\n`
const checkIcon = () => `${color.green}✔${effect.reset}\n`

const styleQuestion = (text, checked) => 
  (checked)
    ? `\n${color.white}${text}${effect.reset} ${checkIcon()}`
    : `\n${color.white}${text}${effect.reset} ${info()}`

const styleQuestions = (current, answered) => {
  const styledAnswered = answered.map(q => styleQuestion(q.text, true))
  if (typeof current === 'undefined') {
    return styledAnswered
  } else {
    return [
      ...styledAnswered,
      styleQuestion(current.text)
    ]
  }
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

const victory = `\n${color.green}${effect.dim}
ᕕ( ᐛ )ᕗ

${effect.reset}`

const defeat = `${color.red}${effect.dim}
(╯°□°）╯︵ ┻━┻

${effect.reset}`

module.exports = {
  styleQuestions,
  intro,
  victory,
  defeat
}
