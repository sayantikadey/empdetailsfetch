let emp_1={id:1,firstName:"Sayantika",lastName:"Dey",email:"sayantika@gmail.com",gender:"Female",location:"Suri"};

let emp_2={id:2,firstName:"Indranil",lastName:"Saha",email:"raj@gmail.com",gender:"Male",location:"Malda"};

let emp_3={id:3,firstName:"Mayukh",lastName:"Acharya",email:"mayukh@gmail.com",gender:"Male",location:"Howrah"};

let emp_4={id:4,firstName:"Amit",lastName:"Dalui",email:"amit@gmail.com",gender:"Male",location:"Howrah"};

let emp_5={id:5,firstName:"Susmit",lastName:"Dutta",email:"ravaan@gmail.com",gender:"Male",location:"Kolkata"};

let emp_6={id:6,firstName:"Kalpita",lastName:"Chaudhuri",email:"kalpita@gmail.com",gender:"Female",location:"Sodepur"};

let emp_7={id:7,firstName:"Swapnil",lastName:"Bagchi",email:"swapnil@gmail.com",gender:"Male",location:"Kolkata"};

let emp_8={id:8,firstName:"Anusweta",lastName:"Das",email:"ani@gmail.com",gender:"Female",location:"Dumdum"};

let emp_9={id:9,firstName:"Ishan",lastName:"Yadav",email:"ishan@gmail.com",gender:"Male",location:"Kolkata"};


let employess=[emp_1,emp_2,emp_3,emp_4,emp_5,emp_6,emp_7,emp_8,emp_9];

function displayEmps(emps)
{
    if(emps.length!=0)
    {
        let eachEmp=``;
        for(let emp of emps)
        {
            eachEmp+=`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.firstName}</td>
                            <td>${emp.lastName}</td>
                            <td>${emp.email}</td>
                            <td>${emp.gender}</td>
                            <td>${emp.location}</td>
                        </tr>`
        }
        document.querySelector('#display-emps').innerHTML=eachEmp;
    }
}



let maleEmps=employess.filter((emp)=>
{
    return emp.gender=='Male';
});

let femaleEmps=employess.filter((emp)=>
{
        return emp.gender=='Female';
});


let allEmpsBtn=document.querySelector('#all-emps');
let maleEmpsBtn=document.querySelector('#male-emps');
let femaleEmpsBtn=document.querySelector('#female-emps');

allEmpsBtn.addEventListener('click',()=>
{
    displayEmps(employess);
});

maleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(maleEmps);
});

femaleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(femaleEmps);
});

let inputEle=document.querySelector('#usn');
inputEle.addEventListener('keyup',function()
{
    let username=inputEle.value.toUpperCase().trim();;
    let empsFiltered=searchEmps(username,employess);
    if(username.length>0)
    {
        displayEmps(empsFiltered);
    }
    else 
    {
        document.querySelector('#display-emps').innerHTML="No Rows Selected";
    }
});

function searchEmps(usn,emps)
{
    let filteredEmps=[];
    for(let emp of emps)
    {
        let oName=emp.firstName.toUpperCase().trim();

        if(oName.startsWith(usn))
        {
            filteredEmps.push(emp);
        }
    }
    return filteredEmps;
}