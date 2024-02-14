import { createRow } from "./createRow.js";
import { nextCreate } from "./nextPrev.js";

let usersDiv1 = document.getElementById("usersDiv1");
let btn10 = document.getElementById("btn10");
let btn20 = document.getElementById("btn20");
let btn30 = document.getElementById("btn30");
let btn40 = document.getElementById("btn40");
let btn50 = document.getElementById("btn50");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

let num = 10;
let count = -1;


const getUsers = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    return data.People;
}

const initialCreate = async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
}

initialCreate();

btn10.addEventListener('click', async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 10;
    count = -1;
})

btn20.addEventListener('click', async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 20;
    count = -1;
})

btn30.addEventListener('click', async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 30;
    count = -1;
})

btn40.addEventListener('click', async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 40; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 40;
    count = -1;
})

btn50.addEventListener('click', async () => {
    let arr = await getUsers();
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 50; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 50;
    count = -1;
})




nextBtn.addEventListener('click', async () => {
    count += num;
    if(count > 98){
        count = -1;
    }
    await nextCreate(num, count);
    
    
    console.log(count);
})

backBtn.addEventListener('click', async () => {
    let arr = await getUsers();
    count -= num;
    if(count < -1){
        count = arr.length - 1 - num;
    } 
    
    await nextCreate(num, count); 
    if (count === 9){
        count = 29;
    } else if (count === 19){
        count = 39;
    }
    console.log(count);
})



export { getUsers, usersDiv1 };