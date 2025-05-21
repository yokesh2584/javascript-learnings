const noteForm = document.getElementById("noteForm");
const notesContainer = document.getElementById("notesContainer");
const noteInput = document.getElementById("noteInput");

window.addEventListener("DOMContentLoaded", () => {
  const getNotes = JSON.parse(localStorage.getItem("mynotes"));
  if (getNotes) notesContainer.innerHTML = getNotes;
});

const saveNotes = () => {
  localStorage.setItem("mynotes", JSON.stringify(notesContainer.innerHTML));
};

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteText = noteInput.value;
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `
  <p class="note-text">${noteText}</p>
  <div class="note-buttons">
    <button class="edit-btn">
      <i class="bi bi-pencil-fill"></i>
    </button>
    <button class="delete-btn">
      <i class="bi bi-trash-fill"></i>
    </button>
  </div>
  `;
  notesContainer.append(note);
  saveNotes();
  noteInput.value = "";
});

notesContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("bi-trash-fill")) {
    const note = target.closest(".note");
    note.remove();
    saveNotes();
  }

  if (target.classList.contains("bi-pencil-fill")) {
    const note = target.closest(".note");
    const noteText = note.querySelector(".note-text");

    let newNoteText;
    do {
      newNoteText = prompt("Edit your note:", noteText.textContent);
    } while (newNoteText === null && newNoteText.trim() === "");
    noteText.textContent = newNoteText;
    saveNotes();
  }
});
