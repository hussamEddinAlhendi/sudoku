angular.module('sudoku', [
])
.controller('sudokuCtrl', function ($scope, twitter) {
  $scope.board = [];
  for (var i = 0; i < 9; i++) {
    $scope.board.push([0,0,0,0,0,0,0,0,0]);
  }

// valid solution for testing
//   $scope.board = [
//    [5, 3, 4, 6, 7, 8, 9, 1, 2],
//    [6, 7, 2, 1, 9, 5, 3, 4, 8],
//    [1, 9, 8, 3, 4, 2, 5, 6, 7],
//    [8, 5, 9, 7, 6, 1, 4, 2, 3],
//    [4, 2, 6, 8, 5, 3, 7, 9, 1],
//    [7, 1, 3, 9, 2, 4, 8, 5, 6],
//    [9, 6, 1, 5, 3, 7, 2, 8, 4],
//    [2, 8, 7, 4, 1, 9, 6, 3, 5],
//    [3, 4, 5, 2, 8, 6, 1, 7, 9]
//  ]
  $scope.change = function (row, col) {
    if($scope.board[row][col] < 9){
      $scope.board[row][col]++;
    } else {
      $scope.board[row][col] = 1;
    }
  }
  $scope.finish = function () {
    var result = doneOrNot($scope.board);
    alert(result);
    if(result === "Finished!"){
      twitter.postOnTwitter();
    }
  }

})
.factory('twitter', function ($http) {
  
  // a fuction for getting all branches
  var postOnTwitter = function () {
    return $http({
      method: 'POST',
      url: '/api/finish'
    })
    .then(function (res) {
      return res.data;
    })
  };

  return {
    postOnTwitter: postOnTwitter
  }
})
