import React from 'react'
import useFetch from './components/useFetch'


const Posts = () => {
    const [data]= useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
    <div className='container'>
      {
        data && data.map((item)=> (
            <div key={item.id}>{item.title}</div>
          
        ))
      }
    </div>
  )
    
}

export default Posts
