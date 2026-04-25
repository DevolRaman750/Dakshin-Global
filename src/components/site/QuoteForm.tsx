import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["individual", "business"]),
  category: z.string().min(1),
  origin: z.string().trim().min(1).max(100),
  destination: z.string().min(1),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(6).max(30),
  weight: z.string().max(100).optional(),
  notes: z.string().max(1000).optional(),
});

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    type: "" as "" | "individual" | "business",
    category: "",
    origin: "",
    destination: "",
    name: "",
    email: "",
    whatsapp: "",
    weight: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const set = (k: keyof typeof data, v: string) => setData(d => ({ ...d, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const result = schema.safeParse(data);
    if (!result.success) {
      setErr(result.error.issues[0]?.message ?? "Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#F4F6F8] overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-50 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="pill-tag">/ GET A QUOTE</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-[#0F172A] leading-[0.95]">
            START YOUR <span className="font-italic-serif text-brand normal-case">Passage</span>
          </h2>
          <p className="mt-5 text-[#334155]">Tell us what you need. We'll handle the rest.</p>
        </div>

        {submitted ? (
          <div className="card-dakshin p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-display text-3xl text-[#0F172A] mb-3">Enquiry received</h3>
            <p className="text-[#334155]">Thanks {data.name}. We'll respond within 4 business hours AEST.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="card-dakshin p-8 md:p-12">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-10">
              {[1,2,3].map(n => (
                <div key={n} className="flex-1 h-1 rounded-full bg-[#E2E8F0] overflow-hidden">
                  <div className={`h-full bg-brand transition-all duration-500 ${step >= n ? "w-full" : "w-0"}`} />
                </div>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl text-[#0F172A] mb-6">Step 1 — Who are you?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(["individual", "business"] as const).map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => { set("type", t); setStep(2); }}
                      className={`p-8 rounded-xl border text-left transition-all ${
                        data.type === t
                          ? "border-[#C8530A] bg-[#FFF7ED]"
                          : "border-[#E8ECF0] hover:border-[#C8530A]/50 bg-white"
                      }`}
                    >
                      <div className="text-3xl mb-3">{t === "individual" ? "🧍" : "🏢"}</div>
                      <div className="font-display text-xl text-[#0F172A] mb-1">
                        I'm an {t === "individual" ? "Individual" : "Business"}
                      </div>
                      <div className="text-sm text-[#334155]">
                        {t === "individual" ? "Personal shipping or sourcing" : "Recurring or commercial freight"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="font-display text-2xl text-[#0F172A] mb-2">Step 2 — What are you shipping?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Personal Effects","Custom Sourcing","Business Cargo","Not Sure Yet"].map(c => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => set("category", c)}
                      className={`p-3 text-xs uppercase tracking-wider rounded-full border transition-all ${
                        data.category === c ? "border-[#C8530A] bg-[#C8530A] text-white" : "border-[#CBD5E1] text-[#334155] hover:border-[#C8530A]/60"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-3">
                  <input className="input-dakshin" placeholder="Origin city in India" value={data.origin} onChange={e => set("origin", e.target.value)} maxLength={100}/>
                  <select className="input-dakshin" value={data.destination} onChange={e => set("destination", e.target.value)}>
                    <option value="">Destination in Australia</option>
                    <option>Sydney</option><option>Melbourne</option><option>Brisbane</option><option>Perth</option><option>Other</option>
                  </select>
                </div>
                <div className="flex justify-between pt-3">
                  <button type="button" onClick={() => setStep(1)} className="text-[#334155] hover:text-[#0F172A] text-sm uppercase tracking-wider">← Back</button>
                  <button type="button" onClick={() => setStep(3)} disabled={!data.category || !data.origin || !data.destination} className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">Continue</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-[#0F172A] mb-2">Step 3 — Contact Details</h3>
                <input className="input-dakshin" placeholder="Full name" value={data.name} onChange={e => set("name", e.target.value)} maxLength={100}/>
                <input className="input-dakshin" type="email" placeholder="Email" value={data.email} onChange={e => set("email", e.target.value)} maxLength={255}/>
                <input className="input-dakshin" placeholder="WhatsApp number" value={data.whatsapp} onChange={e => set("whatsapp", e.target.value)} maxLength={30}/>
                <input className="input-dakshin" placeholder="Approx. weight or volume (optional)" value={data.weight} onChange={e => set("weight", e.target.value)} maxLength={100}/>
                <textarea className="input-dakshin min-h-[110px]" placeholder="Additional notes (optional)" value={data.notes} onChange={e => set("notes", e.target.value)} maxLength={1000}/>
                {err && <div className="text-sm text-[#DC2626]">{err}</div>}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => setStep(2)} className="text-[#334155] hover:text-[#0F172A] text-sm uppercase tracking-wider sm:self-center">← Back</button>
                  <button type="submit" className="btn-primary flex-1 justify-center">Send My Enquiry</button>
                </div>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-[#E2E8F0] text-center space-y-3">
              <a href="https://wa.me/61424567228" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-[var(--brand-hover)] text-sm font-semibold">
                Prefer WhatsApp? Message us directly →
              </a>
              <p className="text-xs text-[#94A3B8]">🔒 Your details are never shared. We respond within 4 business hours AEST.</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
