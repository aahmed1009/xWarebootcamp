// let persons=[
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//   ]
// let values = []
// for (let i = 0; i < persons.length; i++) {
//     values.push(persons[i].address.geo.lat)


//     // console.log(persons[i].address.geo.lat)
// }
// console.log(values)
// const person= {
//     fname:'john',
//     lname:'smith',
//     age:25,
//     fullName : function (){
//         return person.fname + person.lname
// }
// }
// person.fullName()
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };
// for(let i = 0 ; i <weekdays.length;i++){

//     console.log(Object.entries(weekdays))
//     console.log(`on `)
// }

// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24
const obj = {
    name: 'John',
    age: 25,
    hobbies: [{
            name: 'JS',
            percent: 90
        },
        {
            name: 'CSS',
            percent: 75
        },
        {
            name: 'Vue',
            percent: 100
        },
        {
            name: 'HTML',
            percent: 110
        },
    ]
}
let value = obj.hobbies
let max = 0
let name = ''
value.forEach(element => {
    if (element.percent > max) {
        max = element.percent
        name = element.name
    }
})
console.log(name);
console.log(max);
// const found = value.find(element => element > 90);
// console.log(found)
// Get the most hobby I love it