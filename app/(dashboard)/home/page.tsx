import { getProducts } from "../../../lib/product";
import BookmarkCard from "../../../components/BookmarkCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Home</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product: any) => (
          <BookmarkCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
            category={product.category}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
