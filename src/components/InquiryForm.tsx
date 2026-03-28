'use client';

import { useState } from 'react';
import { DemoModal } from '@/components/ui';

const labels: Record<string, {
  heading: string;
  name: string;
  phone: string;
  loanType: string;
  loanTypes: string[];
  message: string;
  submit: string;
  response: string;
}> = {
  en: {
    heading: 'Get a Free Quote',
    name: 'Full Name',
    phone: 'Phone Number',
    loanType: 'Loan Type',
    loanTypes: ['Personal Loan', 'Business Financing', 'Emergency Fund', 'Debt Consolidation', 'Other'],
    message: 'Brief Description',
    submit: 'Submit Inquiry',
    response: "We'll respond within 24 hours",
  },
  ms: {
    heading: 'Dapatkan Sebut Harga Percuma',
    name: 'Nama Penuh',
    phone: 'Nombor Telefon',
    loanType: 'Jenis Pinjaman',
    loanTypes: ['Pinjaman Peribadi', 'Pembiayaan Perniagaan', 'Dana Kecemasan', 'Penyatuan Hutang', 'Lain-lain'],
    message: 'Penerangan Ringkas',
    submit: 'Hantar Pertanyaan',
    response: 'Kami akan membalas dalam masa 24 jam',
  },
};

export default function InquiryForm({ locale }: { locale: string }) {
  const [showModal, setShowModal] = useState(false);
  const t = labels[locale] ?? labels.en;

  return (
    <>
      <form
        onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}
        className="space-y-5"
      >
        <div>
          <label htmlFor="inquiry-name" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-title)' }}>
            {t.name}
          </label>
          <input
            id="inquiry-name"
            type="text"
            required
            className="w-full rounded-lg border border-[var(--color-primary)]/20 bg-white px-4 py-3 text-[var(--color-text-body)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-title)' }}>
            {t.phone}
          </label>
          <input
            id="inquiry-phone"
            type="tel"
            required
            className="w-full rounded-lg border border-[var(--color-primary)]/20 bg-white px-4 py-3 text-[var(--color-text-body)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="inquiry-type" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-title)' }}>
            {t.loanType}
          </label>
          <select
            id="inquiry-type"
            required
            className="w-full rounded-lg border border-[var(--color-primary)]/20 bg-white px-4 py-3 text-[var(--color-text-body)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 min-h-[44px]"
          >
            <option value="">—</option>
            {t.loanTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-message" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-title)' }}>
            {t.message}
          </label>
          <textarea
            id="inquiry-message"
            rows={3}
            className="w-full rounded-lg border border-[var(--color-primary)]/20 bg-white px-4 py-3 text-[var(--color-text-body)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-3 font-semibold transition-colors hover:opacity-90 min-h-[44px]"
          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
        >
          {t.submit}
        </button>

        <p className="text-center text-sm" style={{ color: 'var(--color-text-body)' }}>
          {t.response}
        </p>
      </form>
      <DemoModal open={showModal} onClose={() => setShowModal(false)} locale={locale} />
    </>
  );
}
