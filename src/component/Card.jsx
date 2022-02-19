import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const Card = (props) => {
  const {onAdd} = props;
  const initialState = {title: "", desc: ""}
  const [note, setNote] = useState(initialState);
  const [isExpanded, setExpanded] = useState(false);

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

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="desc"
          onClick={expand}
          onChange={handleChange}
          value={note.desc}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Card;
