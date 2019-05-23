var grid = [];
var transGrid = [];
var num = 1;
var count = 1;
var retArr = [1, 0];

function getFirstRow() {
    var i = 0;
    var j = 0;
    do {
        var x = (Math.round(Math.random() * 8) + 1);
        if (grid[0].indexOf(x) == -1) {
            grid[i][j] = x;
            transGrid[j++][i] = x;
        }
    } while (j < 9)
}

function doSomething() {
    grid = [];
    transGrid = [];
    for (var i = 0; i < 9; i++) {
        var arr = [];
        for (var j = 0; j < 9; j++) {
            arr.push(0);
        }
        grid.push(arr.slice());
        transGrid.push(arr.slice());
    }

    getFirstRow();

    do {
        count++;
        if ((count % 5000000) == 0) {
            console.clear();
            console.table(grid);
        }
        retArr = solve(retArr[0], retArr[1]);

    } while (retArr[0] != 'x');console.table(grid);
    createTable(grid);
}

function createTable(tableData) {
    var mainDiv = document.createElement('div');
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
    mainDiv.appendChild(table);
    mainDiv.setAttribute('class', 'container');
    table.appendChild(tableBody);
    table.setAttribute('class', 'table table-bordered');
    document.body.appendChild(table);
}

function isValidInRow(gridVal, gridRow) {
    return grid[gridRow].indexOf(gridVal) == -1 ? true : false;
}

function isValidInColumn(gridVal, gridColumn) {
    return transGrid[gridColumn].indexOf(gridVal) == -1 ? true : false;
}

function isValidInBox(gridVal, gridRow, gridColumn) {
    var boxIndexI = Math.round((gridRow - 1) / 3) * 3;
    var boxIndexJ = Math.round((gridColumn - 1) / 3) * 3;
    for (var i = boxIndexI; i < boxIndexI + 3; i++) {
        for (var j = boxIndexJ; j < boxIndexJ + 3; j++) {
            if (grid[i][j] == gridVal) {
                return false;
            }
        }
    }
    return true;
}

function getPossibleValues(posI, posJ) {
    var possibleValues = [];
    for (var i = 1; i < 10; i++) {
        if (isValidInRow(i, posI) && isValidInColumn(i, posJ) && isValidInBox(i, posI, posJ)) {
            possibleValues.push(i);
        }
    }
    return possibleValues;
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
