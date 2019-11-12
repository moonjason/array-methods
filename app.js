// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
// 1. Filter the list of inventors for those who were born in the 1500's
const x = inventors.filter(elem => 
    elem['year'] >= 1500 && elem['year'] < 1600
)
// console.log(x)
// 2. Give us an array of the inventors' first and last names
const y = inventors.map(elem =>{
    return {first: elem.first, last: elem.last}
})

// console.log(y)

// 3. Sort the inventors by birthdate, oldest to youngest
const z = inventors.sort((a, b) => {
    return b.year - a.year
})
// console.log(z)

// 4. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year)
})

// console.log(yearsLived)

// 5. How many years did all the inventors live?
const totalLived = inventors.reduce((acc, elem) => {
    acc += (elem.passed - elem.year);
    return acc;
}, 0)

// console.log(totalLived)

const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
// 6. Sort the people array alphabetically by last name
const sortedLastName = people.sort((a, b) => {
    return a.split(', ')[1][0].charCodeAt(0) - b.split(', ')[1][0].charCodeAt(0)
})

// console.log(sortedLastName)
// console.log('Becker, Carl'.split(', ')[1][0])

const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// 7. Count the number of instances for each of the data items.
// Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.
const reducedData = data.reduce((acc, data) => {
    acc.hasOwnProperty(data) ? acc[data] += 1 : acc[data] = 1;
    return acc;
}, {})

// console.log(reducedData);

const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
// Array.prototype.some()
// 8. Is at least one person 19 or older?
const nineteen = devs.some(devs => {
    return 2019 - devs.year >= 19
})

// console.log(nineteen)
  
// Array.prototype.every()
// 9. Is everyone 19 or older?
const everyNineteen = devs.every(devs => {
    return 2019 - devs.year >= 19
})

// console.log(everyNineteen)

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423
const idFind = comments.find(comment => {
   return comment.id === 823423
})

// console.log(idFind)

const idIndex = comments.findIndex(comment => {
    return comment.id === 123523
})
  
// console.log(idIndex)




  
  