import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matt's Auto Service Centre | Honest Auto Repair in Halton Hills" },
      {
        name: "description",
        content:
          "Trusted auto repair in Halton Hills, ON. Honest work, fair pricing, and a mechanic who actually cares. Book your appointment today.",
      },
      { property: "og:title", content: "Matt's Auto Service Centre | Honest Auto Repair in Halton Hills" },
      {
        property: "og:description",
        content:
          "Trusted auto repair in Halton Hills, ON. Honest work, fair pricing, and a mechanic who actually cares.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: "🔧", name: "Engine & Diagnostics", desc: "We diagnose first, fix second. No guesswork, no unnecessary parts. Matt identifies the real problem and solves it." },
  { icon: "🛞", name: "Tires & Alignment", desc: "Tire swaps, wheel alignment, balancing, and rotation. Seasonal swaps done quickly at fair prices." },
  { icon: "🛑", name: "Brakes & Suspension", desc: "Brake pads, rotors, calipers, shocks, struts — everything that keeps your car safe and stable on the road." },
  { icon: "🔩", name: "Timing Belt & Major Service", desc: "Timing belts, water pumps, accessory belts, and more — done right at a fraction of dealership rates." },
  { icon: "🚗", name: "Vehicle Inspection", desc: "Pre-purchase inspections, safety checks, and second opinions. Know exactly what you're working with." },
  { icon: "🔑", name: "Keys & Electrical", desc: "Key programming, decoding, and electrical repairs — fast, accurate, and at a fraction of dealer cost." },
];

const reviews = [
  { text: "I just recently took my wife's car to Matt's Auto Service Centre thanks in large part to suggestions from a Facebook group. We had an awesome experience here! Matt took the time to explain what the issue was and the course of action that was needed.", author: "Neil Nacita", meta: "Local Guide · 13 reviews" },
  { text: "Needed a repair on the fly, as I was working out of town. Matt didn't hesitate to pull the truck in and take a look. Had me back on the road in no time! Thanks Matt's Auto Service.", author: "Stephen Bell", meta: "6 reviews" },
  { text: "Nothing but A++ service!! From Start to Finish, Matt and the team provide an A.B.C.D (Above and Beyond the Call of Duty) service.", author: "Al Win", meta: "Local Guide · 78 reviews" },
  { text: "Matt has been amazing to work with when dealing with my aging Mazda pickup. For the last 3 years, any time it's acted up I knew exactly who to call! Matt and his team are honest, straight shooting, and even though I now live in Toronto he's the only mechanic for me.", author: "Taylor Grist", meta: "13 reviews" },
  { text: "Looking for repair? Look no further! Matt is a trained hardworking mechanic that truly looks into the best interests of his customers. I am so happy that I chose to get my vehicle fixed here as it drives like it came off the assembly belt.", author: "Jack Hunter-Buffington", meta: "Local Guide · 19 reviews" },
  { text: "I have been going to Matt for the last three years, he looks after my 3 cars. He is knowledgeable, honest, and very friendly. I have recommended him to my friends and family. His shop is only a few kilometres away from my house so it's a plus point.", author: "Shabbir Kuvawala", meta: "Local Guide · 59 reviews" },
  { text: "Excellent mechanic and great customer service. Super honest and explains things clearly, plus pricing is very fair. Highly recommended for anyone that is intimidated by going to auto repair shops.", author: "Anne T", meta: "3 reviews" },
  { text: "I've had Matt do a couple of jobs for me as he came highly recommended and he did not disappoint. He did the jobs I asked in a very timely fashion and at a very reasonable price. There are still a few honest mechanics around and Matt is for sure one of them.", author: "Kennet Andersson", meta: "Local Guide · 21 reviews" },
  { text: "Hard to find an honest, knowledgeable mechanic. Had an issue with my Toyota RAV4 randomly dying. Matt knew exactly the issue, how to solve it, and at a good price point. Highly recommend!", author: "Patrick Pie", meta: "6 reviews" },
];

