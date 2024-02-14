import { usersDiv1 } from "./app.js"

const createRow = (id, fname, lname, email, height, age) => {
    let firstCol = document.createElement("div");
    firstCol.className = "col-1";

    let firstColH3 = document.createElement("h3");
    firstColH3.textContent = id;

    firstCol.append(firstColH3);

    let secondCol = document.createElement("div");
    secondCol.className = "col-2";

    let secondColH3 = document.createElement("h3");
    secondColH3.textContent = fname;

    secondCol.append(secondColH3);

    let thirdCol = document.createElement("div");
    thirdCol.className = "col-2";

    let thirdColH3 = document.createElement("h3");
    thirdColH3.textContent = lname;

    thirdCol.append(thirdColH3);

    let fourthCol = document.createElement("div");
    fourthCol.className = "col-4";

    let fourthColH3 = document.createElement("h3");
    fourthColH3.textContent = email;

    fourthCol.append(fourthColH3);

    let fifthCol = document.createElement("div");
    fifthCol.className = "col-2";

    let fifthColH3 = document.createElement("h3");
    fifthColH3.textContent = height;

    fifthCol.append(fifthColH3);

    let sixthCol = document.createElement("div");
    sixthCol.className = "col-1";

    let sixthColH3 = document.createElement("h3");
    sixthColH3.textContent = age;

    sixthCol.append(sixthColH3);

    let row = document.createElement("div");
    row.className = "row";

    row.append(firstCol)
    row.append(secondCol);
    row.append(thirdCol);
    row.append(fourthCol);
    row.append(fifthCol);
    row.append(sixthCol);

    usersDiv1.append(row);
}

export {createRow}