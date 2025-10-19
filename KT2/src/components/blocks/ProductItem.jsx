export default function ProductItem({ item, onChangeCount, onDelete }) {
  return (
    <div className="mx-auto flex items-center justify-around gap-3">
      <div className="container flex flex-col items-center justify-center gap-5 border-2 border-black py-7 px-10" onDoubleClick={() => onDelete(item.id)}>
        <h3>{item.name}</h3>
        <p>Цена: {item.price}</p>
        <div className="container flex gap-4 items-center justify-center">
          <button onClick={() => onChangeCount(item.id, "minus")}>-</button>
          <p>{item.count}</p>
          <button onClick={() => onChangeCount(item.id, "plus")}>+</button>
      </div>
    </div>
    </div>
    
  );
}
