var elForm = document.querySelector('.form__input');
var elName = document.querySelector('.CompanyName');
var elJob = document.querySelector('.JobTitle');
var elSalary = document.querySelector('.Salary');
var elButton = document.querySelector('.btn');
var elList = document.querySelector('.hero__box-cards');


var users =[
    {
        id:1,
       
        jobName:"Frontend",
        name:"Google",
        salary:'1200$',
        

    },
    {
        id:1,
        
        jobName:"Frontend",
        name:"Google",
        salary:'1200$',
       
    }
    
    
];


 function render (){
    elList.innerHTML=null
    for (let i = 0; i < users.length; i++) {
       
        var elLi =document.createElement('li');
        

        elLi.innerHTML=`     
        <h2 class="font-bold bg-[#a1a1aa] px-[10px] py-[5xp]"> ${users[i].jobName}</h2>
        
        <div class="first__card border sahdow-xl bg-white mb-[30px]  ">
        
            <p class="px-[10px] py-[15px]">
                Company:
                <span class=" name font-bold"> ${users[i].name}</span>
            </p>
            <p class="px-[10px] py-[15px]">
                Salary:
                <span class="font-bold">${users[i].salary}</span>
            </p>
        </div>
        
        
        `
        
        elList.appendChild(elLi);
        console.log(users[i]);
        
    }
 }
 

 function onSubmit (evt){
  
    evt.preventDefault();
    
    var newUser ={
        id:users.length+1,
        name:elName.value.trim (),
        jobName:elJob.value.trim(),
        salary:elSalary.value.trim(), 
    };
    
    users.push(newUser);
    elName.value=null;
    elJob.value=null;
    elSalary.value=null;
    
    console.log(users);
    
    render();
}
 elForm.addEventListener('submit',onSubmit);
 render()    






