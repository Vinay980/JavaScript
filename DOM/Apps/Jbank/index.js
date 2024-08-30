//js code//
let account_1={
    accName:"Satish Kumar",
    trasactions:[100,400,-500,700,-100,200],
    pin:1234
  };

let account_2={
    accName:"Rajesh Singh",
    trasactions:[500,-200,400,-500,800],
    pin:2345
  };

let account_3={
    accName:"Sita Rama Raju",
    trasactions:[100,200,900,-200,-300],
    pin:3456
  };

let account_4={
    accName:"chushak chowdary",
    trasactions:[400,-100,200,300,-300],
    pin:4567
  };

let accounts=[account_1,account_2,account_3,account_4];

function createUserNames(accs)
{
accs.forEach(function(acc)
{
acc.username=acc.accName.toLowerCase().split(' ').map(function(name)
{
return name[0];
}).join('');
})
}
createUserNames(accounts);


//Display Deposits
function displayDeposits(transactions)
{
let deposits=transactions.filter(function(amt)
{
return amt>0;
});
//console.log(deposits);
displayTransactions(deposits);
} 
displayDeposits(accounts[0].trasactions);

//Display Withdrawls
function displayWithdrawls(transactions)
{
let withdrawls=transactions.filter(function(amt)
{
return amt<0;
});
displayTransactions(withdrawls);
}


//Display All Transactions
function displayTransactions(transactions)
{
if(transactions.length!=0)
{
let eachTras=``;
transactions.forEach(function(amt,i)
{
let trasacType=amt>0?"Deposit":"Withdrawl";
let trasacColor=amt>0?"success":"danger";

eachTras+=`<li class="list-group-item">
                    <button type="button" class="btn btn-${trasacColor}">
                        ${trasacType} <span class="badge text-bg-secondary">${i+1}</span>
                      </button>
                    <span class="float-end">${amt}</span>
                </li>` 
});
document.getElementById("display-transactions").innerHTML=eachTras;
}
}



//Login Module
let logInForm=document.getElementById('login-form');
let usnEl=document.getElementById('usn');
let pinEl=document.getElementById('pin');

let currentAcc;

logInForm.addEventListener('submit',function(e)
{
e.preventDefault();

let username=usnEl.value;
let pin=Number(pinEl.value);


//Finding Current Account
currentAcc=accounts.find(function(acc)
{
if(acc.username===username)
{
return true;
}
})

if(currentAcc&&(currentAcc.pin===pin))
{
//Display User message
let msgEl=document.getElementById('user-message');
msgEl.innerText=`Welcome Back, ${currentAcc.accName.split(" ")[0]} 😊`;
msgEl.style.color="limegreen";

//Display Buttons Section
let btnSectionEl=document.getElementById('btn-section');
btnSectionEl.classList.remove('hidden');



//Display All Transactions 
let all_btn=document.getElementById('all-transactions');
all_btn.addEventListener('click',function()
{
let transactionSection=document.getElementById('transactions-section');
transactionSection.classList.remove('hidden');
displayTransactions(currentAcc.trasactions);
});

//Display Deposits
let depositsBtn=document.getElementById('deposits-btn');
depositsBtn.addEventListener('click',function()
{
displayDeposits(currentAcc.trasactions);
});

//Display Withdrawls
let withdrawlsBtn=document.getElementById('withdrawls-btn');
withdrawlsBtn.addEventListener('click',function()
{
displayWithdrawls(currentAcc.trasactions);
})

}
usnEl.value=pinEl.value='';
});