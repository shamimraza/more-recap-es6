const numbers1 = [12, 23, 45, 78, 65];
for(const number of numbers1){
    // console.log(number);
}
const names = {
    name: 'Rabi khan',
    age: 32,
    color: 'blue'
}

for(const name in names){
    const value = names[name]
    console.log(names, value);
}