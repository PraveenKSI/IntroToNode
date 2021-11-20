import {useEffect, useState} from 'react';
import './QueryForm.css';
import Suggestion from './Suggestion';

function QueryForm(){

    const [username,setUsername] = useState("");
    const [data,setData] = useState("");

    async function getData(){
        try{
            const response = await fetch("http://localhost:4000/data");
            const tempData = await response.json();
            setData(tempData);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    function searchHandler(event){
        setUsername(event.target.value);
    }

    return(
        <div>
            <form>
                <input type = "text" onChange = {searchHandler}/>
            </form>
            {username && <Suggestion userKey = {username} userInfo = {data}/>}
        </div>
    )
}

export default QueryForm;