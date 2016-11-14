function doneOrNot(board) {
  if(Row(board) && Column(board) && allSquare(board)){
    return "Finished!";
  }
  return "Try again!";
  
}
//This function to check conflict in one row 
function Row(board) {
  for(var i =0; i < 9; i++){
    for (var j = 1; j < 10; j++) {
      if(!board[i].includes(j))
        return false;
    }
  }
  return true;
}
//This function to check conflict in one column 
function Column(board) {
  for(var i = 0; i < 9; i++){
    var testArr = [];
    for(var j = 0; j < 9; j++){
      if(testArr.includes(board[j][i])){
        return false;
      } else {
        testArr.push(board[j][i]);
      }
    }
  }
  return true;
}
//This function to check conflict in one square 
function Square(square){
  var testArr = [];
  for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++){
      if(testArr.includes(square[i][j])){
        return false;
      } else {
        testArr.push(square[i][j]);
      }
    }
  }
  return true;
}
//This function to go throgh all squares and passed to square function
function allSquare(board){
  var allSquareArr = [];
  var oneSquare = [];
  var oneSquareRow = [];
  for (var i = 0; i < board.length; i+=3) {
    for(var j = 0; j < board.length; j+=3){
      for(var f = 0; f < 3; f++){
        for(var g = 0; g < 3; g++){
          oneSquareRow.push(board[f+i][g+j])
        }
        oneSquare.push(oneSquareRow);
        oneSquareRow = [];
      }
      allSquareArr.push(oneSquare);
      oneSquare = [];
    }
  }
  for (var i = 0; i < allSquareArr.length; i++) {
    if(!Square(allSquareArr[i])){
      return false;
    }
  }
  return true;
}