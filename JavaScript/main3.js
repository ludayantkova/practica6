const app = new Vue({
    el: '#quizForm',
    data: {
        question: 'Who runs?',
        answers: ['Fish', 'Dog', 'Bird'],
        selectedAnswer: null
    },
    methods: {
        checkAnswer(answer) {
            this.selectedAnswer = answer;
        },
        submitQuiz() {
            if (this.selectedAnswer) {
                if (this.selectedAnswer === 'Dog') {
                    alert('The answer is correct!');
                } else {
                    alert('The answer is wrong!');
                }
            } else {
                alert('Please choose your answer!');
            }
        }
    }
});
