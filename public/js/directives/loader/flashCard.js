app.directive("flashCard", function($rootScope, $http, FlashCardsFactory, ScoreFactory){
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

				scope.editCard = function(card){

					scope.editCheck = true;
					console.log(scope.editCheck)

					$http.put('/cards/'+card._id).then(function(data){

						console.log("put request complete")

					});
				}

		}
	};
});