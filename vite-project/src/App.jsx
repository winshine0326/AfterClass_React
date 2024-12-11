import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comment from './Comment.jsx';
import newComments from './newComments.js';
// import './App.css'

const comments = newComments;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {comments.map((item)=>{
        return <Comment name={item.name} comment={item.comment}/>
      })}
    </div>
  )
}

export default App
