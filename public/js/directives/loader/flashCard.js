app.directive("flashCard", function(FlashCardsFactory, ScoreFactory){
	return{
		restrict: 'E',
		templateUrl: 'templates/FlashCards.html',
		scope:{
			card: '=',
		},
		link: function(scope, element, attrs){

				scope.editCheck = false;
				

				scope.answerQuestion = function (answer, flashCard) {
					if (!flashCard.answered) {
						flashCard.answered = true;
						flashCard.answeredCorrectly = answer.correct;
						answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect ++;
							

					}
				}

				scope.hideCard = false;

				scope.editedCard;

				scope.editCardForm

				scope.mockCard;

				scope.editCard = function(carde){

					scope.editedCard = carde;

					scope.editCheck = true;


				}

				scope.submitEditCard=function(){

					FlashCardsFactory.addNewCard(scope.editedCard).then(function(data){
						scope.editCheck = false;
					})

				}

				scope.deleteCard = function(){

					FlashCardsFactory.deleteCard(scope.editedCard).then(function(){
					})
					scope.hideCard = true;
				}

				scope.cancelEdit = function(){
					scope.editCheck = false;
				}

		}
	};
});