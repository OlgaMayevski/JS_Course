//Class "Account". 
//Inherited classes: 
// 1. current account and 2. savings account.

//Possible fields include: number, type of contribution, PIN, balance, date of account creation, 
//user, type of user (active, blocked ...), 
//history of account changes 
//(the list of operations of replenishment of withdrawal of money from the account), etc.

function Account(number, typeOfContribution, PIN) {
    number = number;
    typeOfContribution = typeOfContribution; //тип вклада
    PIN = PIN;
    //var balance = balance;
    //var dateOfAccountCreation = dateOfAccountCreation;

    this.getNumber = function () {
        return number;
    }

    this.setNumber = function (value) {
        number = value;
    }

    this.getTypeOfContribution = function () {
        return typeOfContribution;
    }

    this.setTypeOfContribution = function (value) {
        typeOfContribution = value;
    }


    this.getPIN = function () {
        return PIN;
    }

    this.setPIN = function (value) {
        PIN = value;
    }


    //************************
    this.toString = function () {
        return 'Number: ' + this.getNumber() + '\nType of Contribution: ' + this.getTypeOfContribution() + '\nPIN: ' + this.getPIN();
    }


}

//***************************************************************

function currentAccount(number, typeOfContribution, PIN, user) {

    Account.call(this, number, typeOfContribution, PIN);
    user = user;

    this.getUser = function () {
        return user;
    }

    this.setUser = function (value) {
        user = value;
    }

    this.toStringCurr = function () {
        return this.toString() + '\nUser: ' + this.getUser();
    }
}



function onCreateCurrentAccount() {
    var currentAcc = new currentAccount();

    currentAcc.setNumber(document.getElementById('currentAccount').value);
    currentAcc.setTypeOfContribution(document.getElementById('typeOfContribution').value);
    currentAcc.setPIN(document.getElementById('pin').value);
    currentAcc.setUser(document.getElementById('user').value);

    alert(currentAcc.toStringCurr());
}