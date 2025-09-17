<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praveen Dwivedi | Portfolio</title>
    <style>
        /* Your CSS code from earlier goes here */
        /* CSS Variables for Theming */
        :root {
            --primary-color: #4a6cf7;
            --secondary-color: #6f42c1;
            --accent-color: #20c997;
            --text-color: #333;
            --text-light: #666;
            --bg-color: #fff;
            --bg-alt: #f8f9fa;
            --card-bg: #fff;
            --border-color: #eaeaea;
            --shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
            --transition: all 0.3s ease;
            --header-height: 70px;
            --border-radius: 8px;
            --max-width: 1200px;
            --font-main: 'Poppins', sans-serif;
            --font-alt: 'Inter', sans-serif;
        }

        /* Dark Theme Variables */
        .dark-theme {
            --primary-color: #5d78ff;
            --secondary-color: #8c68cd;
            --accent-color: #25d9a8;
            --text-color: #f0f0f0;
            --text-light: #b0b0b0;
            --bg-color: #121212;
            --bg-alt: #1a1a1a;
            --card-bg: #1e1e1e;
            --border-color: #333;
            --shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-main);
            color: var(--text-color);
            background-color: var(--bg-color);
            line-height: 1.6;
            transition: var(--transition);
            overflow-x: hidden;
        }

        /* ... rest of your CSS ... */
    </style>
