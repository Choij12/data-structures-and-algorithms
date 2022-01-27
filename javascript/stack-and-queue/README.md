# Stack and Queue brackets

## Problem Domain
Write a function called validate brackets Arguments: string Return: boolean representing whether or not the brackets in the string are balanced There are 3 types of brackets:
- Round Brackets: ()
- Square Brackets: []
- Curly Brackets: {}

## Inputs / Outputs

### Stack

**Push Method**

Input: value
Output: none

**Pop Method**

Input: none  
Output: value of removed node

**Peek Method**

Input: none  
Output: value of top node in stack

**isEmpty Method**

Input: none  
Output: boolean

### Queue

**Enqueue Method**

Input: value
Output: none

**Dequeue Method**

Input: none  
Output: value of removed node

**Peek Method**

Input: none  
Output: value of front node in queue

**isEmpty Method**

Input: none  
Output: boolean

### Pseudo Queue

**Enqueue Method**

Input: value
Output: none

**Dequeue Method**

Input: none  
Output: value of removed node

### Stack Queue Animal Shelter

**Enqueue Method**

Input: value
Output: none

Dequeue Method

Input: none
Output: value of removed node


## Code 

[stack](./module/stack.js)

[queue](./module/queue.js)

[node](./module/node.js)

[pseudo queue](./module/pseudoQueue.js)

[stack-queue-animal-shelter](./module/animalShelter.js)

[stack-queue-brackets](./module/brackets.js)

## Tests

[Tests](./__tests__/test.js)

[Pseudo Queue Test](./__tests__/pseudoTest.js)

[animal-shelter-test](./__tests__/animalShelterTests.js)

[stack-queue-brackets test](./__tests__/bracketTest.js)
