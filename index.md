<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seyyad Najwan | Data Analyst</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <h1>Seyyad Najwan</h1>
    <p>Data Analyst</p>
  </header>

  <!-- Navigation Tabs -->
  <div class="tabs">
    <button class="tab-button active" onclick="openTab('projects')">Projects</button>
    <button class="tab-button" onclick="openTab('skills')">Skills</button>
    <button class="tab-button" onclick="openTab('contact')">Contact</button>
  </div>

  <!-- Projects Section (Cards) -->
  <div id="projects" class="tab-content active">
    <div class="card">
      <img src="assets/images/project1.jpg" alt="ML Project">
      <h3>Stock Price Prediction</h3>
      <p>LSTM model with 92% accuracy.</p>
      <a href="#" class="btn">View Project</a>
    </div>
    <div class="card">
      <img src="assets/images/project2.jpg" alt="NLP Project">
      <h3>Twitter Sentiment Analysis</h3>
      <p>BERT-based classifier.</p>
      <a href="#" class="btn">View Project</a>
    </div>
  </div>

  <!-- Skills Section -->
  <div id="skills" class="tab-content">
    <div class="card">
      <h3>Machine Learning</h3>
      <ul>
        <li>Python (TensorFlow, PyTorch)</li>
        <li>Scikit-learn, Pandas, NumPy</li>
      </ul>
    </div>
  </div>

  <!-- Contact Section -->
  <div id="contact" class="tab-content">
    <div class="card">
      <h3>Get in Touch</h3>
      <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
