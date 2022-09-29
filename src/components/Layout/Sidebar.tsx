import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { CardProps } from "../util/Card";
import { transformData } from "../util/lib";

const keywords = ["Moon", "Astronaut", "Lunar", "flight"];

interface SidebarProps {
  setData: (data: CardProps[]) => void;
}

let URL = "https://images-api.nasa.gov/search?page=2&q=";

const Sidebar = ({ setData }: SidebarProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim().length !== 0) {
      fetch(`${URL}${input || "moon"}`)
        .then((res) => res.json())

        // a handy util to change the count of photos on the page
        .then((data) => data.collection.items.slice(0, 2))
        .then(transformData)
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err.message));
      setInput("");
    } else {
      return;
    }
  };

  return (
    <div>
      <aside className="p-5  gap-4 flex flex-col max-w-lg lg:w-[450px] lg:border-r mx-auto">
        <form className=" flex flex-col  gap-3 mt-3" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="input "
            placeholder="Search"
          />
          <button className="btn">Submit</button>
        </form>

        <div className="flex items-center gap-4 ">
          <label htmlFor="keywords" className="capitalize font-medium text-sm ">
            filter your search
          </label>
          <select id="keywords" className="select flex-1 ">
            <option value="">--Select Keywords--</option>
            {keywords.map((keyword) => {
              return <option key={keyword}>{keyword}</option>;
            })}
          </select>

          <div className="hidden">
            {keywords.map((keyword) => (
              <button className="btn" key={keyword}>
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
