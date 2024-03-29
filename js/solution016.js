/* Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made. */

const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;


// function countSquares(cuts){
//     return !cuts ? 1 : (6 * cuts * cuts) + 2
//    }


// function countSquares(cuts){
//     if (!cuts) {
//       return 1;
//     }
  
//     const totalCubes = Math.pow(cuts + 1, 3);
//     const innerCubes = Math.pow(cuts - 1, 3);
    
//     return totalCubes - innerCubes;
//   }