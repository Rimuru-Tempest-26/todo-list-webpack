import './style.css';
import {
  addbook, showList, initUI, clearCompleted
} from './task.js';

initUI();

const addBtn = document.getElementById('add');
const taskInput = document.getElementById('task');

addBtn.addEventListener('click', () => {
  addbook(document.getElementById('task').value);
  document.getElementById('task').value = '';
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addbook(document.getElementById('task').value);
    document.getElementById('task').value = '';
  }
});

document.getElementById('clearCompleted').addEventListener('click', () => {
  clearCompleted();
});

showList();
