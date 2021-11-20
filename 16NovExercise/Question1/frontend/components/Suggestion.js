import "./Suggestion.css";

export default function Suggestion(props){
    const userData = props.userInfo.map((obj)=>{
        return obj.username;
    })
    return(
        <div className = "suggestion-container">
            {userData.filter((item)=>{
                if(item.includes(props.userKey)){
                    return true;
                }
                return false;
            }).map((item)=>{
                return <p key = {Math.random().toString()}>{item}</p>;
            })}
        </div>
    )
}