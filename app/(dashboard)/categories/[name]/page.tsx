import { getProductsByCategory } from "../../../../lib/product";
import BookmarkCard from "../../../../components/BookmarkCard";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params; // ✅ VERY IMPORTANT

  const products = await getProductsByCategory(name);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">{name}</h1>

      <div className="grid grid-cols-3 gap-6">
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
