# PrepPathQuiz

A responsive internship and placement preparation quiz website built with HTML, CSS and vanilla JavaScript.

## Features
- Six categories: Technical, Aptitude, Programming, HR Interview, Logical Reasoning and Computer Fundamentals
- 20 questions in each category (120 questions total)
- Four multiple-choice options per question
- Instant correct/incorrect feedback
- Correct answer and explanation after each submission
- Progress bar, score, percentage and restart option
- Responsive layout for desktop, tablet and mobile
- No database or installation required

## Run in VS Code
1. Extract `PrepPathQuiz.zip`.
2. Open Visual Studio Code.
3. Select **File > Open Folder** and choose the extracted `PrepPathQuiz` folder.
4. Open `index.html`.
5. Recommended: install the **Live Server** extension by Ritwick Dey.
6. Right-click `index.html` and choose **Open with Live Server**.
7. Your browser should open the app. Choose any category and start practising.

You can also double-click `index.html` to open it directly in a browser.

## Customize
- Change category cards and names in `script.js` in the `categories` array.
- Add or edit questions in `questionBank`. Each question follows this format:
  `[question, [option1, option2, option3, option4], correctOptionIndex, explanation]`
- The correct option index starts at `0`: 0 = A, 1 = B, 2 = C, 3 = D.
- Change colours, spacing and fonts in `style.css`.
- Edit the page content and sections in `index.html`.

## GitHub upload
1. Create a new repository on GitHub, for example `PrepPathQuiz`.
2. In VS Code, open **Terminal > New Terminal**.
3. Run these commands from the project folder:
   `git init`
   `git add .`
   `git commit -m "Add PrepPathQuiz internship and placement quiz app"`
4. Copy the HTTPS repository URL from GitHub.
5. Run:
   `git branch -M main`
   `git remote add origin YOUR_REPOSITORY_URL`
   `git push -u origin main`

Replace `YOUR_REPOSITORY_URL` with your actual repository URL.
