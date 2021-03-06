var grid = [];
var arr = [];
var transGrid = [];

function captureGrid() {
    var i = 0;
    arr.push($('div.guess').each(function() {
        if (i % 9 == 0) {
            grid.push(arr.slice());
            transGrid.push(arr.slice());
            arr = [];
        }
        console.log(i + '.- ' + $.type($(this).html()) + ' - ' + parseInt($(this).html()));
        arr.push(parseInt($(this).text()) || '');
        i++;
    }));
    grid.push(arr.slice());
    grid.shift();

    for (i = 0; i < 9; i++) {
        for (var j = 0; j < 9; i++) {
            transGrid[j][i] = grid[i][j];
        }
    }

    console.table(grid);
    console.table(transGrid);
}

function main() {
    var retArr = [];
    do {

        retArr = solve(retArr[0], retArr[1]);

    } while (retArr[0] != 'x');console.table(grid);
}

function solve(posI, posJ) {
    var index;
    num = grid[posI][posJ];
    grid[posI][posJ] = 0;
    transGrid[posJ][posI] = 0;

    var possibleValues = getPossibleValues(posI, posJ);
    index = possibleValues.indexOf(num);
    if (possibleValues.length == 0 || (index == (possibleValues.length - 1))) {
        return [posJ == 0 ? --posI : posI, posJ == 0 ? 8 : --posJ];
    } else {
        num = possibleValues[index + 1];
        grid[posI][posJ] = num;
        transGrid[posJ][posI] = num;
        if (posI == 8 && posJ == 8) {
            return ['x', 'x'];
        }
        return [posJ == 8 ? ++posI : posI, posJ == 8 ? 0 : ++posJ];

    }

}
