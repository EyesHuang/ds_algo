// Create a function that reverses a string
// 'Hi My name is YT' should be:
// 'TY si eman yM iH'

function reverse(str) {
    let result = "";
    for (let index = str.length - 1; index >= 0; index--) {
        result += str[index]
        // console.log(result);
    }

    return result
}

console.log(reverse("YongTeng"));