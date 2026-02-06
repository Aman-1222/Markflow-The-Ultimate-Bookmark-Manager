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
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-200">
      {/* Top Section */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 rounded-md object-cover"
        />

        <div className="flex-1">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>

          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
          {category}
        </span>

        <span className="text-sm text-yellow-500 font-medium">⭐ {rating}</span>
      </div>
    </div>
  );
}
