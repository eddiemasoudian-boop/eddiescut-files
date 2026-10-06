import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import BookingModal from '@/components/BookingModal';
import BackToTop from '@/components/BackToTop';
import BackToPrevious from '@/components/BackToPrevious';
import ClientServiceList from '@/components/ClientServiceList';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) return { title: 'Service ikke fundet' };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/behandlinger/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      
      <main className="pt-32 pb-24 bg-brand-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button with tab preservation */}
          <div className="mb-8">
            <BackToPrevious tabSlug={service.slug} />
          </div>

          {/* SEO H1 Headline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              {service.title} i Hellerup
            </h1>
            <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
              {service.seoDescription}
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/10 p-5 md:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative z-10">
              
              {/* Left Image */}
              <div className="lg:col-span-5 relative">
                <div className="sticky top-28 aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-charcoal/5 bg-brand-offwhite">
                  <Image 
                    src={service.image}
                    alt={`${service.title} hos Eddie's Cut frisørsalon i Hellerup`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent mix-blend-multiply"></div>
                </div>
              </div>

              {/* Right Content */}
              <ClientServiceList 
                title={service.title} 
                services={service.services} 
                faqs={service.faqs}
              />

            </div>
          </div>

        </div>
      </main>

      <Contact />
      <BookingModal />
      <BackToTop />
      <Footer />
    </>
  );
}