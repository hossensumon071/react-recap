import { useState } from "react"

const RefactoringForm = () => {
    
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log({name, email})
        console.log(user)
    }

    // const handleNameChange = (e) => {
    //     setUser({...user, name: e.target.value})
    // }

    // const handleEmailChange = (e) => {
    //     setUser({...user, name: e.target.value})
    // }

    // DRY --> do not repeat yourself 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(user);
        const inputName = e.target.name;
        const value = e.target.value;

        setUser({...user, [inputName]: value})
    }


  return (
    <form onSubmit={handleSubmit}>
    <input 
    onChange={handleChange}
    type="text"
    name="name"
    id="name"
     />
    <input 
    onChange={handleChange}
    type="text"
    name="email"
    id="name"
     />
</form>
  )
}

export default RefactoringForm