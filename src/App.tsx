function App() {

  return (
    <div style={{ fontFamily: "'Georgia', serif", margin: 0, padding: 0, color: '#0f172a' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: '#0f172a', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px' }}>⚖</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>Advocate Mohit Bhardwaj</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#64748b', textTransform: 'uppercase' }}>District Courts</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', fontFamily: 'sans-serif' }}>
          {['Home', 'About', 'Services', 'Blog', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#334155', fontWeight: 500 }}>{item}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontFamily: 'sans-serif', fontSize: '14px' }}>
          <a href="#contact" style={{ textDecoration: 'none', color: '#334155' }}>Case Studies</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#334155' }}>Client Intake</a>
          <a href="#contact" style={{ padding: '10px 20px', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>📅 Consult Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f2744 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '70px', position: 'relative', overflow: 'hidden' }}>
        {/* subtle dot pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', alignItems: 'center', gap: '4rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 16px', color: '#94a3b8', fontSize: '13px', fontFamily: 'sans-serif', marginBottom: '2rem' }}>
              ⚖ Trusted Legal Representation in District Courts
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem', lineHeight: 1.1 }}>Strategic Counsel.</h1>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#60a5fa', margin: '0 0 1.5rem', lineHeight: 1.1 }}>Decisive Results.</h1>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '520px', fontFamily: 'sans-serif', marginBottom: '2.5rem' }}>
              Specialized litigation and advisory services focusing on Real Estate (RERA), Matrimonial Disputes, Consumer Protection, and Commercial Law across District Courts.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{ padding: '14px 28px', background: '#fff', color: '#0f172a', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, fontFamily: 'sans-serif', fontSize: '15px' }}>Book Consultation →</a>
              <a href="#services" style={{ padding: '14px 28px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontFamily: 'sans-serif', fontSize: '15px' }}>Explore Practices</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
            {[{ icon: '💼', label: 'Commercial' }, { icon: '🏠', label: 'RERA & Property' }].map(item => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', width: '150px', textAlign: 'center', color: '#fff' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { val: '100%', label: 'Client Dedication' },
            { val: 'Modern', label: 'Legal Approach' },
            { val: 'Focused', label: 'Case Strategy' },
            { val: 'District', label: 'Courts Focus' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>{s.val}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#64748b', fontFamily: 'sans-serif', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="services" style={{ background: '#f8fafc', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Core Practice Areas</h2>
            <div style={{ width: '50px', height: '3px', background: '#2563eb', margin: '0.75rem auto 1rem' }} />
            <p style={{ color: '#64748b', fontSize: '1rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Focused expertise ensuring meticulous representation and robust strategies tailored to your unique legal challenges.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏠', title: 'RERA & Property', desc: 'Real estate disputes, builder-buyer conflicts, property registration, and RERA tribunal representation.' },
              { icon: '👨‍👩‍👧', title: 'Matrimonial', desc: 'Divorce, alimony, child custody, and domestic violence cases handled with sensitivity.' },
              { icon: '🛡', title: 'Consumer Law', desc: 'Medical negligence, product liability, and consumer forum disputes.' },
              { icon: '💼', title: 'Commercial', desc: 'Contract enforcement, corporate disputes, and business litigation across district courts.' },
            ].map(area => (
              <div key={area.title} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{area.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{area.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', fontFamily: 'sans-serif', lineHeight: 1.7, margin: 0 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#2563eb', fontFamily: 'sans-serif', fontWeight: 600, marginBottom: '1rem' }}>About the Firm</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>Experienced Legal Counsel at District Courts</h2>
            <p style={{ color: '#475569', fontFamily: 'sans-serif', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Advocate Mohit Bhardwaj provides strategic, results-driven legal counsel across District Courts, specializing in RERA, Matrimonial, Consumer, and Commercial Litigation.
            </p>
            <p style={{ color: '#475569', fontFamily: 'sans-serif', lineHeight: 1.8, marginBottom: '2rem' }}>
              With a modern legal approach and 100% client dedication, every case receives focused attention and a tailored strategy to achieve the best possible outcome.
            </p>
            <a href="#contact" style={{ display: 'inline-block', padding: '12px 28px', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontFamily: 'sans-serif', fontWeight: 600 }}>Get in Touch</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { num: '500+', label: 'Cases Handled' },
              { num: '10+', label: 'Years Experience' },
              { num: '95%', label: 'Success Rate' },
              { num: '4', label: 'Practice Areas' },
            ].map(s => (
              <div key={s.label} style={{ background: '#f8fafc', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2563eb' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#64748b', fontFamily: 'sans-serif', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ background: '#0f172a', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Why Choose Advocate Mohit Bhardwaj</h2>
          <div style={{ width: '50px', height: '3px', background: '#2563eb', margin: '0.75rem auto 1rem' }} />
          <p style={{ color: '#94a3b8', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.7 }}>A modern legal practice built on trust, strategy, and client-first values.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎯', title: 'Strategic Approach', desc: 'Every case gets a customized legal strategy designed to win.' },
              { icon: '⏱', title: 'Timely Updates', desc: 'Clients are kept informed at every stage of the case.' },
              { icon: '🤝', title: 'Client First', desc: 'Your interest is our priority — always.' },
              { icon: '📋', title: 'Transparent Fees', desc: 'No hidden costs. Clear fee structures from day one.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', fontFamily: 'sans-serif', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" style={{ background: '#fff', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Need Legal Assistance?</h2>
          <p style={{ color: '#64748b', fontFamily: 'sans-serif', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Schedule a confidential consultation to discuss your legal options and strategy.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:adv.mohit.bhardwaj1@gmail.com" style={{ padding: '14px 32px', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontFamily: 'sans-serif', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>📅 Book Appointment</a>
            <a href="mailto:adv.mohit.bhardwaj1@gmail.com" style={{ padding: '14px 32px', background: '#f1f5f9', color: '#0f172a', borderRadius: '6px', textDecoration: 'none', fontFamily: 'sans-serif', fontWeight: 600 }}>Send an Inquiry</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '20px' }}>⚖</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>Advocate Mohit Bhardwaj</span>
            </div>
            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', lineHeight: 1.7, maxWidth: '320px' }}>
              Providing strategic, results-driven legal counsel across District Courts. Specializing in RERA, Matrimonial, Consumer, and Commercial Litigation.
            </p>
          </div>
          <div>
            <div style={{ color: '#fff', fontFamily: 'sans-serif', fontWeight: 600, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Quick Links</div>
            {['Home', 'About Firm', 'Practice Areas', 'Blog', 'Contact Us'].map(link => (
              <div key={link} style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '14px' }}>{link}</a>
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: '#fff', fontFamily: 'sans-serif', fontWeight: 600, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: '14px', lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 0.75rem' }}>📍 LE/A 603, Luxuria Estate, Sector 6, Aditya World City, Ghaziabad 201002</p>
              <p style={{ margin: '0 0 0.5rem' }}>📞 +91 8527200481</p>
              <p style={{ margin: 0 }}>✉ adv.mohit.bhardwaj1@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '2rem auto 0', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '13px' }}>
          © 2024 Advocate Mohit Bhardwaj. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
