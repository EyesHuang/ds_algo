const strings= ['a', 'b', 'c', 'd'];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
console.log('strings[2]:', strings[2]); // O(1)

//push
strings.push('e'); // O(1)
console.log('push a new item:', strings);

//pop
strings.pop(); // O(1)
strings.pop();
console.log('remove the last item:', strings);

//unshift
strings.unshift('x') // O(n)
console.log('push a new item on the 1st position:', strings);

//splice
strings.splice(2, 0, 'alien'); // O(n)
console.log('delete a item and replace a new one:', strings)