</head>
<body>
    <!-- Your HTML content from earlier goes here -->
    <header class="header">
        <nav class="nav container">
            <a href="#home" class="nav-logo">Praveen</a>
            
            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
                    <li class="nav-item"><a href="#work" class="nav-link">Work</a></li>
                    <li class="nav-item"><a href="#resume" class="nav-link">Resume</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                    <li class="nav-item">
                        <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
                            <i class="fas fa-moon"></i>
                        </button>
                    </li>
                </ul>
                <div class="nav-close" id="nav-close">
                    <i class="fas fa-times"></i>
                </div>
            </div>

            <div class="nav-toggle" id="nav-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    <main class="main">
        <!-- Hero Section -->
        <section id="home" class="hero section">
            <div class="hero-container container grid">
                <div class="hero-content">
                    <h1 class="hero-title">
                        Hi, I'm <span class="highlight">Praveen Dwivedi</span>
                    </h1>
                    <h2 class="hero-subtitle">Data Analyst & Frontend Developer</h2>
                    <p class="hero-description">
                        I transform data into insights and ideas into interactive experiences.
                    </p>
                    <div class="hero-buttons">
                        <a href="#work" class="btn btn-primary">View My Work</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                    
                    <div class="scroll-indicator">
                        <span>Scroll Down</span>
                        <div class="arrow"></div>
                    </div>
                </div>

                <div class="hero-image">
                    <div class="image-container">
                        <img src="https://github.com/Praveendwivediii/Portfolio-Website/blob/main/assets/images/Praveen.jpg" alt="Praveen Dwivedi" class="profile-img">
                        <div class="image-overlay"></div>
                        <div class="floating-elements">
                            <span class="floating-element element-1"><i class="fab fa-python"></i></span>
                            <span class="floating-element element-2"><i class="fas fa-database"></i></span>
                            <span class="floating-element element-3"><i class="fab fa-js"></i></span>
                            <span class="floating-element element-4"><i class="fab fa-react"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">About Me</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="about-container grid">
                    <div class="about-content">
                        <p class="about-text">
                            I'm a passionate data analyst and frontend developer with expertise in transforming complex data into actionable insights and creating beautiful, functional web experiences.
                        </p>
                        <p class="about-text">
                            My technical skills include Python, SQL, JavaScript, React, and data visualization tools like Tableau and Power BI. I enjoy solving complex problems and turning them into simple and beautiful designs.
                        </p>
                        
                        <div class="about-stats grid">
                            <div class="stat-item">
                                <div class="stat-number" data-count="50">0</div>
                                <div class="stat-label">Projects Completed</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-count="25">0</div>
                                <div class="stat-label">Happy Clients</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-count="3">0</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" alt="About Praveen">
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="skills section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">My Skills</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="skills-container grid">
                    <div class="skill-category">
                        <h3 class="skill-category-title">Data Analysis</h3>
                        <div class="skill-list">
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>Python</span>
                                    <span>90%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="90"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>SQL</span>
                                    <span>85%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="85"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>Tableau</span>
                                    <span>80%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="80"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category">
                        <h3 class="skill-category-title">Web Development</h3>
                        <div class="skill-list">
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>JavaScript</span>
                                    <span>88%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="88"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>React</span>
                                    <span>82%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="82"></div>
                                </div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>HTML/CSS</span>
                                    <span>95%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-level="95"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Work/Projects Section -->
        <section id="work" class="work section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">My Work</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="work-filters">
                    <span class="filter-item active" data-filter="all">All</span>
                    <span class="filter-item" data-filter="data">Data Analysis</span>
                    <span class="filter-item" data-filter="web">Web Development</span>
                </div>

                <div class="work-container grid">
                    <div class="work-item" data-category="data">
                        <div class="work-card">
                            <div class="work-image">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Data Dashboard Project">
                            </div>
                            <div class="work-content">
                                <h3 class="work-title">Data Dashboard</h3>
                                <p class="work-description">Interactive analytics dashboard with React and D3.js</p>
                                <div class="work-tags">
                                    <span>Python</span>
                                    <span>React</span>
                                    <span>Tableau</span>
                                </div>
                                <div class="work-buttons">
                                    <a href="#" class="work-link">View Project <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="work-item" data-category="data">
                        <div class="work-card">
                            <div class="work-image">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="E-commerce Analysis">
                            </div>
                            <div class="work-content">
                                <h3 class="work-title">E-commerce Analysis</h3>
                                <p class="work-description">Customer behavior insights and sales forecasting</p>
                                <div class="work-tags">
                                    <span>Python</span>
                                    <span>SQL</span>
                                    <span>Power BI</span>
                                </div>
                                <div class="work-buttons">
                                    <a href="#" class="work-link">View Project <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="work-item" data-category="web">
                        <div class="work-card">
                            <div class="work-image">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Portfolio Website">
                            </div>
                            <div class="work-content">
                                <h3 class="work-title">Portfolio Website</h3>
                                <p class="work-description">Responsive design with smooth animations</p>
                                <div class="work-tags">
                                    <span>HTML/CSS</span>
                                    <span>JavaScript</span>
                                    <span>GSAP</span>
                                </div>
                                <div class="work-buttons">
                                    <a href="#" class="work-link">View Project <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="work-cta">
                    <a href="#" class="btn btn-primary">View All Projects</a>
                </div>
            </div>
        </section>

        <!-- Resume Section -->
        <section id="resume" class="resume section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">My Resume</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="resume-container">
                    <div class="resume-preview">
                        <div class="pdf-placeholder">
                            <i class="far fa-file-pdf"></i>
                            <p>Preview of my resume</p>
                            <a href="https://github.com/Praveendwivediii/Portfolio-Website/blob/main/assets/Praveen%20Resum%C3%A9.pdf" class="btn btn-outline">View Full PDF</a>
                        </div>
                    </div>

                    <div class="resume-download">
                        <a href="https://github.com/Praveendwivediii/Portfolio-Website/blob/main/assets/Praveen%20Resum%C3%A9.pdf" download class="btn btn-primary">
                            <i class="fas fa-download"></i> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Get In Touch</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="contact-container grid">
                    <div class="contact-info">
                        <h3 class="contact-title">Let's work together</h3>
                        <p class="contact-description">
                            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                        </p>

                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-text">
                                    <span>Email</span>
                                    <a href="mailto:praveendwivedi1245@gmail.com">praveendwivedi1245@gmail.com</a>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-text">
                                    <span>Phone</span>
                                    <a href="tel:+919335749331">+91 9335749331</a>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-text">
                                    <span>Location</span>
                                    <span>New Delhi, India</span>
                                </div>
                            </div>
                        </div>

                        <div class="social-links">
                            <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject">
                        </div>

                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-logo">Praveen</div>
                    <p class="footer-text">
                        Data Analyst & Frontend Developer passionate about creating meaningful data insights and web experiences.
                    </p>
                </div>

                <div class="footer-links">
                    <div class="footer-link-group">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-link-group">
                        <h4>Follow Me</h4>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span id="current-year"></span> Praveen Dwivedi. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <span>•</span>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>

        <a href="#home" class="back-to-top" id="back-to-top">
            <i class="fas fa-arrow-up"></i>
        </a>
    </footer>

    <script>
        // DOM Elements
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav-link');
        const backToTop = document.getElementById('back-to-top');
        const currentYear = document.getElementById('current-year');
        const contactForm = document.getElementById('contactForm');
        const filterItems = document.querySelectorAll('.filter-item');
        const workItems = document.querySelectorAll('.work-item');
        const statNumbers = document.querySelectorAll('.stat-number');
        const skillBars = document.querySelectorAll('.skill-progress');

        // Set current year in footer
        currentYear.textContent = new Date().getFullYear();

        // Dark/Light Theme Toggle
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            
            // Change icon based on theme
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme + '-theme');
            const icon = themeToggle.querySelector('i');
            if (savedTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }

        // Mobile Menu Toggle
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show');
            });
        }

        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        }

        // Close mobile menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });

        // Back to Top Button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        // Work Filtering
        filterItems.forEach(filter => {
            filter.addEventListener('click', () => {
                // Remove active class from all filters
                filterItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked filter
                filter.classList.add('active');
                
                const filterValue = filter.getAttribute('data-filter');
                
                workItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Animate Statistics Counter
        const animateCounters = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 16ms per frame
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + '+';
                    }
                }, 16);
            });
        };

        // Animate Skill Bars
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            });
        };

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'about') {
                        animateCounters();
                    } else if (entry.target.id === 'skills') {
                        animateSkills();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animations
        const aboutSection = document.getElementById('about');
        const skillsSection = document.getElementById('skills');

        if (aboutSection) observer.observe(aboutSection);
        if (skillsSection) observer.observe(skillsSection);

        // Form Submission
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // In a real application, you would send this data to a server
                // For now, we'll just show a success message
                alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
                
                // Reset form
                contactForm.reset();
            });
        }

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Set initial state for back to top button
            if (window.scrollY > 200) {
                backToTop.classList.add('active');
            }
            
            // Add smooth scrolling for all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
