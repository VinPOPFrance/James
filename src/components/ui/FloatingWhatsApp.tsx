import { businessInfo } from "@/config/business-info";

const whatsappUrl = `https://wa.me/${businessInfo.phone.replace(/\D/g, "")}`;

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#1DAA5A] bg-[#25D366] text-white shadow-[0_14px_30px_-16px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1FB85A] md:bottom-6 md:right-6"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-current">
        <path d="M19.05 4.94A9.83 9.83 0 0 0 12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.47 1.33 4.98L2 22l5.24-1.37a9.88 9.88 0 0 0 4.73 1.2h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 0 0-2.85-6.97ZM12 20.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.81.83-3.03-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.53 3.69-8.22 8.23-8.22a8.16 8.16 0 0 1 5.82 2.41 8.14 8.14 0 0 1 2.4 5.81c0 4.53-3.69 8.23-8.22 8.23Zm4.51-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.56.12-.17.25-.65.8-.8.97-.15.17-.3.19-.56.06-.25-.12-1.06-.39-2.02-1.25a7.5 7.5 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.87-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04s.88 2.36 1 2.52c.12.17 1.73 2.64 4.19 3.7.58.25 1.04.41 1.39.52.58.18 1.11.16 1.53.1.46-.07 1.47-.6 1.67-1.19.21-.58.21-1.09.15-1.19-.06-.11-.22-.17-.48-.29Z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
