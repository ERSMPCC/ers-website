import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>ERS Lying-In Clinic</h2>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Caring for Mothers & Babies</h1>
          <p>Professional maternal and newborn care in a comfortable, safe environment</p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Our Clinic</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                ERS Lying-In Clinic has been serving expectant mothers and their families 
                for over a decade. We provide comprehensive maternal and newborn care 
                with a focus on safety, comfort, and personalized attention.
              </p>
              <p>
                Our experienced medical team is dedicated to ensuring the health and 
                well-being of both mother and child throughout the pregnancy journey 
                and beyond.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>1000+</h3>
                  <p>Safe Deliveries</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years of Service</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤱</div>
              <h3>Prenatal Care</h3>
              <p>Comprehensive check-ups, monitoring, and guidance throughout pregnancy</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👶</div>
              <h3>Delivery Services</h3>
              <p>Safe, comfortable birthing environment with experienced medical staff</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Postnatal Care</h3>
              <p>Complete recovery care and newborn monitoring after delivery</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👩‍⚕️</div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency medical services for maternal and newborn complications</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Health Consultations</h3>
              <p>Expert medical consultations and family planning guidance</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍼</div>
              <h3>Breastfeeding Support</h3>
              <p>Lactation consultation and breastfeeding education for new mothers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>123 Healthcare Avenue<br />Medical District, City 12345</p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@erslyingincooperative.com</p>
              </div>
              <div className="contact-item">
                <h3>⏰ Hours</h3>
                <p>24/7 Emergency Care<br />Regular Hours: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ERS Lying-In Clinic</h3>
              <p>Providing quality maternal and newborn care with compassion and expertise.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Emergency</h4>
              <p>For medical emergencies, call:</p>
              <p className="emergency-number">(555) 911-HELP</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ERS Lying-In Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
