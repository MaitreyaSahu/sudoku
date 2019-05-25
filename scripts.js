body {
    font-size: 50px;
}

.locked-cell {
    font-weight: bold;
}

.unLocked-cell {
    color: #49a89d;
}

.error-cell {
    color: #8c061d;
}

/*
.selected {
    background-color: #5e89a8;
}
*/
.selected-row, .selected-column {
    background-color: #ebefc9;
}

table {
    border: 10px solid;
    margin: 1em auto;
    /* width: 100%; */
    border-collapse: collapse;
    /* height: 100%; */
}

td {
    height: 80px;
    width: 80px;
    border: 1px solid #ccc;
    text-align: center;
}

#mainGrid td:nth-child(3n) {
    border-right: 5px solid black;
}

tr:nth-child(3n) td {
    border-bottom: 5px solid black;
}

#nums-table td {
    border: 10px solid black;
}

.btn {
    background-color: #a5c47d;
    /* Green */
    border: none;
    color: white;
    padding: 10px 65px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 75px;
    margin: 5px 50px;
    cursor: pointer;
}

.container {
    text-align: center;
}
