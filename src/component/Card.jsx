import React, {useState} from 'react';


const Card = (props) => {
  const {onAdd} = props;
  const initialState = {title: "", desc: ""}
  const [note, setNote] = useState(initialState);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setNote(prevNote => {
        return {...prevNote, [name]: value}
      });
    }

  const handleSubmit = (e) => {
    onAdd(note);
    setNote(initialState);
    e.preventDefault();
  }

 return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title..." value={note.title} onChange={handleChange}/>
        <textarea  name="desc" placeholder="Take a note..." rows="3" value={note.desc} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default Card;
