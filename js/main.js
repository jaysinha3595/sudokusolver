/* Create tr */
var tr = [];
var table = document.querySelector(".table");
for(var i=0; i<9; i++){
  tr[i] = document.createElement("tr");
  table.appendChild(tr[i]);
  tr[i].classList.add('row'+i);
}

/* Create td */
for(var i=0; i<9; i++){
  for(var j=0; j<9; j++){
    var cell = document.createElement("td");
    var currTable = document.querySelector('.row'+i);
    currTable.appendChild(cell);
    cell.classList.add('r'+i+j);
  }
}

/* Input in td */
for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
        var cell = document.querySelector('.r'+i+j);
        var input = document.createElement("input");
        input.type = "text";
        input.className = 'inp'+i+j;
        input.classList.add('cell');
        input.maxLength = '1';
        cell.appendChild(input);
        input.addEventListener('change', changeColor);
    }
}

/* Add event Listeners to btns */
document.querySelector(".solve").addEventListener('click', solveboard);
document.querySelector(".new").addEventListener('click', newboard);


function changeColor(){
    /*if(this.value == " ")
        this.style="background-color:red;"
    else
        this.style="background-color:white;"*/            //i know a better way.
    var index_i = this.classList[0][3];
    var index_j = this.classList[0][4];
    board[index_i][index_j] = parseInt(this.value);
    if(this.value){
        this.classList.add("filled");
    }
    else
    this.classList.remove("filled");
}

function fillBoard(){
    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            var input = document.querySelector('.inp'+i+j);
            if(board[i][j]!=0){
                input.value = board[i][j];
                input.classList.add("filled");
            }
        }
    }
}

function solveboard(){
    var cells = document.querySelectorAll(".cell");
    for(var i=0; i<cells.length; i++){
        cells[i].disabled = true;
    }
    if(!(solve(board))){
        document.write("Invalid Values Entered.")
    }
}
function newboard(){
    location.reload();
}
fillBoard();