import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  locale?: "en" | "nl";
}

export function PageLayout({ children, locale = "en" }: PageLayoutProps) {
  return (
    <>
      <Header locale={locale} />
      <main className="mx-auto max-w-6xl space-y-4 px-4 py-4 pb-8">
        {children}
      </main>
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <Footer locale={locale} />
      </div>
    </>
  );
}
