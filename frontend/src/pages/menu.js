import axios from "axios";
import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("/api/menu").then((res) => setMenu(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Our Menu</h1>
      <ul className="mt-4">
        {menu.map((item) => (
          <li key={item._id} className="border-b py-2">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}