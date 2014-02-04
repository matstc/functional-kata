# The Goal
- Pairing
- Test driving
- Refactoring

# The Format
There is a deck of features to implement:

1. We only use one computer
2. A pair starts off on the first feature
3. We switch one member of the pair every 5 minutes
4. Go back to step 3

# Install
You will need `node` and `npm`. Once you have those, run `npm install` in the root directory and make sure running the tests works well by running the script `run-tests`.

You might have to install `mocha` globally so the mocha executable is on your path:

    npm install -g mocha

# The Development Cycle
1. Write one test (in the `spec/f_spec.js` file)
2. Code to make that one test pass (in the `src/f.js` file)
3. Refactor to make it pretty
4. Consider a commit
5. Go back to #1

Run the script `run-tests` to run the tests. The tests will run automatically as you save your js files.

# The Kata
We will implement our own version of the following list functions:

## All
`all` returns true if all elements of the array match the predicate

    F.all([1,2,4,5], function(elem){return elem < 6;}) === true

## Any
`any` returns true if at least one element of the array matches the predicate

    F.any([1,2,4,5], function(elem){return elem > 5;}) === false

## Find
`find` returns the first element of the array that matches the predicate or null

    F.find([1,2,4,5], function(elem){return elem > 3;}) === 4

## None
`none` returns true if none of the elements of the array matches the predicate

    F.none([1,2,4,5], function(elem){return elem > 6;}) === true
    
## Partition
`partition` returns an array of two arrays, the first one containing all elements of the array that match the predicate and the second array containing the rest

    F.partition([1,2,4,5], function(elem){return elem > 2;}) → [[4,5], [1,2]]

## Group By
`group_by` returns a hash that groups the elements of the array (values) by the result of the predicate (keys)

    F.group_by([1,2,4,5], function(elem){return elem % 2;}) → {1: [1,5], 0: [2,4]}

Extra points for grouping multiple arrays into one hash.

## Zip
`zip` accepts arrays as arguments and returns an array of arrays containing the first elements of each array in the first array, and then the second elements of each array, until the longest array is exhausted. Zips are padded with nulls.

    F.zip([1,2,3], [4,5,6], [7,8,9,10]) → [[1,4,7], [2,5,8], [3,6,9], [null, null, 10]]

Zipping empty arrays should return an empty array.

See the [rdoc for Enumerable](http://www.ruby-doc.org/core-2.1.0/Enumerable.html) for more complete specs.

# Kata Notes
As you implement the kata, pay attention to potential refactorings. Ask yourselves questions like:

- Did we cover all edge cases?
- What happens in our  code when the arrays are empty?
- What happens in our code when the predicate returns `undefined`?
- Are we going through the whole array when we don't have to?
- Can we get rid of old-style for loops?
- Can we implement one function in terms of another?

Originally implemented @ [JSLuxembourg](https://twitter.com/JSLuxembourg).
