// How to run ts files
// ts-node .\BasicsOfTypeScripts.ts
// tsc => it will create js file and run js file
interface Student{
    stu_id:number,
    name:string,
    fee_submitted:boolean
}

const student : Student = {
    stu_id:123,
    name:"Anamika",
    fee_submitted:true
}
console.log(student)

interface FullName{
    firstName:string,
    lastName?:string
}


const fullName:FullName = {firstName:"Anamika", lastName:"Gupta"}
const newName:FullName = {firstName:"Anamika"}
function getName(fullName: FullName) {
    (fullName.lastName) ? console.log(`${fullName.firstName} ${fullName.lastName}`) : console.log(`${fullName.firstName}`)
}
getName(fullName)
getName(newName)

interface Address {
    houseNumber:number,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string,
}

const address:Address = {houseNumber:134,street:"Ganeshganj",city:"Kalpi",state:"U.P.", postalCode:285204,country:"India"}
console.log(address)

interface PersonDetails {
    prefix_optional? : string,
    phones:Array<number>,
    addresses:Array<Address>,
    email? : string,
    firstname : string,
    lastname : string,
    middlename? : string
}

const person :PersonDetails = {
    prefix_optional : "Miss",
    phones : [1,2,3,4,5,6,7,8,9,10,11,12],
    addresses : [
        {
            houseNumber:134,street:"Ganeshganj",city:"Kalpi",state:"U.P.", postalCode:285204,country:"India"
        },
        {
            houseNumber:134,street:"Khandari",city:"Agra",state:"U.P.", postalCode:232214,country:"India"
        }
    ],
    email : "anamikarec6@gmail.com",
    firstname : "Anamika",
    lastname : "Gupta",
}
console.log(person);


function Phonebook(person:PersonDetails) {
const arr = [];
arr.push(person)
console.log("I am a function",arr)
console.log("I am a function",arr[0].addresses)
}
Phonebook(person)