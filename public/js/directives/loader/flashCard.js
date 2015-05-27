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

				scope.editCard = function(card){

					scope.editedCard = card;

					scope.editCheck = true;


				}

				scope.submitEditCard=function(){
					

					// $http.put('/cards/'+scope.editedCard._id, scope.editedCard).then(function(data){


					// });

					// scope.editCheck = false;

					FlashCardsFactory.addNewCard(scope.editedCard).then(function(data){
						scope.editCheck = false;
					})

				}

				scope.deleteCard = function(){


					// $http.delete('/cards/'+scope.editedCard._id, scope.editedCard).then(function(data){


					// });

					// scope.hideCard = true;

					FlashCardsFactory.deleteCard(scope.editedCard).then(function(){
					})
					scope.hideCard = true;
				}

		}
	};
});