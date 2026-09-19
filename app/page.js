import HeroFigure from "./HeroFigure";
import NavBar from "./NavBar";
import { portfolioCompanies } from "./portfolio-data";

export default function Home() {
  return (
    <>
      <NavBar />
      <hr className="rule" />

      <header className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>When a business starts to give way, we shore it up.</h1>
            <p className="lede">
              We arrange the bank financing a struggling company can no
              longer get on its own, then take a direct stake in putting it
              back on solid ground — as an equity partner, or by stepping in
              to run the operation ourselves.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-gradient">
                Discuss your business
              </a>
              <a href="#what-we-do" className="btn-ghost">
                See how it works
              </a>
            </div>
          </div>
          <div>
            <HeroFigure />
          </div>
        </div>
      </header>
      <hr className="rule" />

      <section className="section wrap" id="what-we-do">
        <div className="section-head">
          <h2>Two ways in</h2>
          <p className="support">
            The right structure depends on the business — whether the
            existing owners and management are worth keeping in place, or
            whether the operation itself needs new hands.
          </p>
        </div>
        <div className="paths">
          <div className="path">
            <span className="tag">Equity partnership</span>
            <h3>We fund it, you keep running it</h3>
            <p>
              We arrange the credit facility and take a negotiated equity
              stake in return. Existing ownership and management stay in
              place, working alongside us through the repair.
            </p>
          </div>
          <div className="path">
            <span className="tag">Operational takeover</span>
            <h3>We fund it, and we run it</h3>
            <p>
              Where the business is viable but the operation itself is the
              problem, we take over management directly — restructuring
              costs, contracts and staffing, then either holding or exiting
              the business once it's stable.
            </p>
          </div>
        </div>
      </section>
      <hr className="rule" />

      <section className="section wrap" id="process">
        <div className="section-head">
          <h2>How a deal comes together</h2>
          <p className="support">
            Four stages, from first look to a business standing on its own
            again.
          </p>
        </div>
        <div className="process">
          <div className="step">
            <span className="num">01</span>
            <h3>Assessment</h3>
            <p>
              We review the financials, debt load and underlying viability
              before anything is proposed.
            </p>
          </div>
          <div className="step">
            <span className="num">02</span>
            <h3>Financing</h3>
            <p>
              We take the case to our banking partners and arrange lending
              sized to the turnaround, not the crisis.
            </p>
          </div>
          <div className="step">
            <span className="num">03</span>
            <h3>Structuring</h3>
            <p>
              Terms are set for a stake or a takeover — clear on control,
              timeline and what happens at exit.
            </p>
          </div>
          <div className="step">
            <span className="num">04</span>
            <h3>Turnaround</h3>
            <p>
              Debt is restructured, operations are corrected, and the
              business is brought back to solvency.
            </p>
          </div>
        </div>
      </section>
      <hr className="rule" />

      <section className="section wrap" id="who-we-help">
        <div className="section-head">
          <h2>Who this is for</h2>
          <p className="support">
            We look for businesses worth saving, not just businesses in
            trouble.
          </p>
        </div>
        <ul className="criteria">
          <li>A trading history that shows the core business has worked before</li>
          <li>
            Cash-flow strain caused by debt, cost structure or a specific
            setback — not a failed idea
          </li>
          <li>
            Owners willing to give up part or all of their control in
            exchange for survival
          </li>
          <li>Assets, contracts or receivables a bank is willing to lend against</li>
        </ul>
      </section>
      <hr className="rule" />

      <section className="section wrap" id="portfolio">
        <div className="section-head">
          <h2>Businesses we've backed</h2>
          <p className="support">
            A sample of companies we've financed and restructured.
          </p>
        </div>
        <div className="portfolio-note">
          Placeholder section — swap in your five real client names, logos
          and sectors in app/portfolio-data.js before publishing.
        </div>
        <div className="logos">
          {portfolioCompanies.map((company) => (
            <div className="logo-card" key={company.name}>
              <div className="logo-mark">{company.name}</div>
              <div className="sector">{company.sector}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <h2>Tell us where the business stands.</h2>
              <p>
                Bring us the financials as they actually are. We'll tell you
                within a week whether financing and a stake — or a takeover
                — is realistic.
              </p>
              <a href="mailto:hello@anchorstonepartners.example" className="btnstart">
                Start a conversation
              </a>
            </div>
            <div className="foot-contact">
              <div>hello@anchorstonepartners.example</div>
              <div>+1 (000) 000-0000</div>
              <div>By appointment — city, region</div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>Anchorstone Partners</span>
            <span>Placeholder brand — replace name, logo and contact details</span>
          </div>
        </div>
      </footer>
    </>
  );
}
