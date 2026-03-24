import { Layout } from "@/components/layout/Layout";
import { GENERIC_PAGES } from "@/data/content";
import { useParams, Link } from "wouter";

interface Props {
  title?: string;
  content?: React.ReactNode;
  isSubpage?: boolean;
}

export default function GenericPage({ title, content, isSubpage }: Props) {
  const { slug } = useParams();
  
  const pageData = slug && GENERIC_PAGES[slug] 
    ? GENERIC_PAGES[slug] 
    : { title: title || "Strona w budowie", content: content || "Wkrótce pojawi się tutaj treść." };

  return (
    <Layout>
      <div className="bg-gray-50 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {isSubpage && (
            <Link href="/o-farbach-proszkowych" className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block hover:underline">
              O farbach proszkowych
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            {pageData.title}
          </h1>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none text-foreground/80 leading-relaxed">
            {typeof pageData.content === 'string' ? (
              <p>{pageData.content}</p>
            ) : (
              pageData.content
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
