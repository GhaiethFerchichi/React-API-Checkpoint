import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users List</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "85%",
            alignItems: "center",
          }}
        >
          <UserList />
        </div>
      </header>
    </div>
  );
}

export default App;
