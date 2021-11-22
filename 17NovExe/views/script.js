let userTable = document.querySelector(".user-table");
async function getData(){
    try{
        let response = await fetch("/userlist");
        data = await response.json();
        showData(data);
    }
    catch(err){
        console.log(err);
    }
}
console.log("hello");

function showData(data){
    console.log(data);
    // for(let obj in data){
    //     console.log(obj);
    // }    
}

getData();