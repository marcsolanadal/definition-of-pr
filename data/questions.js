module.exports = [
  { 
    text: 'Have you double checked the story requirements?',
    command: 'ls -lah'
  },
  { 
    text: 'Does your development fulfills the story requirements?', 
    command: 'pwd'
  },
  { 
    text: 'Have you though about possible impacts of the development?', 
  },
  { 
    text: 'Is your local test in "classic" mode passing?', 
    command: 'node -v' 
  },
  { 
    text: 'Have you checked locally the diff from your branch?', 
  },
  { 
    text: 'Did you run the linter?', 
  },
  { 
    text: 'Are unit and integration tests passing?', 
  }
]
