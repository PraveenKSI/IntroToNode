let header = document.querySelector("header");
getData();
async function getData(){
    try{
        const response = await fetch("http://localhost:4000/data");
        const data = await response.json()
        showFilter(data);
    }
    catch(err){
        console.log(err);
    }
}

function showFilter(data){

    for(let obj in data){

        let div = document.createElement("div");
        div.innerHTML = obj;
        div.classList.add("filter-tags",obj);
        header.appendChild(div);

        div.addEventListener("click",()=>{
            for(item of data[obj]){
                let li = document.createElement("li");
                li.innerHTML = "Name:"+ item.name+" RollNo:"+item.rollNo;
                li.className = "user-info-list";
                div.appendChild(li);
            }
        })
    }
}