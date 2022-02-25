# LEFT JOIN for 2 Hashmaps.

## Problem Domain
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- Write a function called left join
- Arguments: two hash maps
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

## Inputs/Outputs
![Inputs](challenge33.png)
**Outputs**
- ['font', 'enamored', 'averse'],
- ['wrath', 'anger', 'delight'],
- ['diligent', 'employed', 'idle'],
- ['outfit', 'garb', null],
- ['guide', 'usher', 'follow']
## Efficiency
- 0(n) on both time and space
