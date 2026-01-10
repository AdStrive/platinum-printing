import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full sm:w-[250px] border rounded-lg p-4 shadow-md bg-white flex flex-col items-center text-center">
      <div className="-mt-14">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="rounded-full shadow-lg"
        />
      </div>
      <h3 className="text-lg font-bold mt-4">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.material} | {product.size}</p>
      <button className="mt-4 px-4 py-1 bg-[#193F85] text-white text-sm rounded hover:bg-[#0A1C3F]">Request Order</button>
    </div>
  );
};

export default ProductCard;
