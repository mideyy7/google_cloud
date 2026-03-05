const portfolioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leena - Portfolio</title>
    <style>
        :root {
            --primary: #6a0dad;
            --secondary: #9370db;
            --accent: #e0b0ff;
            --bg: #2e003e;
            --card-bg: rgba(255, 255, 255, 0.1);
            --text: #f3e5f5;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        h1 {
            margin: 0;
            font-size: 2.5rem;
            color: var(--accent);
        }
        .subtitle {
            font-size: 1.2rem;
            margin-top: 10px;
            opacity: 0.9;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        section {
            background: var(--card-bg);
            margin-bottom: 30px;
            padding: 30px;
            border-radius: 12px;
            border-left: 5px solid var(--secondary);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        h2 {
            color: var(--secondary);
            border-bottom: 2px solid var(--primary);
            padding-bottom: 10px;
            display: inline-block;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .skill-card {
            background: var(--primary);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.2s;
        }
        .skill-card:hover {
            transform: translateY(-5px);
            background: var(--secondary);
        }
        .piano-info {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .piano-badge {
            font-size: 3rem;
            background: var(--secondary);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
        }
        .contact-form input, .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;
            background: rgba(255,255,255,0.9);
        }
        .contact-form button {
            padding: 10px 20px;
            background: var(--secondary);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        }
        .contact-form button:hover {
            background: var(--primary);
        }
    </style>
</head>
<body>
    <header>
        <h1>Leena</h1>
        <div class="subtitle">Software Engineer & Pianist</div>
    </header>

    <div class="container">
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I am Leena, a passionate software engineer with a strong background in building scalable web applications. When I'm not coding, I am dedicated to the art of piano, where I have been playing for over a decade.</p>
        </section>

        <section id="skills">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">JavaScript</div>
                <div class="skill-card">Python</div>
                <div class="skill-card">React</div>
                <div class="skill-card">Node.js</div>
                <div class="skill-card">SQL</div>
                <div class="skill-card">Git</div>
                <div class="skill-card">Piano</div>
            </div>
        </section>

        <section id="piano">
            <h2>Piano Background</h2>
            <div class="piano-info">
                <div class="piano-badge">Piano</div>
                <div>
                    <p>I have been playing piano for over 10 years. The discipline, focus, and expression I learn on the keys directly translate to my work as a developer.</p>
                    <p>Philosophy: "Music is the universal language."
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for your message!');">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
</body>
</html>
`;

document.body.innerHTML = portfolioHTML;