import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5000/api/notes',
});

export const getNotes = () => API.get('/');
export const addNote = (note) => API.post('/', note);
export const deleteNote = (id) => API.delete(`/${id}`);
