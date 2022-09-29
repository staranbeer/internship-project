import { FormEvent, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const keywords = ["Moon", "Astronaut", "Lunar", "flight"];

const Sidebar = () => {
  const [input, setInput] = useState("");
  const [] = useFetch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim().length !== 0) {
      // get data
    } else {
      return;
    }

    setInput("");
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
          <div className="flex-1 lg:hidden">
            <select id="keywords" className="select w-full cursor-pointer">
              <option value="">--Select Keywords--</option>
              {keywords.map((keyword) => {
                return (
                  <option key={keyword} value={keyword}>
                    {keyword}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="hidden lg:flex flex-wrap gap-3">
          {keywords.map((keyword) => (
            <button className="btn btn-outline truncate" key={keyword}>
              {keyword}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
