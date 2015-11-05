// this factory returns a synchronized array of small card information
/* We need
1)names
2)age
3)sex
4)cards
5)location
*/
app.factory("smallCardsInfo", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
   
    var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/intro/demo/");
    var smallCardsRef = new Firebase("https://hfid-los-ninos.firebaseio.com/Users/")

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(smallCardsRef);
  }
]);
