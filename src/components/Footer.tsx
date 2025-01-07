export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Tony Radicchi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
