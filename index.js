const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (string){
    const wordArray = string.split(' ')
    let newArray = wordArray.map(function (word){
      let text = word.charAt(0).toUpperCase() 
      let letter = word.substring(1)
      return text + letter
    })
    let variable = newArray.join(' ')
    return variable
  })
}

