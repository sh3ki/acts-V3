import { FormEvent, useEffect, useState } from 'react'
import { Link, Navigate, NavLink, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { degrees, history, images, school, strands } from './data'

const nav = [{ label: 'ACTS', to: '/' }, { label: 'About', to: '/about' }, { label: 'Programs', to: '/programs' }, { label: 'Contact', to: '/contact' }]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <div className="header-inner wrap">
        <Link className="wordmark" to="/" aria-label="ACTS Computer College home"><span className="wordmark-mark"><img src="/logo.webp" alt="" /></span><span><b>ACTS</b><small>COMPUTER COLLEGE</small></span></Link>
        <div className="header-origin"><span>EST.</span><b>1987</b><small>SANTA CRUZ<br/>LAGUNA</small></div>
        <nav className="nav-desktop" aria-label="Main navigation">{nav.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'}><small>0{index + 1}</small><span>{item.label}</span></NavLink>)}</nav>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      {open && <nav className="nav-mobile" id="mobile-nav" aria-label="Mobile navigation">{nav.map((item, i) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item.label}<span aria-hidden="true">↗</span></NavLink>)}</nav>}
    </header>
  </>
}

function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-masthead"><span>ACTS COMPUTER COLLEGE</span><span>LEARNING IN SANTA CRUZ SINCE 1987</span></div><div className="footer-grid">
    <div><Link className="wordmark wordmark-light" to="/"><span className="wordmark-mark"><img src="/logo.webp" alt="" /></span><span><b>ACTS</b><small>COMPUTER COLLEGE</small></span></Link><p className="footer-phrase">Education with<br />purpose and service.</p><span className="footer-location">SANTA CRUZ, LAGUNA · PHILIPPINES</span></div>
    <div className="footer-links"><p className="micro-label">SITE DIRECTORY</p>{nav.map((item, index) => <Link key={item.to} to={item.to}><small>0{index + 1}</small><span>{item.label}</span><b aria-hidden="true">↗</b></Link>)}</div>
    <div className="footer-contact"><p className="micro-label">Contact</p><p>{school.address}</p><a href={`mailto:${school.email}`}>{school.email}</a><a href={`tel:${school.mobiles[0]}`}>{school.mobiles[0]}</a><div className="socials"><a href={school.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={school.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></div></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} ACTS Computer College</span><span>EXPERIENCE · EXPERTISE · EXCELLENCE</span><span>PH 4009</span></div></div></footer>
}

function ImageSlot({ src, alt, label, className = '' }: { src?: string; alt: string; label: string; className?: string }) {
  return <div className={`image-slot ${className}`}>{src ? <img src={src} alt={alt} /> : <div className="image-placeholder" role="img" aria-label={label}><span className="placeholder-mark">ACTS <i>/{label}</i></span><span className="placeholder-caption">PHOTO TO BE PROVIDED</span></div>}</div>
}

function Eyebrow({ children, number }: { children: string; number?: string }) { return <p className="eyebrow">{number && <span>{number}</span>}{children}</p> }
function SectionHeading({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) { return <div className={`section-heading ${light ? 'light' : ''}`}><Eyebrow>{kicker}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }

function Home() {
  return <>
    <section className="home-hero"><div className="wrap hero-grid">
      <div className="hero-copy"><Eyebrow number="SANTA CRUZ · EST. 1987">A college built around possibility</Eyebrow><h1>Make room<br />for what’s <em>next.</em></h1><p>ACTS Computer College brings learning, character, and ambition together in Santa Cruz, Laguna.</p><div className="hero-actions"><Link className="button button-green" to="/programs">Find your program <span>↗</span></Link><Link className="text-link" to="/about">Get to know ACTS <span>→</span></Link></div><div className="hero-footnote"><span className="rule" />Experience, Expertise &amp; Excellence</div></div>
      <div className="hero-visual"><ImageSlot src={images.home} alt="ACTS community photograph" label="HOME" className="home-photo"/><div className="hero-stamp"><b>ACTS</b><span>COMPUTER<br />COLLEGE</span><small>1987</small></div><div className="side-index">01 <span>/</span> 04</div></div>
    </div></section>
    <section className="facts-section"><div className="wrap facts-layout"><div className="facts-intro"><Eyebrow>ACTS / AT A GLANCE</Eyebrow><h2>A foundation<br />for what’s next.</h2><p>Four quick facts about the college and the learning paths it offers.</p></div><div className="facts-grid"><article className="fact-tile fact-founded"><span className="fact-label">ESTABLISHED</span><b>1987</b><p>Founded in Santa Cruz</p><span className="fact-corner">01</span></article><article className="fact-tile"><span className="fact-label">PROGRAMS / SENIOR HIGH</span><b>4</b><p>Senior High strands</p><span className="fact-corner">02</span></article><article className="fact-tile fact-college"><span className="fact-label">PROGRAMS / COLLEGE</span><b>7</b><p>College programs</p><span className="fact-corner">03</span></article><article className="fact-tile fact-values"><span className="fact-label">GUIDING PRINCIPLE</span><b>ACTS</b><p>Faith-rooted education</p><span className="fact-corner">04</span></article></div></div></section>
    <section className="section pathways"><div className="wrap"><div className="section-intro-row"><SectionHeading kicker="PROGRAM DIRECTORY / 01" title="Two starting points. Many ways forward." text="Browse the study levels offered by ACTS Computer College."/><Link className="underlined-link" to="/programs">View every program <span>↗</span></Link></div>
      <div className="route-list">
        <Link to="/programs#senior-high" className="route-row"><span className="route-count">01</span><div className="route-title"><small>SENIOR HIGH SCHOOL</small><h3>Explore your interests.</h3><p>Four strands to start with curiosity and discover what draws you in.</p><span className="route-more">See Senior High strands ↗</span></div><ImageSlot src={images.seniorHigh} alt="Senior High School students at ACTS" label="SENIOR HIGH" className="route-photo"/><span className="route-arrow" aria-hidden="true">↗</span></Link>
        <Link to="/programs#college" className="route-row route-row-college"><span className="route-count">02</span><div className="route-title"><small>COLLEGE PROGRAMS</small><h3>Build what comes next.</h3><p>Explore degrees across technology, business, and teacher education.</p><span className="route-more">See college programs ↗</span></div><ImageSlot src={images.college} alt="College learning at ACTS" label="COLLEGE" className="route-photo"/><span className="route-arrow" aria-hidden="true">↗</span></Link>
      </div>
    </div></section>
    <section className="campus-moments"><div className="wrap"><div className="moments-heading"><SectionHeading kicker="CAMPUS / IN PRACTICE" title="Learning happens together." text="Add your ACTS photos to bring these learning, community, and campus moments to life."/></div><div className="moments-grid"><ImageSlot src={images.learning} alt="Students learning at ACTS" label="LEARNING" className="moment-large"/><ImageSlot src={images.community} alt="ACTS students and community together" label="COMMUNITY" className="moment-small"/><ImageSlot src={images.campus} alt="ACTS campus setting" label="CAMPUS" className="moment-small moment-campus"/></div></div></section>
    <section className="purpose-band"><div className="wrap purpose-layout"><div className="purpose-lead"><Eyebrow>THE ACTS FOUNDATION</Eyebrow><h2>Learning guided<br />by <em>purpose.</em></h2><Link className="purpose-link" to="/about">More about ACTS <span>↗</span></Link></div><div className="purpose-statements"><article><span>01 / MISSION</span><p>{school.mission}</p></article><article><span>02 / VISION</span><p>{school.vision}</p></article></div></div></section>
    <section className="section president-preview"><div className="wrap president-grid"><ImageSlot src={images.president} alt={`Portrait of ${school.president}, ${school.presidentRole}`} label="PRESIDENT" className="president-photo"/><div className="president-copy"><Eyebrow>A NOTE FROM ACTS LEADERSHIP</Eyebrow><blockquote>“Welcome to ACTS Computer College — a place where passion meets purpose and learning transforms lives.”</blockquote><p className="signature">{school.president}<span>{school.presidentRole}</span></p><Link className="underlined-link" to="/about#president">Read the full message <span>↗</span></Link></div></div></section>
    <section className="closing-cta"><div className="wrap closing-inner"><Eyebrow number="YOUR NEXT STEP">ACTS COMPUTER COLLEGE</Eyebrow><h2>Let’s talk about<br /><em>your direction.</em></h2><Link className="button button-gold" to="/contact">Contact the college <span>↗</span></Link></div></section>
  </>
}

function About() {
  return <>
    <section className="page-opening"><div className="wrap opening-grid"><div><Eyebrow number="01 / ABOUT ACTS">Santa Cruz, Laguna · Established 1987</Eyebrow><h1>Grounded in purpose.<br /><em>Growing through learning.</em></h1></div><p>Get to know the institution, the ideals that guide it, and the journey that began in Santa Cruz in 1987.</p></div></section>
    <section className="about-intro"><div className="wrap about-intro-grid"><div className="about-label"><span className="big-index">A<span>.</span></span><p>WHO WE ARE</p></div><div><h2>Built on a belief in education’s power to open possibility.</h2><p>ACTS Computer College is a private, non-sectarian higher educational institution founded in Santa Cruz, Laguna. Its work centers on instruction, research, and community service.</p><p className="phrase">{school.phrase}</p></div></div></section>
    <section className="manifesto"><div className="wrap"><Eyebrow>THE INSTITUTIONAL COMPASS</Eyebrow><div className="manifesto-grid"><article><span className="manifesto-no">01</span><h2>Mission</h2><p>{school.mission}</p></article><article><span className="manifesto-no">02</span><h2>Vision</h2><p>{school.vision}</p></article></div><div className="values-row"><p className="micro-label">CORE VALUES</p><ol>{school.values.map((value, i) => <li key={value}><span>0{i + 1}</span>{value}</li>)}</ol></div></div></section>
    <section className="history-section"><div className="wrap"><div className="history-heading"><SectionHeading kicker="A STORY IN YEARS" title="The journey so far." text="A timeline of milestones recorded in the college’s history."/><span className="history-start">1987<br /><small>TO TODAY</small></span></div><div className="timeline">{history.map((item, i) => <article className="timeline-item" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-marker">0{i + 1}</div><div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
    <section className="president-section" id="president"><div className="wrap president-full"><ImageSlot src={images.president} alt={`Portrait of ${school.president}, ${school.presidentRole}`} label="PRESIDENT" className="president-large"/><div className="president-full-copy"><Eyebrow> A MESSAGE TO OUR COMMUNITY</Eyebrow><h2>From the<br /><em>President’s desk.</em></h2><div className="president-message">{school.presidentMessage.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div><p className="signature">{school.president}<span>{school.presidentRole}</span></p></div></div></section>
    <section className="small-cta"><div className="wrap small-cta-inner"><p>Ready to explore what you can study?</p><Link className="underlined-link" to="/programs">See ACTS programs <span>↗</span></Link></div></section>
  </>
}

function ProgramRow({ code, name, text, index }: { code: string; name: string; text: string; index: number }) {
  return <article className="program-row"><span className="program-index">{String(index).padStart(2, '0')}</span><span className="program-code">{code}</span><div className="program-description"><h3>{name}</h3><p>{text}</p></div><Link to={`/contact?program=${encodeURIComponent(name)}`} className="program-arrow" aria-label={`Ask about ${name}`}>↗</Link></article>
}

function Programs() {
  return <>
    <section className="page-opening programs-opening"><div className="wrap opening-grid"><div><Eyebrow number="02 / PROGRAMS">Learning routes at ACTS</Eyebrow><h1>Choose a direction.<br /><em>Keep discovering.</em></h1></div><p>Explore Senior High strands and college programs offered by ACTS Computer College.</p><div className="jump-links"><a href="#senior-high">Senior High <span>↓</span></a><a href="#college">College <span>↓</span></a></div></div></section>
    <section className="program-section shs-section" id="senior-high"><div className="wrap"><div className="program-section-heading"><div><Eyebrow>01 / SENIOR HIGH SCHOOL</Eyebrow><h2>Four ways to<br /><em>find your focus.</em></h2></div><p>Explore the verified strands offered by the Senior High School program.</p></div><div className="strand-layout"><ImageSlot src={images.seniorHigh} alt="Senior High School learning at ACTS" label="SENIOR HIGH" className="strand-photo"/><div className="strand-list">{strands.map((item, i) => <ProgramRow key={item.code} code={item.code} name={item.name} text={item.text} index={i + 1}/>)}</div></div></div></section>
    <section className="program-section college-section" id="college"><div className="wrap"><div className="program-section-heading"><div><Eyebrow>02 / COLLEGE</Eyebrow><h2>Build knowledge<br /><em>that moves with you.</em></h2></div><p>Explore the college degree programs in technology, business, and teacher education.</p></div><div className="degree-list">{degrees.map((item, i) => <ProgramRow key={item.code} code={item.code} name={item.name} text={item.text} index={i + 1}/>)}</div><div className="program-note"><span>NOTE</span><p>For current program details and availability, contact ACTS Computer College directly.</p><Link className="button button-green" to="/contact?type=program">Ask about a program <span>↗</span></Link></div></div></section>
  </>
}

function Contact() {
  const [params] = useSearchParams()
  const program = params.get('program') || ''
  const [form, setForm] = useState({ name: '', email: '', type: params.get('type') === 'program' ? 'Program inquiry' : 'General inquiry', program, message: '' })
  const [notice, setNotice] = useState('')
  const [draft, setDraft] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInquiry: ${form.type}${form.program ? `\nProgram: ${form.program}` : ''}\n\n${form.message}`
    setDraft(body)
    setNotice('Your inquiry is ready. Copy the message below or open it in your email app to send it to ACTS.')
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setNotice('Inquiry copied. Paste it into an email to ACTS.') }
    catch { setNotice('Copy is unavailable in this browser. Select and copy the inquiry text below.') }
  }
  return <>
    <section className="page-opening contact-opening"><div className="wrap opening-grid"><div><Eyebrow number="03 / CONTACT">ACTS Computer College · Laguna</Eyebrow><h1>We’re here<br />to <em>help you begin.</em></h1></div><p>Reach the college with a question about programs or the next steps in your education.</p></div></section>
    <section className="contact-section"><div className="wrap contact-grid"><aside className="contact-details"><Eyebrow>CONTACT THE COLLEGE</Eyebrow><h2>Let’s start<br />a conversation.</h2><div className="contact-block"><span>VISIT</span><p>{school.address}</p></div><div className="contact-block"><span>EMAIL</span><a href={`mailto:${school.email}`}>{school.email}</a></div><div className="contact-block"><span>CALL</span><a href={`tel:${school.landline.replace(/[^\d+]/g, '')}`}>{school.landline}</a>{school.mobiles.map(phone => <a key={phone} href={`tel:${phone}`}>{phone}</a>)}</div><div className="contact-block"><span>FOLLOW</span><a href={school.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={school.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></div><a className="directions-link" href={`https://maps.google.com/?q=${encodeURIComponent(school.address)}`} target="_blank" rel="noreferrer">Open directions <span>↗</span></a></aside>
      <div className="form-panel"><p className="micro-label">SEND AN INQUIRY</p><h2>What would you like to know?</h2><form onSubmit={submit}><div className="form-row"><label>Your name<input required autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label><label>Email address<input required type="email" autoComplete="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label></div><div className="form-row"><label>Inquiry type<select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option>General inquiry</option><option>Program inquiry</option><option>Senior High School</option><option>College programs</option></select></label><label>Program (optional)<input value={form.program} onChange={e => setForm({ ...form, program: e.target.value })} placeholder="Name of strand or degree" /></label></div><label>Your message<textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label><button className="button button-green" type="submit">Prepare inquiry <span>↗</span></button><p className="form-hint">This form prepares a message on your device. It does not send data to ACTS automatically.</p></form>{notice && <div className="form-notice" role="status"><p>{notice}</p>{draft && <><textarea readOnly aria-label="Prepared inquiry text" value={draft} rows={6}/><div className="notice-actions"><button className="underlined-link" type="button" onClick={copyDraft}>Copy message</button><a className="underlined-link" href={`mailto:${school.email}?subject=${encodeURIComponent(`ACTS ${form.type}`)}&body=${encodeURIComponent(draft)}`}>Open email app ↗</a></div></>}</div>}</div>
    </div></section>
    <section className="location-band"><div className="wrap location-inner"><span className="location-pin">↗</span><div><Eyebrow>FIND ACTS IN SANTA CRUZ</Eyebrow><h2>Santa Cruz, Laguna</h2><p>{school.address}</p></div><a className="button button-gold" href={`https://maps.google.com/?q=${encodeURIComponent(school.address)}`} target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div></section>
  </>
}

function NotFound() { return <section className="not-found wrap"><Eyebrow>PAGE NOT FOUND</Eyebrow><h1>Let’s get you<br /><em>back on track.</em></h1><Link className="button button-green" to="/">Go to ACTS home ↗</Link></section> }
function CourseRedirect() {
  const { search, hash } = useLocation()
  const destinationHash = hash === '#senior-high-programs' ? '#senior-high' : hash
  return <Navigate replace to={`/programs${search}${destinationHash}`} />
}

const meta: Record<string, string> = { '/': 'ACTS Computer College in Santa Cruz, Laguna — education rooted in experience, expertise, and excellence since 1987.', '/about': 'Learn about ACTS Computer College, its history, mission, vision, and president.', '/programs': 'Explore Senior High School strands and college programs offered at ACTS Computer College.', '/contact': 'Contact ACTS Computer College in Santa Cruz, Laguna.' }
function PageEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
    const label = nav.find(item => item.to === pathname)?.label || 'ACTS'
    document.title = pathname === '/' ? 'ACTS Computer College | Learn with purpose' : `${label} | ACTS Computer College`
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) description.content = meta[pathname] || 'ACTS Computer College, Santa Cruz, Laguna.'
  }, [pathname, hash])
  return null
}

export default function App() {
  return <><PageEffects/><Header/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/programs" element={<Programs/>}/><Route path="/courses" element={<CourseRedirect/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>
}
