<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name | Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Your Name</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

  <section id="home" class="hero">
      <div class="hero-content">
          <h1>Hi, I'm <span>Your Name</span></h1>
          <p>Machine Learning Engineer | Data Scientist</p>
          <div class="social-icons">
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
          <a href="assets/resume.pdf" download class="btn">Download CV</a>
      </div>
      <div class="hero-image">
          <img src="assets/images/profile.jpg" alt="Profile Image">
      </div>
  </section>

  <section id="about" class="about">
      <h2>About Me</h2>
      <div class="about-content">
          <div class="about-text">
              <p>I'm a passionate ML engineer with expertise in...</p>
              <div class="skills">
                  <h3>Skills</h3>
                  <div class="skill-tags">
                      <span>Python</span>
                      <span>TensorFlow</span>
                      <span>PyTorch</span>
                      <span>SQL</span>
                      <span>Data Visualization</span>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section id="projects" class="projects">
      <h2>My Projects</h2>
      <div class="project-grid">
          <div class="project-card">
              <img src="assets/images/project1.jpg" alt="Project 1">
              <div class="project-info">
                  <h3>Stock Price Prediction</h3>
                  <p>LSTM model with 92% accuracy</p>
                  <div class="project-links">
                      <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                      <a href="#"><i class="fab fa-github"></i> Code</a>
                  </div>
              </div>
          </div>
          <!-- Add more project cards -->
      </div>
  </section>

  <section id="contact" class="contact">
      <h2>Get In Touch</h2>
      <form>
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="btn">Send Message</button>
      </form>
  </section>

  <footer>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
