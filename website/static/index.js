function deleteNote(noteID) {
  fetch("/delete", {
      method:"POST",
      body:JSON.stringify({ noteID: noteID }),
      }).then((_res)=> {
          window.location.href="/";
      });
}
