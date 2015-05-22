var app = angular.module('flashCards', []);
console.log('app!');
app.filter("cheat" , function(){
    console.log('filter registering...');

    return function(collection){
        console.log('filter running...');
        return collection.filter(function(answer){
            return answer.correct === true;
        });
        
    };
});


