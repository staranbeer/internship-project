import Footer from "./components/Layout/Footer";
import Main from "./components/Layout/Main";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:overflow-scroll flex bg-gray-100 flex-col h-full">
        <div className="flex-1">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
