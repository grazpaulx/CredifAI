CredifAI – Fake News & Video Credibility Checker

CredifAI is a full-stack web application that leverages AI to assess the credibility of news articles, text, and video links. Built with React (frontend) and Node.js + Express (backend), it uses Hugging Face AI models for text analysis. Video credibility checks are currently mocked, with future AI integration planned.

Features:
- Text Credibility Check: Paste news articles or text to verify authenticity.
- Video Credibility Check: Enter a video URL to get a credibility result (mocked).
- Real-time Newsroom: Displays live news updates (mock data or external API).
- Responsive UI: Light-themed, interactive, and user-friendly design.
- Results Page: Shows result with confidence score, tick ✔️ for real, cross ❌ for fake.
- Landing Page: Animated logo, app name, short description, and button to navigate to Home.

Tech Stack:
- Frontend: React, Tailwind CSS, React Router
- Backend: Node.js, Express, Axios
- Database: MongoDB (optional)
- AI: Hugging Face API (BERT-based fake news detection)

Project Structure:

Backend:
backend/
  server.js                # Express server & Hugging Face integration
  routes/
    news.js                # News routes
    checkCredibility.js    # Text/video credibility API route
  .env                     # Environment variables

Frontend:
frontend/
  src/
    assets/
      logo.png
      background.png
    components/
      Navbar.jsx
    pages/
      Landing.jsx
      Home.jsx
      About.jsx
      Newsroom.jsx
      Results.jsx
    App.jsx
    main.jsx

Installation:

Clone Repository:
git clone <your-repo-url>
cd credifai

Backend Setup:
cd backend
npm install
Create .env in backend/:
HF_TOKEN=your_huggingface_api_token
HF_MODEL=mrm8488/bert-tiny-finetuned-fake-news-detection
MONGODB_URI=your_mongodb_connection_string
PORT=5000

Frontend Setup:
cd frontend
npm install

Running the Project:

Start Backend:
cd backend
npm start

Start Frontend:
cd frontend
npm run dev

Open browser at: http://localhost:5173

Usage:

1. Landing Page: Animated logo, app name "CredifAI", short description, and button to navigate to Home.
2. Home Page:
   - Enter news text or video link.
   - Click Check Credibility to analyze text via Hugging Face AI.
3. Results Page:
   - Displays Real or Fake, Confidence Score, and ✔️/❌ icons.
   - Example Output:
     - "Real news detected" ✔️ Confidence: 92%
     - "Fake news detected" ❌ Confidence: 85%
4. Newsroom Page:
   - Displays real-time or mock news updates.
   - Example Output:
     - "Breaking: AI model detects credible news on Tech Conference 2025."
     - "Alert: Misinformation spread detected in social media posts."
5. About Page: Information about the project, tech stack, and developer team.

Notes:
- Video credibility is currently mocked; future updates will include AI verification.
- MongoDB is optional; the app works without it if not needed.
- Ensure your Hugging Face API token has read access.
- Example Input Text:
  "The stock market saw unprecedented growth today with tech companies leading the surge."
- Example Video Link:
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

License:
Open-source and free to use.

Team: CodeNHack
