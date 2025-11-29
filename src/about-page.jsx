import "./about-page.css";

export default function App() {
  const members = [
    { name: "Zhivko Stoimchev", role: "Team Lead", img: "/1.png" },
    { name: "Emilija Trajkovska", role: "Communication Manager", img: "/2.png" },
    { name: "Tea Pashovska", role: "Graphic Designer", img: "/3.png" },
    { name: "David Zlatanoski", role: "IT Coordinator", img: "/4.png" },
    { name: "Luka Georgieski", role: "Event Coordinator", img: "/5.png" },
    { name: "Naume Karamitreski", role: "Photographer", img: "/6.png" },
    { name: "Ilija Chrchev", role: "Social Media Manager", img: "/7.png" },
    { name: "Katja Pejić", role: "General Support", img: "/8.png" },
  ];

  return (
    <div className="page">g

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="GDG" />
          Google Developers Groups
        </div>

        <ul className="nav-links">
          <li>About</li>
          <li>Team members</li>
          <li>Partners</li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <button className="join-btn">Join us</button>
        <img className="hero-img" src="/vibecoding.png" alt="VIBE CODING" />
      </div>

      {/* ABOUT */}
      <section className="about-section">
        <h2>About</h2>
        <h3>Google Developer Group On Campus University of Primorska</h3>

        <p>
          Welcome to the official page of GDG On Campus Primorska, founded in 2021 in hopes to
          build a strong community at our University! A peer-to-peer learning environment for new
          skills and growth.
        </p>

        <p>
          We create networking circles, workshops, seminars and invite speakers to help improve skills, careers and connections.
          Students from all fields with interest in technology are welcome.
        </p>

        <p>
          Learn more:
          <a href="https://developers.google.com/community/gdg"> https://developers.google.com/community/gdg </a>
        </p>

        <p>Instagram: @gdsc.primorska</p>
        <p>Email: gdgoncampus.up@gmail.com</p>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-section">
        <h2>Team members</h2>

        <div className="team-grid">
          {members.map((m) => (
            <div key={m.name} className="team-card">
              <img src={m.img} alt={m.name} className="team-img" />
              <h4>{m.name}</h4>
              <p>{m.role}</p>
              <a href="#">View profile</a>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <h2>Partners</h2>

        <div className="partner-logos">
          <img src="/famnit.png" alt="Famnit" />
          <img src="/studentski.png" alt="Študentski svet" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <img src="/gdgicon.png" alt="GDG" />
          <p>Google Developer Groups</p>
        </div>

        <div className="footer-links">
          <h4>Quick links:</h4>
          <p>About GDG</p>
          <p>Chapters</p>
          <p>Upcoming events</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

        <div className="footer-social">
          <h4>Social</h4>
          <p>Icons here</p>
        </div>

        <div className="copy">© 2025 Google</div>
      </footer>
    </div>
  );
}

