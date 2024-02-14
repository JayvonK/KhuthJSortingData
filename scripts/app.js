import { createRow } from "./createRow.js";

let usersDiv1 = document.getElementById("usersDiv1");

const getUsers = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    console.log(data.People);
    return data.People;
}

getUsers();

const initialCreate = async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for(let i = 0; i < 10; i++){
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
} 

initialCreate();


export { getUsers, usersDiv1 };