function matrixGen(height, width) {
    matrix = [];
    for (var i = 0; i < height; i++) {
        // push empty array to store each row
        matrix.push([]);
        for (var j = 1; j <= width; j++) {
            // push ((i + 1) * j) to store each column value in the row
            // i + 1 to make sure we do not multiply by 0
            matrix[i].push((i + 1) * j);
        }
    }

    for (var i = 0; i < matrix.length; i++) {
        let row = matrix[i].join(' ');
        console.log(row);
    }

    console.log(matrix);
}

matrixGen(1, 5);
matrixGen(5, 4);
matrixGen(3, 6);
matrixGen(0, 0);
