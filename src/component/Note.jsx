import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const {title, desc, onDelete, id} = props;

  const handleDelete = (e) => {
    onDelete(id)
  }

  return (
   <div className="note">
    <h1>{title} </h1>
    <p>{desc}</p>
    <button onClick={handleDelete}>
      <DeleteIcon />
    </button>
   </div>
   
  );
}

export default Note;
