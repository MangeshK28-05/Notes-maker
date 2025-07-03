document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("noteInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const notesContainer = document.getElementById("notesContainer");

  addNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();

    if (noteText === "") {
      alert("Please type something first!");
      return;
    }

    const note = document.createElement("div");
    note.className = "note";

    const noteContent = document.createElement("p");
    noteContent.textContent = noteText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
      notesContainer.removeChild(note);
    });

    note.appendChild(noteContent);
    note.appendChild(deleteBtn);
    notesContainer.appendChild(note);

    noteInput.value = "";
  });
});