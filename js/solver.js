var board = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
]


// find Empty Cells
function findEmpty(board){
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			if(board[i][j] == 0){
				var pos = [i, j];
				return pos;
			}
		}
	} 
	var pos = [99,99];
	return pos;
}

var ind=0;
// is Valid
function isValid(board, pos, num){
	//check same row
	for(var i=0; i<9; i++){
		if(board[pos[0]][i] == num && i != pos[1]){
			return false;
		}
	}

	//check same column
	for(var i=0; i<9; i++){
		if(board[i][pos[1]] == num && i != pos[0])
			return false;
	}

	//check grid
	var box_x = Math.floor(pos[0]/3);
	var box_y = Math.floor(pos[1]/3);
	for(var i=box_x*3; i<(box_x*3)+3; i++){
		for(var j=box_y*3; j<(box_y*3)+3; j++){
			if(num == board[i][j]){
				return false;
			}
		}
	}
	return true;
}

function solve(board){
	var pos = findEmpty(board);
	if(pos[0] == 99)
		return true;
	for(var i=1; i<10; i++){
		if(isValid(board, pos, i)){
			board[pos[0]][pos[1]] = i;
			update_cont(pos[0], pos[1], i);

			if(solve(board))
				return true;

			board[pos[0]][pos[1]] = 0; //resetting Value
		}
	}
	return false;
}

/********************************************* END OF SUDOKU SOLVER ALGORITHM ***********************************************************/
var delay = 0;
function update_cont(i, j, val){
    window.setTimeout(function(){
        document.querySelector('.inp'+i+j).value=val;
    }, delay+=0);
}