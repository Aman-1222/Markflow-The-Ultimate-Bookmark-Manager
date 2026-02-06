import "./globals.css";

export const metadata = {
  title: "Markflow Prototype",
  description: "Bookmark Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B1220] text-gray-100">{children}</body>
    </html>
  );
}
