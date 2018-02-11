$(document).ready(function(){

    var allQuestions = [
                    {question: "Who is Prime Minister of the United Kingdom?",
                     choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
                     correctAnswer: 0},

                    {question: "Who is President of Russia?",
                     choices: ["Putin", "Obama", "Mr White", "Tony Blair"],
                     correctAnswer: 0},

                    {question: "Who is President of United States?",
                     choices: ["Monkey", "Obama", "Putin", "Trump is the Stump"],
                     correctAnswer: 3}
                   ];

    var i = 0;
    var score = 0;

    $('.btn-add').click(function () {
        var currentQuestion = allQuestions[i].question;
        $('.question h1').text(currentQuestion);

        var firstVar = allQuestions[i].choices[0];
        var secondVar = allQuestions[i].choices[1];
        var thirdVar = allQuestions[i].choices[2];
        var fourthVar = allQuestions[i].choices[3];

        $('#label1').text(firstVar);
        $('#label2').text(secondVar);
        $('#label3').text(thirdVar);
        $('#label4').text(fourthVar);

        for (var j = 0; j <= 4; j++) {
            $('#var'+ (j + 1)).val(j.toString());
        };

        $('.result-page').hide();
        $('.main').show()

    });

    $('.btn-check').click(function(){
        var correctAnswer = allQuestions[i].correctAnswer;
        var userAnswer = $('input:checked').val();

        if (correctAnswer == userAnswer) {
            $('.greet h1').text('Well Done Brah!');
            score += 10;
        } else {
            $('.greet h1').text('Your failed miserably');
        }

        $('.resnum').text(score);

        i++;

        if (!allQuestions[i]) {
            $('.btn-add').hide();
            $('<p>YOUR ARE DONE</p>').appendTo('.greet');
        }

        $('.main').hide();
        $('.result-page').show()
    });
});
