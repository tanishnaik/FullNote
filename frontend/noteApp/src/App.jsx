import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notes');
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    if (!title || !content) return;
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      const newNote = await res.json();
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
      });
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Notes App</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddNote}>Add Note</button>

      <hr style={{ margin: '20px 0' }} />

      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
