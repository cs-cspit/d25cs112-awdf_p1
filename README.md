# Practical 1: Building a Responsive Portfolio with React Components and Props

**Course**: Advanced Web Development Frameworks (ITUE301)  
**Student**: Bhavya Durgani &bull; **Roll No**: D25CS112  
**Department**: Faculty of Technology & Engineering, CHARUSAT  

---

## 📌 Overview
This project (`prac1`) implements a responsive portfolio application using **React (Vite)**. It demonstrates core component-driven development principles, functional components, JSX syntax, and hierarchical data passing using **Props**.

### Components Developed:
- `Header.jsx`: Displays portfolio title and personalized subtitle.
- `Navbar.jsx`: Navigation menu with responsive navigation links.
- `About.jsx`: About section displaying personal and university details.
- `Skills.jsx`: Technical skills showcase rendered using reusable props.
- `Footer.jsx`: Copyright notice and social footer.

---

## 🚀 Steps to Run

Follow these commands in your terminal to set up and run Practical 1:

### 1. Navigate to the Practical Directory
```bash
cd prac1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
* The local development server will start at: `http://localhost:5173`
* Open `http://localhost:5173` in your web browser to view the live portfolio.

### 4. Build for Production (Optional Verification)
```bash
npm run build
npm run preview
```

---

## 📸 Screenshots to Include in Lab File / Report

Capture and paste the following screenshots into your practical document:

1. **Screenshot 1 - Development Server Startup**:
   - *Capture*: Terminal window showing successful execution of `npm run dev` with the local URL `http://localhost:5173/` and Vite startup time.
2. **Screenshot 2 - Portfolio Header & Hero Section**:
   - *Capture*: Browser view of the top section displaying the `Header` ("My Portfolio - Welcome to my React Website") and `Navbar` with navigation links.
3. **Screenshot 3 - About & Skills Component**:
   - *Capture*: Browser view showing the `About` card (Name: Bhavya Durgani, College: Charusat University) and the `Skills` list (HTML, CSS, JavaScript, React).
4. **Screenshot 4 - Footer Component**:
   - *Capture*: Browser view showing the `Footer` component with copyright and branding.
5. **Screenshot 5 - React DevTools Component Tree (Viva Evidence)**:
   - *Capture*: Browser Developer Tools with the **Components** tab active, showing the component hierarchy (`App` &rarr; `Header`, `Navbar`, `About`, `Skills`, `Footer`) and inspecting props received by `About` or `Skills`.
6. **Screenshot 6 - Production Build Output**:
   - *Capture*: Terminal output after running `npm run build` showing bundle sizes in the `dist/` directory.
