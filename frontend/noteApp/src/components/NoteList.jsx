import React from 'react';
import NoteItem from './NoteForm';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map(note => (
          <NoteItem key={note._id} note={note} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default NoteList;
