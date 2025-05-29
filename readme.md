# HappyBot Landing Site

A simple, engaging, and responsive static website for **HappyBot**—your friendly Singaporean companion on Telegram. This site introduces new users to HappyBot’s features, offers quick-start guidance, and provides FAQs and tips for existing users.

---

## 🚀 Features

- **Hero Section** with clear headline, CTA button, and avatar illustration  
- **Features Grid** showcasing Empathy, Voice & Text, Weekly Check-Ins, Local Tips, and Easy Setup  
- **How to Use** step-by-step instructions  
- **FAQ** answering common questions  
- **Smooth Scrolling** and **Reveal Animations** powered by `main.js`  
- **Back-to-Top** quick link for easy navigation  
- **Responsive** design for desktop and mobile  
- **SEO-friendly** `robots.txt` allowing full indexation

---

## 📁 File Structure
├── public/
│ ├── index.html ← Main landing page
│ ├── robots.txt ← Search-engine directives
│ └── favicon.ico ← Browser tab icon
│
├── assets/
│ ├── css/
│ │ └── style.css ← Site styles
│ ├── js/
│ │ └── main.js ← Smooth scrolling & reveal animations
│ └── images/
│ ├── HappySingaporeBot.png ← Hero illustration
│ ├── empathy-icon.svg
│ ├── voice-icon.svg
│ ├── poll-icon.svg
│ ├── local-icon.svg
│ ├── setup-icon.svg
│ └── favicon.ico
│
└── README.md ← This file


---

## 💻 Local Preview

You can preview the site locally using any static file server.

### Using Python 3’s built-in server

```bash
# From the repo root
cd public
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## Using live-server (Node.js)
If you have npm:
```bash
npm install -g live-server
cd public
live-server
```

☁️ Deploying to Render
Create a new Static Site on Render.

Connect your GitHub/GitLab repo and select the public/ folder as the Publish Directory.

Build Command: leave blank (no build step required).

Publish Directory: public

Root Directory: (default)

Advanced Settings:

Branch: main (or your default branch)

Environment: (none required)

Deploy. Render will serve public/index.html and static assets at your custom or onrender.com domain.

🎨 Customization
Update Text: Edit public/index.html.

Change Styles: Modify assets/css/style.css.

Swap Icons/Images: Replace files in assets/images/.

Adjust Animations: Tweak assets/js/main.js or CSS transition settings.

🤝 Contributing
Fork the repo

Create a feature branch (git checkout -b feature/...)

Commit your changes (git commit -m "Add ...").

Push to your branch and open a Pull Request

📜 License
HappyBot static site is released under the MIT License.

© 2025 HappyBot

### Built with ❤️ in Singapore ###

