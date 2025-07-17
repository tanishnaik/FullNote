import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  const handleDelete = () => {
    onDelete(note._id);
  };

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid gray' }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;
