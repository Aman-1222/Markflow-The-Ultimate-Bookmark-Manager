type BookmarkCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
};

export default function BookmarkCard({
  title,
  description,
  image,
  category,
  rating,
}: BookmarkCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={image} alt={title} className="w-12 h-12 object-cover mb-3" />

      <h2 className="font-semibold">{title}</h2>

      <p className="text-sm text-gray-500 mb-2">{description}</p>

      <div className="flex justify-between text-sm">
        <span className="bg-gray-200 px-2 py-1 rounded">{category}</span>

        <span>⭐ {rating}</span>
      </div>
    </div>
  );
}
