class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // This might have hash collision
        this.data[address].push([key, value]);
        return this.data;
    } // O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } // O(1)

    keys() {
        if (!this.data.length) {
            return undefined;
        }

        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0][0]);
                }
            }   
        }
        console.log(keysArray);
        return keysArray;
    }
}
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));
myHashTable.set('banana', 99);
myHashTable.keys();
