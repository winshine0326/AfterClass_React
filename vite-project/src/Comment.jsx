import './Comment.css';
import { useState } from 'react';
function Comment() {
    const [good,setGood] = useState(0);
    const [bad,setBad] = useState(0);
    return (
        <div className="wrapper">
            <div className="imageContainer">
                <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
            </div>
            <div className="contentContainer">
                <span className="nameText">
                    안녕하세요. 댓글 만들고 있어요.
                    {/* {props.name} */}
                </span>
                <span className="okText">
                    <span onClick={()=>setGood(good+1)}>👍</span> {good}&nbsp;&nbsp;
                    <span onClick={()=>setBad(bad+1)}>👎</span>{bad}
                </span>

                {/* <span className='commentText'>{props.comment}</span> */}
            </div>
        </div>
    );
}
export default Comment;