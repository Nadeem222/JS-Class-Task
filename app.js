function generateQuiz(){

    const textArea = document.querySelector('textarea');
    const lines = textArea.value.split('\n\n');
    // console.log(lines)

    const questions = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
    //   console.log(` line: ${line} `)
      const parts = line.split('\n');
    //   console.log(`Parts : ${parts}`)
      const question = parts[0].trim();
      const options = [];
      for (let j = 1; j < parts.length; j++) {
        options.push(parts[j].trim());
      }
      questions.push({ question, options });
    }
    let quiz = document.getElementById("quizContainer");

    quiz.innerHTML = "";

    questions.forEach((item , index) => {
       quiz.innerHTML += `<div> <h3> Question: ${index + 1} ${item.question} </h3> 
       <ul>
          ${item.options.map(option => `<li> ${option} </li>`).join('')} 
       </div>`
       item.options.forEach( option => {
        console.log(option)
       })
    })
    console.log(questions);
}
console.log(typeof(questions));