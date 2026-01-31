import { Github, Linkedin, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-3 pb-8">
        <div className="border-t border-gray-800 mt-8 pt-4 flex justify-center items-center">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Sanidhya Soni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
