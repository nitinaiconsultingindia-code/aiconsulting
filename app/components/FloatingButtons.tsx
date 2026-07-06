"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/nitinkumar-kanodiya-03008a225/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917984804249"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>

    </div>
  );
}