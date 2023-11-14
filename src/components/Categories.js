import React from "react";
import { useState } from "react";

function Categories({ value, onClickCategory }) {
  // const [activeIndex, setActiveIndex] = useState();

  const categories = [
    "Всі",
    "М*ясні",
    "Веганська",
    "Гриль",
    "Гостра",
    "Закрита",
  ];
  // function activeFunct(index) {
  //   return setActiveIndex(index);
  // }
  return (
    <div class="categories">
      <ul>
        {categories.map((categ, index) => (
          <li
            className={value === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {categ}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
