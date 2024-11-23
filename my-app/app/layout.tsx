import "./globals.css"; // Correct path for globals.css in the app directory
import Header from "./components/Header"; // Assuming Header is in the components folder
import Footer from "./components/Footer"; // Assuming Footer is in the components folder

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header /> {/* Add Header component here */}
        <main>{children}</main> {/* This is where the page content will render */}
        <Footer /> {/* Add Footer component here */}
      </body>
    </html>
  );
}
