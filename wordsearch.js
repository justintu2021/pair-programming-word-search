const transpose = function(matrix) {
    const results = [];
    // Put your solution here
    for (i = 0; i < matrix[0].length; i++) {
      const temp = [];
      for (let j = 0; j < matrix.length; j++) {
        temp.push(matrix[j][i]);
      }
      results.push(temp);
    }
    return results;
  };

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    } else {
        //creates an array of all the horrizontal letters in the puzzle.
        const horizontalJoin = letters.map(ls => ls.join(''));
        
        //creates an array of all the horrizontal letters in the puzzle. 
        const verticalJoin = transpose(letters).map(ls => ls.join(''));
       console.log(horizontalJoin)

            ///// Loop through horizontal letters looking for word
        for (l of horizontalJoin) {
            if (l.includes(word)) {
                return true
            }
        }
           ///// Loop through vertical letters looking for word
        for (l of verticalJoin) { 
            if (l.includes(word)) return true
        }
        
        return false; //// when not found returns false
    }
}

module.exports = wordSearch