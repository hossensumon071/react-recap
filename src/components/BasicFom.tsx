import { useState } from "react"


const BasicFom = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log({name, email})
        console.log(user)
    }
  return (
    <form onSubmit={handleSubmit}>
        {/* <input 
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
         />
        <input 
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        name="name"
        id="name"
         /> */}
        <input 
        onChange={(e) => setUser({...user, name: e.target.value})}
        type="text"
        name="name"
        id="name"
         />
        <input 
        onChange={(e) => setUser({...user, email: e.target.value})}
        type="text"
        name="name"
        id="name"
         />
    </form>
  )
}

export default BasicFom