# Aequilibrium-Castle-Building

Aequilibrium Castle Builder is a static page which calculate the number of castles you can build given the cordinates representing a stretch of land. The UI provides an input which returns your desired points to build your castles on, aswell as the amount of castles you'll be able to build. 

<img width="1904" alt="screen shot 2017-10-07 at 3 15 16 pm" src="https://user-images.githubusercontent.com/24995518/31312228-600ee554-ab72-11e7-8d2e-0c06deed599f.png">

## Approach

To approach this problem, I broke my functions into 4 parts. 
1. Get the coordinate strting.
2. Separate the string into single integers in an array.
3. Find any corresponding integers which are the same and extract them.
4. Compare each integer with previous and next integer in array.
5. Display final results.
