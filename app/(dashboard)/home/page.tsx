import { getProducts } from "../../../lib/product";
import BookmarkCard from "../../../components/BookmarkCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-100">Home</h1>
        <p className="text-sm text-gray-400 mt-2">
          Discover and manage your bookmarks.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-8">
        {products.map((product: any) => (
          <BookmarkCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
            category={product.category.toUpperCase()}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
