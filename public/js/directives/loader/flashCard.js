app.directive("flashCard", function(FlashCardsFactory, ScoreFactory){
	return{
		restrict: 'E',
		templateUrl: 'templates/FlashCards.html',
		scope:{
			card: '=',
		},
		link: function(scope, element, attrs){


				scope.answerQuestion = function (answer, flashCard) {
					if (!flashCard.answered) {
						flashCard.answered = true;
						flashCard.answeredCorrectly = answer.correct;
						answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect ++;
							

					}
				}

		}
	};
});