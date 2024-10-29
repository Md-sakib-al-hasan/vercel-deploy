import { useEffect, useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [sk,setsk]= useState([]);
  console.log(sk)

  useEffect(() => {
    fetch( import.meta.env.VITE_API_URL)
    .then(res => res.json())
    .then(data => setCount(data))
},[])

  return (

    <>
      <ul>
           {
            count?.map(item => <li key={item.id}>{item.name}</li>)
           } 
      </ul>
      <ul>
      {
            count?.map(item => <li key={item.id}>{item.email}</li>)
           }
      </ul>
      <p>
        {setsk(["sk","si"])}
      </p>
        
    </>
  )
}

export default App
