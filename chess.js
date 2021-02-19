// Comments made as I coded as per instructions

// This next part was a bit of an experiment, as I was looking to get input from
// a potential user by using readline in the Node.js CLI

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// creating the empty array to store all the possible moves
var possibleMoves = [];

// creating the array that will ultimately determine the user's location
var move = []

// creating two questions with readline to get user input
readline.question(`Enter your X Coordinate (count left to right from your left the number of spaces your character is in):`, (x) => {
    move[0] = x
    
    readline.question(`Enter your Y Coordinates (count from the bottom up the number of spaces your character is in):`, (y) => {
        move[1] = y

        // this next part does not run until after the input has been received

        // building the places both x and y to coordinate where
        // knight can possibly move
        // note: I attempted to just have the variables stored directly in
        // the input and it only listed the first available move, hence the
        // move array on line 15
        var cellX = parseInt(move[0]);
        var cellY = parseInt(move[1]);

        // grabbing all possible X positions based on user input
        var cellXPositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPos) {
            return (cellPos > 0 && cellPos < 9);
        })

        // grabbing all possible Y positions based on user input
        var cellYPositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPos) {
            return (cellPos > 0 && cellPos < 9);
        })

        // now that I have the possible move outcomes, the board boundaries in
        // place, and the board set up, it's time to begin building out
        // the actual meat and potatoes of the code. One thing I look to do
        // here is make sure that the net X distance plus Y distance only equals
        // 3. Anything higher or lower than 3 combined will result in an
        // invalid move and not be registered. The for loop will also ensure
        // that no possible outcome is listed twice.

        // here is where I get the loop going for the x coordinates
        for (var i = 0; i < cellXPositions.length; i++) {

            //here is the start of the for loop for the y coodinates
            for (var j = 0; j < cellYPositions.length; j++) {

                // this is where I confirm that the combined number of spaces moved
                // absolutely equals 3
                if (Math.abs(cellX - cellXPositions[i]) + Math.abs(cellY - cellYPositions[j]) === 3) {

                    // time to put that empty array I created at the beginning
                    // of the file to good use
                    if (!possibleMoves.includes([cellXPositions[i], cellYPositions[j]])) {
                        possibleMoves.push([cellXPositions[i], cellYPositions[j]]);
                    }
                }
            }
        }

        console.log('Here are the moves that can be made: \n', possibleMoves);
        readline.close()
    })
})
