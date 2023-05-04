const messageComponents = {
    wordOne: ['best', 'worst', 'easiest', 'hardest'],
    wordTwo: ['learn', 'teach', 'perform', 'master'],
    wordThree: ['JavaScript', 'woodworking', 'instructional design', 'Italian'],
    wordFour: ['focus on errors', 'never give up', 'try and try again', 'ask for help']
}

const selectWords = (obj) => {
    const selectedWords = [];
    selectedWords.push(messageComponents.wordOne[Math.floor(Math.random() * 4)]);
    selectedWords.push(messageComponents.wordTwo[Math.floor(Math.random() * 4)]);
    selectedWords.push(messageComponents.wordThree[Math.floor(Math.random() * 4)]);
    selectedWords.push(messageComponents.wordFour[Math.floor(Math.random() * 4)]);
    console.log(`The ${selectedWords[0]} way to ${selectedWords[1]} ${selectedWords[2]} is to ${selectedWords[3]}.`);
}

selectWords(messageComponents);