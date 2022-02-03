# FizzBuzz

## Challenge
- Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.
- Set the values of each of the new nodes depending on the corresponding node value in the source tree.
### Featured Task 
- Write a function called fizz buzz tree
- Arguments: k-ary tree
- Return: new k-ary tree
- Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.
### Node
 - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
### Binary Tree
- Create a Binary Tree class
- Define a method for each of the depth first traversals:
- pre order
- in order
- post order which returns an array of the values, ordered appropriately.
- Any exceptions or errors that come from your code should be semantic, capture-able errors. For - example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
### Binary Search Tree
- Create a Binary Search Tree class
- This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
- Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
***FindMax Method***
- Input: Binary tree root
- Output: none
***FindMax Helper Method***
- Input: none
- Output: max value in binary tree
## Approach & EfficiencyArguments: 
- value
- Return: nothing
- Adds a new node with that value in the correct location in the binary search tree.
- Contains
- Argument: value
- Returns: boolean indicating whether or not the value is in the tree at least once.
