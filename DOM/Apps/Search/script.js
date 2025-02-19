let employees=[{"id":1,"first_name":"Vinay","last_name":"Kumar","email":"ewarfield0@bizjournals.com","gender":"Male","country":"Indonesia"},
    {"id":2,"first_name":"Himanshu","last_name":"Sharma","email":"lpharrow1@4shared.com","gender":"Male","country":"Switzerland"},
    {"id":3,"first_name":"Akashay","last_name":"Ganjawala","email":"hgascar2@macromedia.com","gender":"Male","country":"Russia"},
    {"id":4,"first_name":"Rajesh","last_name":"Jhingalala","email":"icorington3@amazonaws.com","gender":"Male","country":"Argentina"},
    {"id":5,"first_name":"Bismillah","last_name":"Tiwari","email":"ysollett4@is.gd","gender":"Male","country":"Sweden"},
    {"id":6,"first_name":"Piku","last_name":"Rahim","email":"wfeitosa5@ucoz.ru","gender":"Male","country":"Russia"}];

//Display Data
function displayEmpsData(emps)
{
    if(emps!=0)
    {
        let eachEmployee=``;
        emps.forEach((emp)=>
        {
            eachEmployee+=`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.first_name}</td>
                            <td>${emp.last_name}</td>
                            <td>${emp.email}</td>
                            <td>${emp.gender}</td>
                            <td>${emp.country}</td>
                        </tr>`
        });
        document.getElementById('display-emps').innerHTML=eachEmployee;
    }
}


let allEmpsBtn=document.getElementById('all-emps-btn');
let maleEmpsBtn=document.getElementById('male-emps-btn');
let femaleEmpsBtn=document.getElementById('female-emps-btn');

allEmpsBtn.addEventListener('click',function()
{
    displayEmpsData(employees);
});

let maleEmps=employees.filter(function(emp)
{
    return emp.gender==="Male";
});

maleEmpsBtn.addEventListener('click',function()
{
    displayEmpsData(maleEmps);
});

let femaleEmps=employees.filter(function(emp)
{
    return emp.gender==="Female";
});

femaleEmpsBtn.addEventListener('click',function()
{
    displayEmpsData(femaleEmps);
});


//Search Box

let searchBox=document.getElementById('search-box');
searchBox.addEventListener('keyup',function()
{
    let enteredName=searchBox.value;
    let filterEmps=searchEmpsData(enteredName,employees);
    
    if(enteredName.length==0)
    {
        document.getElementById('display-emps').innerHTML="No Data Found!!!!";
    }
    else
    {
        displayEmpsData(filterEmps);
    }
});


//Filter Emps Data
function searchEmpsData(val,emps)
{
    
    val=val.toLowerCase().trim();
    let filteredEmps=[];

    emps.forEach(function(emp)
    {
        let oName=emp.first_name.toLowerCase().trim();
        if(oName.startsWith(val))
        {
            filteredEmps.push(emp);
        }
    })

    return filteredEmps;
}

