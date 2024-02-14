import { getUsers } from "./app.js";
import { createRow } from "./createRow.js";

const nextCreate = async (arr, num, count) => {
    usersDiv1.innerHTML = "";

    for(let i = 0; i < num; i++){
        if(count < arr.length - 1){
            count++;
           createRow(arr[count].Id, arr[count].FirstName, arr[count].LastName, arr[count].Email, arr[count].Height, arr[count].Age);
        }
    }
}


export  { nextCreate}