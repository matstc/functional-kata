# The Goal

- Pairing
- Test driving
- Refactoring

# The Format

We have a deck of features to implement:

1. A pair starts off on the first feature
2. We switch one member of the pair every X minutes
3. Go back to step 2

# Kata

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

## Zip
`zip` accepts arrays as arguments and returns an array of arrays containing the first elements of each array in the first array, and then the second elements of each array, until the longest array is exhausted. Zips are padded with nulls.

    F.zip([1,2,3], [4,5,6], [7,8,9,10]) → [[1,4,7], [2,5,8], [3,6,9], [null, null, 10]]

See the [rdoc for Enumerable](http://www.ruby-doc.org/core-2.1.0/Enumerable.html) for more complete specs.
