import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note" style={{ background: "rgba(255,255,255,0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type..."
        onChange={textHandler}
        maxLength={charLimit}
      ></textarea>
      <div className="note_footer">
        <span className="label">{charLeft}</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
