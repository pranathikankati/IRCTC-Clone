import "./AboutDeveloper.css";

function AboutDeveloper() {
  const contacts = [
    {
      label: "LinkedIn",
      value: "kankatipranathi",
      href: "https://www.linkedin.com/in/kankatipranathi-a9667a330",
    },
    {
      label: "GitHub",
      value: "Pranathikankati",
      href: "https://github.com/Pranathikankati",
    },
    {
      label: "Instagram",
      value: "pranathiiii__03",
      href: "https://www.instagram.com/pranathiiii__03/",
    },
    {
      label: "Email",
      value: "127157015@sastra.ac.in",
      href: "mailto:127157015@sastra.ac.in",
    },
    {
      label: "Phone",
      value: "+91 6301312521",
      href: "tel:+916301312521",
    },
  ];

  const highlights = [
    {
      label: "Role",
      value: "Full-stack developer",
    },
    {
      label: "Project",
      value: "IRCTC rail booking clone",
    },
    {
      label: "Focus",
      value: "Search, booking, authentication and PostgreSQL integration",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Socket.IO",
    "REST APIs",
    "Render Deployment",
  ];

  return (
    <main className="dev-page">
      <section className="dev-hero">
        <div className="dev-hero__content">
          <p className="dev-eyebrow">About the app developer</p>
          <h1>Kankati Pranathi</h1>
          <p className="dev-lead">
            I built this IRCTC clone as a full-stack railway reservation
            project, bringing together train search, route details, user
            authentication, coach availability, real-time seat locking and booking
            history in one working web app.
          </p>
        </div>

        <div className="dev-profile">
          <div className="dev-profile__avatar">
            <img src="/developer-photo.jpeg" alt="Kankati Pranathi" />
          </div>
          <div>
            <span className="dev-profile__label">Developer</span>
            <strong>Kankati Pranathi</strong>
            <p>Full-Stack Web Development & Database Architecture</p>
          </div>
        </div>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          {highlights.map((item) => (
            <article className="dev-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="dev-section dev-story">
        <div>
          <p className="dev-section-label">Project story</p>
          <h2>Built to understand real booking workflows</h2>
        </div>
        <p>
          This app is designed to feel like a practical railway booking system:
          users can register, log in, search station-to-station routes, inspect
          train stops, choose coaches, select seats and manage their bookings.
          The backend is connected to PostgreSQL so trains, routes, seats,
          bookings and users are stored as real application data.
        </p>
      </section>

      <section className="dev-section">
        <p className="dev-section-label">Contact</p>
        <div className="dev-contact-grid">
          {contacts.map((contact) => (
            <a
              className="dev-contact-card"
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="dev-section">
        <p className="dev-section-label">Technology used</p>
        <div className="dev-skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutDeveloper;
