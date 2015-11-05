// this factory returns a synchronized array of small card information
/* We need
1)names
2)age
3)sex
4)cards
5)location
*/
angular.module('single-page-app')
app.factory("smallCardsInfo", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
   
    var smallCardsRef = new Firebase("https://hfid-los-ninos.firebaseio.com/Users/")
    console.log("firebase ref is " + smallCardsRef);
    // this uses AngularFire to create the synchronized array
    
    return $firebaseArray(smallCardsRef);
  }
]);
