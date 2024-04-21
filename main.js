#! /usr/bin/env node
let mybalance = 100000;
let mypin = "khaskheli";
import inquirer from "inquirer";
const myatm = await inquirer.prompt({
    name: 'pin',
    message: 'enter your pin',
    type: "input"
});
if (myatm.pin === mypin) {
    console.log("correct pin code");
}
let myatm2 = await inquirer.prompt({
    name: 'pin2',
    message: "please select option",
    type: "list",
    choices: ["Withdraw", "check balance"]
});
if (myatm2.pin2 === "Withdraw") {
    let amountans = await inquirer.prompt({
        name: "amount",
        message: "select your amount",
        type: "list",
        choices: ["2000", "4000", "6000", "8000"]
    });
    mybalance -= amountans.amount;
    console.log("your current balance is" + mybalance);
}
else if (myatm2.pin2 === "check balance") {
    console.log(" your balance is" + mybalance);
}
