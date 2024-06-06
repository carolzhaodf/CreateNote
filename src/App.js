import "./components/css/App.css";
import Header from "./components/NoteComponents/Header";
import Notes from "./components/NoteComponents/Notes";
// import Notes from "./components/NoteComponents/Notes";
// import CreateNote from "./components/NoteComponents/CreateNote";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
