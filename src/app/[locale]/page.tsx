import { business } from '@/data/business';
import type { Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Location from '@/components/Location';
import InquiryForm from '@/components/InquiryForm';
import { Section, Card, Grid, Accordion, Button, Badge, HoursTable, ReviewStars } from '@/components/ui';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
}

interface CredentialItem {
  label: string;
}

interface FaqItem {
  title: string;
  content: string;
}

const sectionLabels: Record<string, Record<string, string>> = {
  en: {
    services: 'Our Services',
    whyUs: 'Why Choose Us',
    faq: 'Frequently Asked Questions',
    hours: 'Operating Hours',
    contact: 'Contact Us',
    reviews: 'What Our Customers Say',
    applyNow: 'Apply Now',
    getQuote: 'Get a Free Quote',
    kpktRegistered: 'KPKT Registered Community Credit Service',
  },
  ms: {
    services: 'Perkhidmatan Kami',
    whyUs: 'Mengapa Pilih Kami',
    faq: 'Soalan Lazim',
    hours: 'Waktu Operasi',
    contact: 'Hubungi Kami',
    reviews: 'Apa Kata Pelanggan',
    applyNow: 'Mohon Sekarang',
    getQuote: 'Dapatkan Sebut Harga Percuma',
    kpktRegistered: 'Perkhidmatan Kredit Komuniti Berdaftar KPKT',
  },
};

export default function LocalePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const content = business.content[locale];
  const theme = business.theme;
  const t = sectionLabels[locale] ?? sectionLabels.en;
  const services = (content.loanServices ?? []) as unknown as ServiceItem[];
  const credentials = (content.qualifications ?? []) as unknown as CredentialItem[];
  const faq = (content.faqs ?? []) as unknown as FaqItem[];

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />

        {/* Trust Bar */}
        <div style={{ backgroundColor: theme.primaryDark }}>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-5 sm:gap-10">
            {content.trustBar?.items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-center">
                <span className="text-lg font-bold" style={{ color: theme.onPrimaryDark }}>{item.value}</span>
                <span className="text-xs uppercase tracking-wider" style={{ color: theme.onPrimaryDark }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <Section id="services">
          <h2 className="font-display text-3xl font-bold text-center mb-10" style={{ color: theme.textTitle }}>
            {t.services}
          </h2>
          <Grid cols={2}>
            {services.map((service, i) => (
              <Card key={i}>
                <Badge variant="accent">{service.price}</Badge>
                <h3 className="mt-3 font-display text-xl font-bold" style={{ color: theme.textTitle }}>
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed" style={{ color: theme.textBody }}>
                  {service.description}
                </p>
              </Card>
            ))}
          </Grid>
          <div className="mt-10 text-center">
            <Button href="#inquiry" variant="secondary" size="lg">
              {t.applyNow}
            </Button>
          </div>
        </Section>

        {/* Why Choose Us — Credentials */}
        <Section id="credentials" className="bg-[var(--color-surface)]">
          <h2 className="font-display text-3xl font-bold text-center mb-10" style={{ color: theme.textTitle }}>
            {t.whyUs}
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: theme.primary }}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={theme.onPrimary} strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base font-medium pt-1.5" style={{ color: theme.textBody }}>
                  {cred.label}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Reviews */}
        {content.reviews.featured && content.reviews.featured.length > 0 && (
          <Section id="reviews">
            <h2 className="font-display text-3xl font-bold text-center mb-2" style={{ color: theme.textTitle }}>
              {t.reviews}
            </h2>
            <div className="flex justify-center mb-8">
              <ReviewStars rating={content.reviews.rating} count={content.reviews.count} />
            </div>
            <Grid cols={2}>
              {content.reviews.featured.map((review, i) => (
                <Card key={i}>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <svg key={j} className="h-5 w-5" fill={theme.primary} viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="leading-relaxed italic" style={{ color: theme.textBody }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold" style={{ color: theme.textTitle }}>
                    — {review.author}
                  </p>
                </Card>
              ))}
            </Grid>
          </Section>
        )}

        {/* Inquiry Form + Contact Info */}
        <Section id="inquiry" className="bg-[var(--color-surface)]">
          <h2 className="font-display text-3xl font-bold text-center mb-10" style={{ color: theme.textTitle }}>
            {t.getQuote}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {/* Form */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <InquiryForm locale={locale} />
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: theme.textTitle }}>
                  {t.contact}
                </h3>
                <div className="space-y-4">
                  <a href={`tel:${content.contact.phone}`} className="flex items-center gap-3 min-h-[44px]" style={{ color: theme.textBody }}>
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">{content.contact.phone}</span>
                  </a>
                  <a href="tel:011-21228224" className="flex items-center gap-3 min-h-[44px]" style={{ color: theme.textBody }}>
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">011-2122 8224</span>
                  </a>
                  <a
                    href={`https://wa.me/${content.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-h-[44px]"
                    style={{ color: '#075E54' }}
                  >
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.607-.7-6.475-1.907l-.452-.293-3.09 1.036 1.036-3.09-.293-.452A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: theme.textTitle }}>
                  {t.hours}
                </h3>
                <HoursTable hours={content.hours} />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        {faq.length > 0 && (
          <Section id="faq">
            <h2 className="font-display text-3xl font-bold text-center mb-10" style={{ color: theme.textTitle }}>
              {t.faq}
            </h2>
            <div className="mx-auto max-w-3xl rounded-xl bg-[var(--color-surface)] p-6 shadow-sm">
              <Accordion items={faq} />
            </div>
          </Section>
        )}

        {/* KPKT Badge */}
        <div className="py-8 text-center" style={{ backgroundColor: theme.surface }}>
          <p className="text-sm font-medium" style={{ color: theme.textBody }}>
            {t.kpktRegistered}
          </p>
        </div>

        <Location locale={locale} />
      </main>
      <Footer locale={locale} />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${content.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.607-.7-6.475-1.907l-.452-.293-3.09 1.036 1.036-3.09-.293-.452A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </>
  );
}
