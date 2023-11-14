import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import SkeletonPB from "../components/SkeletonPB";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState({ name: "по популярності", sort: "rating" });

  const rating = category > 0 ? `category=${category}` : "";
  useEffect(() => {
    setLoading(true);
    console.log(category);
    fetch(
      `https://653838fca543859d1bb1522f.mockapi.io/data?${rating}&sortBy=${sort.sort}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        console.log("massiv", arr);
        setItems(arr);
        setLoading(false);
      });
  }, [category, sort]);
  return (
    <>
      <div class="container">
        <div class="content__top">
          <Categories
            value={category}
            onClickCategory={(id) => setCategory(id)}
          />
          <Sort value={sort} setOpen={(id) => setSort(id)} />
        </div>

        <h2 class="content__title">Всі піци</h2>
        <div class="content__items">
          {isLoading === true
            ? [...new Array(7)].map(() => <SkeletonPB />)
            : items.map((value, index) => (
                <>
                  <PizzaBlock
                    name={value.title}
                    price={value.price}
                    image={value.imageUrl}
                    size={value.sizes}
                    type={value.types}
                  />
                </>
              ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
