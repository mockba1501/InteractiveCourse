import { useEffect, useState } from "react";

const UserProfileForum = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        console.log("We have an effect!!")
        const errorObj = {};

        if(name.length > 0 && name.length < 6)
        {
            console.log("Error");
            errorObj.name = "The size of the name should be more than 6";
        }
        
        setErrors(errorObj);
    },[name, email])
  return (
    <div>
      <form>
        <div>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            value={name} 
            id="name" 
            onChange={(e) =>{
                setName(e.target.value)
            }}
            />
            {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} id="email"
            onChange={(e) =>{
                setEmail(e.target.value)
            }} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" 
            onChange={(e) =>{
                setPassword(e.target.value)
            }}/>
        </div>
            <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserProfileForum
