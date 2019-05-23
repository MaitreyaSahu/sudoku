var grid = [];
var transGrid = [];
var num = 1;
var count = 1;

function doSomething() {    
    for (var i = 0; i < 9; i++) {
        var arr = [];
        for (var j = 0; j < 9; j++) {
            arr.push(0);
        }
        grid.push(arr.slice());
        transGrid.push(arr.slice());
    }
    solve(0, 0);
    //createTable(grid);
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

function solve(posI, posJ) {
    count++;
    if((count % 100) == 0){
        console.log(count);
    }
    num = grid[posI][posJ] + 1;
    if (num > 9) {
        grid[posI][posJ] = 0;
        transGrid[posJ][posI] = 0;
        if (posI == 0 && posJ == 0) {
            console.log('0end');
            return;
        }
        return solve(posJ == 0 ? --posI : posI, posJ == 0 ? 8 : --posJ);
    }

    do {
        if (isValidInRow(num, posI) && isValidInColumn(num, posJ) && isValidInBox(num, posI, posJ)) {
            grid[posI][posJ] = num;
            transGrid[posJ][posI] = num;
            if (posI == 8 && posJ == 8) {
                console.log('8end');
                return;
            }
            return solve(posJ == 8 ? ++posI : posI, posJ == 8 ? 0 : ++posJ);
        }
        num++;
    } while (num < 9);
    if (num >= 9) {
        grid[posI][posJ] = 0;
        transGrid[posJ][posI] = 0;
        if (posI == 0 && posJ == 0) {
            console.log('0end');
            return;
        }
        return solve(posJ == 0 ? --posI : posI, posJ == 0 ? 8 : --posJ);
    }
    
}
