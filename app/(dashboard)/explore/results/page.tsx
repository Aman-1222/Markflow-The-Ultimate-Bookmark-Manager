import { getProductsByCategory } from "../../../../lib/product";
import BookmarkCard from "../../../../components/BookmarkCard";

export default async function ExploreResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ categories?: string }>;
}) {
  const params = await searchParams;

  const categories = params.categories?.split(",") || [];

  let products: any[] = [];

  for (const category of categories) {
    const data = await getProductsByCategory(category);
    products = [...products, ...data];
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Explore Results</h1>

      {products.length === 0 && <p>No products found.</p>}

      <div className="grid grid-cols-3 gap-6">
        {products.map((product: any) => (
          <BookmarkCard
            key={`${product.id}-${product.category}`}
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
