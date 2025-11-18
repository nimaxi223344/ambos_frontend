import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, image }) {
  const formatPrice = (price) => {
    const numPrice = typeof price === "string" ? parseFloat(price.replace(",", ".")) : price;
    if (isNaN(numPrice)) return price;
    return Math.round(numPrice).toLocaleString("es-AR");
  };

  const displayPrice = formatPrice(price);
  const imgSrc = image || "https://via.placeholder.com/400x300?text=Producto";

  return (
    <Link 
      to={`/producto/${id}`} 
      className="bg-white flex flex-col cursor-pointer hover:scale-[1.02] shadow hover:shadow-lg transition duration-200 ease-out"
    >
      <img src={imgSrc} alt={name} className="w-full h-64 object-cover"/>
      <div className="flex flex-row items-center justify-between text-center p-4 gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base truncate">{name}</h3>
          <p className="text-gray-500">${displayPrice}</p>
        </div>
      </div>
    </Link>
  );
}