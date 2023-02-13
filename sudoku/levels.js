// Define a variable named mat which will contain the sudoku game boards.

const mat = [
  [
    [3,8,7,4,9,1,6,2,5],
    [2,4,1,5,6,8,3,7,9],
    [5,6,9,3,2,7,4,1,8],
    [7,5,8,6,1,9,2,3,4],
    [1,2,3,7,8,4,5,9,6],
    [4,9,6,2,5,3,1,8,7],
    [9,3,4,1,7,6,8,5,2],
    [6,7,5,8,3,2,9,4,1],
    [8,1,2,9,4,5,7,6,3],
  ],
  [
    [9,2,1,4,8,5,3,6,7],
    [3,4,7,9,2,6,1,8,5],
    [5,8,6,7,3,1,2,9,4],
    [8,6,3,5,7,2,4,1,9],
    [7,1,9,6,4,8,5,2,3],
    [4,5,2,3,1,9,6,7,8],
    [1,9,4,8,6,3,7,5,2],
    [6,3,5,2,9,7,8,4,1],
    [2,7,8,1,5,4,9,3,6],
  ],
  [
    [4,7,6,8,5,1,2,9,3],
    [8,2,9,6,3,4,7,1,5],
    [3,5,1,7,2,9,6,8,4],
    [2,3,5,4,1,6,8,7,9],
    [7,6,8,3,9,2,4,5,1],
    [1,9,4,5,7,8,3,2,6],
    [5,4,7,9,8,3,1,6,2],
    [6,8,2,1,4,5,9,3,7],
    [9,1,3,2,6,7,5,4,8],
  ]
];

let board;

// Function definition againBtn():

// As soon as it is activated, the function will display a sudoku game board randomly
// and will also randomly remove the digits according to the selected difficulty, easy, medium or hard.

    function againBtn(difficulty){
      let chooseBoard = Math.floor(Math.random() * 3);
      board = mat[chooseBoard];
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          document.getElementById(`td${row}${col}`).value = board[row][col];
        }
      } 
      let counter = 0;
      while(counter < difficulty){
          let row = Math.floor(Math.random() * (9));
          let col = Math.floor(Math.random() * (9));

          let temp = document.getElementById(`td${row}${col}`).value;
          if(temp !== ''){
              document.getElementById(`td${row}${col}`).value = '';   
          }else{
              counter--
          }
          counter++
      }
    }

// Defining easyBtn(), mediumBtn() and hardBtn() functions:

// As soon as each of the functions is activated, a call to the againBtn() function will be made and
//  inside the parentheses the corresponding numerical value is entered according to the level of difficulty,
//  which indicates the amount of digits that will be deleted randomly from the game board.

    function easyBtn() {
      againBtn(20);
    }

    function mediumBtn() {
      againBtn(40);
    }

    function hardBtn() {
      againBtn(60);
    }

// finishBtn() function definition:

// As soon as the function is activated, a check will be made to see if the user was able to solve the game board.
//  If he succeeds, a message will be displayed accordingly and then he will return to the difficulty level selection page,
// and in case he was unable to solve the game board, a message will be displayed accordingly.

    function finishBtn(){
      board;
      counter = 0;
      for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            if(document.getElementById(`td${row}${col}`).value == board[row][col]){
              counter++
            }
          }
        }
        if(counter == 81){
          alert('gooooood')
          window.location.href = "difficultyLevelPage.html";
        }else{
          alert ('you can do better')
        } 
    }