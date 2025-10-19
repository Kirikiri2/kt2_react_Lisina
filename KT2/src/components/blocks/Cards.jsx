import ProductItem from "./ProductItem";

export default function Cards({ data, onChangeCount, onDelete }) {
  return (
    <div className="container m-auto">
      <div className="flex flex-wrap gap-4 mt-6">
        {data.map((item) => (
          <ProductItem  
            key={item.id}
            item={item}
            onChangeCount={onChangeCount}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