const hours: Array<[string, string]> = [
  ["Monday", "8:00am – 5:00pm"],
  ["Tuesday", "8:00am – 5:00pm"],
  ["Wednesday", "8:00am – 5:00pm"],
  ["Thursday", "8:00am – 5:00pm"],
  ["Friday", "8:00am – 5:00pm"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
];

function Index() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo">
            MATT'S <span>AUTO</span>
          </a>
          <div className="nav-phone">
            📞 <a href="tel:+1">Call to Book</a>
          </div>
          <a href="#book" className="btn nav-cta">Book Now</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-eyebrow">Halton Hills, ON</div>
            <h1 className="hero-h1">
              A Mechanic <br />
              You Can <em>Actually</em> Trust.
            </h1>
            <p className="hero-sub">
              Honest diagnostics, fair pricing, and repairs done right the first time — no upsells, no runaround. Just your car running the way it should.
            </p>
            <div className="hero-actions">
              <a href="#book" className="btn btn--lg">Book My Appointment</a>
              <a href="tel:+1" className="btn btn--outline btn--lg">Call Now</a>
            </div>
            <div className="hero-trust">
              <div className="hero-stat">
                <span className="hero-stat-num">5.0</span>
                <span className="hero-stat-label">Google Rating</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">35</span>
                <span className="hero-stat-label">Verified Reviews</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">½</span>
                <span className="hero-stat-label">The Dealer Price</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-badge">
              <span className="hero-badge-num">5.0</span>
              <span className="hero-badge-label">Stars</span>
            </div>
            <div className="hero-card">
              <div className="hero-card-stars">★★★★★</div>
              <p className="hero-card-quote">
                "Looking for repair? Look no further! Matt is a trained hardworking mechanic that truly looks into the best interests of his customers. I am so happy that I chose to get my vehicle fixed here as it drives like it came off the assembly belt."
              </p>
              <div className="hero-card-author">— Jack Hunter-Buffington · Verified Google Review</div>
            </div>
          </div>
        </div>
      </header>

      <div className="trust-bar">
        <div className="container trust-bar-inner">
          <span className="trust-item">✓ No Hidden Fees</span>
          <span className="trust-item">✓ Honest Diagnostics</span>
          <span className="trust-item">✓ Half Dealership Prices</span>
          <span className="trust-item">✓ All Makes & Models</span>
          <span className="trust-item">✓ Mon–Fri 8am–5pm</span>
        </div>
      </div>

      <section className="section section--lt">
        <div className="container">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-h2">Full-Service Auto Repair,<br />One Shop You'll Rely On.</h2>
          <p className="section-lead">
            From routine maintenance to complex repairs, we handle it — and we'll always tell you exactly what's needed before touching your vehicle.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mid">
        <div className="container why-grid">
          <div>
            <div className="section-eyebrow">Why Matt's</div>
            <h2 className="section-h2">Good Mechanics Are Hard to Find. You Found One.</h2>
            <p className="section-lead">
              Halton Hills drivers keep coming back — not because there's no other option, but because honest work is hard to walk away from.
            </p>
            <div className="why-list">
              {[
                ["01", "You'll know the price before we start", "No surprises on your invoice. We walk you through the estimate and answer every question before a single wrench turns."],
                ["02", "Half the dealership cost — same quality", "Customers regularly pay 40–60% less than dealer quotes for the same work. Your car gets fixed; your wallet doesn't get emptied."],
                ["03", "Matt only recommends what you actually need", "If something doesn't need fixing, he'll tell you. If it does, he'll show you. Trust is the only currency that matters here."],
              ].map(([n, t, d]) => (
                <div className="why-item" key={n}>
                  <div className="why-num">{n}</div>
                  <div>
                    <div className="why-content-title">{t}</div>
                    <div className="why-content-desc">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="#book" className="btn">Book My Appointment</a>
            </div>
          </div>
          <div className="why-visual">
            <p className="why-visual-quote">
              I had Matt replace the timing belt, water pump, acc belt and more on my RDX. The repair was done on time as promised. The cost was half of the dealership. He snapped a couple of pictures of things I should keep an eye on.
            </p>
            <div className="why-visual-author">— Christopher Harrilal</div>
            <div className="why-visual-role">Halton Hills · Verified Google Review</div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-eyebrow">What Customers Say</div>
          <h2 className="section-h2">5 Stars. Every Single Time.</h2>
          <p className="section-lead">
            40 Google reviews. Perfect rating. Here's what your neighbours are saying.
          </p>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div className="review-card" key={r.author}>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">{r.author}</div>
                {r.meta && <div className="review-meta">{r.meta}</div>}
                <div className="review-source">Google Review</div>
              </div>
            ))}
          </div>
          <div className="reviews-cta-row">
            <a href="#book" className="btn btn--lg">Book My Appointment</a>
          </div>
        </div>
      </section>

      <section id="book" className="section section--lt">
        <div className="container form-wrap">
          <div className="form-copy">
            <div className="section-eyebrow">Book an Appointment</div>
            <h2 className="section-h2">Ready to Get<br />Your Car Fixed?</h2>
            <p className="section-lead">
              Fill out the form and Matt's team will be in touch within one business day to confirm your appointment.
            </p>
            <div className="form-features">
              {[
                "No commitment — just a quick booking",
                "Monday to Friday, 8:00am – 5:00pm",
                "28 Stewarttown Rd, Halton Hills, ON",
                "We'll give you an honest quote before we start",
                "All makes & models welcome",
              ].map((f) => (
                <div className="form-feature" key={f}>
                  <span className="form-feature-icon">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-title">Request an Appointment</div>
            <div className="form-box-sub">We'll confirm your booking within one business day.</div>
            {submitted ? (
              <div style={{ padding: "24px 0", color: "var(--steel)" }}>
                <strong>Thanks!</strong> Your request was received. We'll be in touch within one business day.
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fn">First Name</label>
                    <input id="fn" required maxLength={60} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ln">Last Name</label>
                    <input id="ln" required maxLength={60} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ph">Phone</label>
                    <input id="ph" type="tel" required maxLength={30} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="em">Email</label>
                    <input id="em" type="email" required maxLength={120} placeholder="you@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="yr">Vehicle Year</label>
                    <input id="yr" maxLength={4} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mk">Make & Model</label>
                    <input id="mk" maxLength={80} />
                  </div>
                </div>
                <div className="form-group full">
                  <label htmlFor="sv">Service Needed</label>
                  <select id="sv" defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option>Oil Change</option>
                    <option>Tire Swap / Alignment</option>
                    <option>Brakes / Suspension</option>
                    <option>Engine Diagnostics</option>
                    <option>Timing Belt / Major Service</option>
                    <option>Vehicle Inspection</option>
                    <option>Exhaust</option>
                    <option>Key Programming</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="nt">Additional Notes</label>
                  <textarea id="nt" maxLength={1000} />
                </div>
                <button className="btn form-submit btn--lg" type="submit">Book My Appointment</button>
                <div className="form-note">🔒 Your info is never shared. We'll reach out by phone or email to confirm.</div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          <div>
            <div className="section-eyebrow">Find Us</div>
            <h2 className="section-h2">We're Right<br />in Halton Hills.</h2>
            <p className="section-lead">
              Conveniently located at 28 Stewarttown Rd — serving Georgetown, Acton, and the surrounding communities.
            </p>
            <table className="hours-table">
              <tbody>
                {hours.map(([d, h]) => (
                  <tr key={d}>
                    <td>{d}</td>
                    <td>{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="info-chips">
              <span className="info-chip">📍 28 Stewarttown Rd, Halton Hills</span>
              <span className="info-chip">🗓 Mon–Fri only</span>
              <span className="info-chip">🚗 Free parking on site</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <a href="#book" className="btn">Book My Appointment</a>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title="Matt's Auto Service Centre location"
              src="https://www.google.com/maps?q=28+Stewarttown+Rd,+Halton+Hills,+ON&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-eyebrow">Halton Hills' Most Trusted Auto Shop</div>
          <h2>Your Car Deserves<br />an Honest Mechanic.</h2>
          <p>
            Stop overpaying at the dealership. Stop gambling with shops that don't care. Book with Matt's and see why 40 neighbours gave a perfect 5-star rating.
          </p>
          <a href="#book" className="btn btn--lg">Book My Appointment</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div>
            <strong>Matt's Auto Service Centre</strong> · 28 Stewarttown Rd, Halton Hills, ON L7G 4S5
          </div>
          <div className="footer-links">
            <a href="#book">Book an Appointment</a>
            <a href="tel:+1">Call Us</a>
            <a
              href="https://www.google.com/maps?q=28+Stewarttown+Rd,+Halton+Hills,+ON"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <div style={{ marginTop: 16 }}>© 2024 Matt's Auto Service Centre. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
