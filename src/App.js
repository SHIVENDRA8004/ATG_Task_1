import Logined from "./components/Pages/Logined";
import NotLogin from "./components/Pages/NotLogin";

function App() {
  const user = JSON.parse(localStorage.getItem("AtgUser"));
  return <>{user ? <Logined name={user.fullname} /> : <NotLogin />}</>;
}

export default App;
