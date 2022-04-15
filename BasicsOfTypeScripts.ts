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
    
}