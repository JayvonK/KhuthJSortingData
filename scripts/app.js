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
let sortId = document.getElementById("sortId");
let sortFName = document.getElementById("sortFName");
let sortLName = document.getElementById("sortLName");
let sortEmail = document.getElementById("sortEmail");
let sortHeight = document.getElementById("sortHeight");
let sortAge = document.getElementById("sortAge");

let num = 10;
let count = -1;


const getUsers = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    return data.People;
}

let arr = await getUsers();

const initialCreate = async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
}

initialCreate();

btn10.addEventListener('click', async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 10;
    count = -1;
    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})

btn20.addEventListener('click', async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 20;
    count = -1;
    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})

btn30.addEventListener('click', async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 30;
    count = -1;
    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})

btn40.addEventListener('click', async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 40; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 40;
    count = -1;
    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})

btn50.addEventListener('click', async () => {
    usersDiv1.innerHTML = "";
    for (let i = 0; i < 50; i++) {
        createRow(arr[i].Id, arr[i].FirstName, arr[i].LastName, arr[i].Email, arr[i].Height, arr[i].Age);
    }
    num = 50;
    count = -1;
    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})


nextBtn.addEventListener('click', async () => {
    count += num;
    if (count > 98) {
        count = -1;
    }
    await nextCreate(arr, num, count);

    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})


backBtn.addEventListener('click', async () => {
    // if (count > -1) {

    // } else {
    //     alert("You cannot go back");
    // }
    count -= num;
    await nextCreate(arr, num, count);

    if (count > -1) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
})

const compareNumbers = (a, b) => {
    return a - b;
}

sortFName.addEventListener('click', async () => {
    let newArr = await getUsers();
    let abcArr = newArr.sort((fName1, fName2) => {
        let first = fName1.FirstName.toUpperCase();
        let second = fName2.FirstName.toUpperCase();
        if (first < second) {
            return -1;
        } else if (first > second) {
            return 1;
        } else {
            return 0;
        }
    })
    arr = abcArr;
    await nextCreate(arr, num, count);
})

sortLName.addEventListener('click', async () => {
    let newArr = await getUsers();
    let lastArr = newArr.sort((lName1, lName2) => {
        let first = lName1.LastName.toUpperCase();
        let second = lName2.LastName.toUpperCase();

        if (first < second) {
            return -1;
        } else if (first > second) {
            return 1;
        } else {
            return 0;
        }
    })

    arr = lastArr;
    await nextCreate(arr, num, count);
})

sortEmail.addEventListener('click', async () => {
    let newArr = await getUsers();
    let emailArr = newArr.sort((email1, email2) => {
        let first = email1.Email.toUpperCase();
        let second = email2.Email.toUpperCase();

        if (first > second) {
            return 1;
        } else if (first < second) {
            return -1;
        } else {
            return 0;
        }
    })

    arr = emailArr;
    await nextCreate(arr, num, count);
})

sortHeight.addEventListener('click', async () => {
    let newArr = await getUsers();
    let heightArr = newArr.sort((height1, height2) => {
        return height1.Height.split(" ")[0] - height2.Height.split(" ")[0];
    })

    arr = heightArr;
    await nextCreate(arr, num, count);
})

sortId.addEventListener('click', async () => {
    let newArr = await getUsers();
    let idArr = newArr.sort((id1, id2) => {
        return id1.Id - id2.Id;
    })

    arr = idArr;
    await nextCreate(arr, num, count);
})

sortAge.addEventListener('click', async () => {
    let newArr = await getUsers();
    let ageArr = newArr.sort((age1, age2) => {
        return age1.Age - age2.Age;
    })

    arr = ageArr;
    await nextCreate(arr, num, count);
})


export { getUsers, usersDiv1 };