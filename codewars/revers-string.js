
function reversString(string){
const d = [...string]
const jras = d.reverse().join('');

return jras
}

    





console.log(reversString('world'), '->', 'dlrow');
console.log(reversString('hello'), '->', 'olleh');
console.log(reversString(''), '->', '');
console.log(reversString('h'), '->', 'h');

