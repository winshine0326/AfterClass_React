import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comment from './Comment.jsx';
// import './App.css'

const comments = [
  {
    name : "류승찬",
    comment : "하이요",
  },
  {
    name : "아니",
    comment : "진짜로",
  },
  {
    name : "밥",
    comment : "배고프다",
  },
  {
    name : "집",
    comment : "가고싶다",
  },
]

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
