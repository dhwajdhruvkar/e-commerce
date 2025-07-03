import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#002b60] border-t pt-8 pb-5 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters */}
        <div>
          <h4 className="font-semibold mb-2">Filters</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                All
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white rounded-full p-2 hover:opacity-90"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white rounded-full p-2 hover:opacity-90"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white rounded-full p-2 hover:opacity-90"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-left text-sm text-gray-500">
        &copy; 2024 Indian
      </div>
    </footer>
  );
}
