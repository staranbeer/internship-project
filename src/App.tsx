import { useEffect, useState } from "react";
import Main from "./components/Layout/Main";
import Sidebar from "./components/Layout/Sidebar";
import { CardProps } from "./components/util/Card";
import { transformData } from "./components/util/lib";

let URL = "https://images-api.nasa.gov/search?q=moon&page=2";

const App = () => {
  let [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    let res = fetch(`${URL}`)
      .then((res) => res.json())

      // a handy util to change the count of photos on the page
      .then((data) => data.collection.items.slice(0, 20))
      .then(transformData)
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log("rerended");
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar setData={setData} />
      <Main data={data} />
    </div>
  );
};

export default App;
