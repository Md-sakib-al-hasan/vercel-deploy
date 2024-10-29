import { useEffect, useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState([])

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
        
    </>
  )
}

export default App
