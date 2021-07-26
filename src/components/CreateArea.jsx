import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';



export default function CreateArea(props) {
    const [note,setNote] = useState({
        title:'',
        content:''
    });
    const [isExpanded,setExpanded] = useState(false);

    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevNote => {
            return{...prevNote,[name]:value}
        })
    }
    function submitNote(event){
        setNote({
            title:'',
            content:''
        })
        props.onAdd(note);
        event.preventDefault();
    }
    function expand(){
        setExpanded(true)
    }
    
    return (
        <div>
         <form >
        {isExpanded &&   <input name="title" onChange={handleChange}placeholder="Title" value={note.title} />}
      <textarea onClick={expand} name="content" onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded}>
        <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
      </form>
        </div>
    )
}
