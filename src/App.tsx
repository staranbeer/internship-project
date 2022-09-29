import Main from "./components/Layout/Main";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
