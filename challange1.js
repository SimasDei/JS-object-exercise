(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      const answer = this.answers[i];
      console.log(`${i} : ${answer}`);
    }
  };

  Question.prototype.checkAnswer = function(answer) {
    if (answer === this.correct) {
      console.log('You are the Winrar!');
    } else {
      console.log('Close the page and leave forever.');
    }
  };

  let q1 = new Question('What is Hip?', ['Funk', 'Everything Else'], 0);
  let q2 = new Question(
    'Kentucky Fried ... ?',
    ['moses roses', 'shishkebab', 'shame'],
    2
  );
  let q3 = new Question(
    'Who are you and how did you get here?',
    [
      "I'm a Locksmith, and I'm a Locksmith.",
      'None of your business.',
      'We are outside in a public park.'
    ],
    0
  );

  let questions = [q1, q2, q3];

  let n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  let answer = +prompt('Select an Answer');

  questions[n].checkAnswer(answer);
})();
