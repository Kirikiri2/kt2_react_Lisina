import { useState } from "react";
import Cards from "../components/blocks/Cards";

export default function IndexPage() {
  const [data, setData] = useState([
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 24 },
  ]);

  function InputInfo() {
    const input = prompt("Введите имя и цену через пробел, пример: Велосипед 1000");
    if (!input) return alert('Do not get items info'); 

    const [name, priceStr] = input.split(" ");
    const price = Number(priceStr);

    if (!name || isNaN(price)) {
      alert("Неправильный ввод. Пример: Велосипед 1000");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      count: 1, 
    };

    setData((products) => [...products, newProduct]);
  }

  function changeCount(id, type) {
    setData((prev) =>
      prev.map((item) => {
          if (item.id !== id) return item;
          let newCount = 0;
          if (type === "plus") {
            if (item.count >= 25) {
                newCount = item.count - 1;
                alert('Can not own more');
              return item;
            }
            return { ...item, count: item.count + 1 };
          } else if (type === "minus") {
            newCount = item.count - 1;
            return { ...item, count: newCount };
          }
          return item;
        })
        .filter((it) => it.count > 0)
    );
  }

  function deleteProduct(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <button className="border-2 border-amber-400 p-3 rounded-2xl" onClick={InputInfo}>Добавить товар</button>
      <Cards data={data} onChangeCount={changeCount} onDelete={deleteProduct} />
    </div>
  );
}
