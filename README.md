# Simple Node.js Contact Form

A clean, modern, and fully functional contact form web application.  
This project features a static front-end built with vanilla **HTML, CSS, and JavaScript**, and a simple back-end powered by **Node.js and Express** to process form submissions.

---

## 📖 Description
This micro-app provides a straightforward solution for capturing user feedback or contact requests.  

- The **front-end** is a responsive, single-page form with a user-friendly interface.  
- The **back-end** is a lightweight Express server that listens for form submissions, logs the data to the console, and sends a JSON response back to the client to confirm receipt.  

This project serves as an excellent starting point for developers looking to understand the fundamentals of client-server communication.

---

## ✨ Features
- **Clean & Modern UI**: A beautifully designed, responsive contact form.  
- **Dynamic Feedback**: Instant "success" or "error" messages without a page reload.  
- **Node.js Backend**: A simple and efficient Express server handles POST requests.  
- **No Dependencies Front-End**: Built with vanilla JavaScript (no jQuery or frameworks).  
- **Easy to Deploy**: Minimal setup required to get up and running.  
- **Well-Commented Code**: Both front-end and back-end code are clearly documented.  

---

## 🛠 Technologies Used
- **Backend**: Node.js, Express.js, body-parser  
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)  
- **Package Manager**: npm  

---

## ⚡ Local Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed  
- [Git](https://git-scm.com/) installed  

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/seershan/contact-form-app.git

2. **Navigate to the project directory**

   ```bash
   cd contact-form-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   You should see:

   ```
   Server is running successfully on http://localhost:3000
   ```

5. **View the application**

   * Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 🔄 How It Works

1. The user fills out the form on the front-end and clicks **"Send Message"**.
2. The client-side JavaScript (`public/script.js`) intercepts the form submission.
3. A **POST request** containing the form data (as JSON) is sent to the `/send-message` endpoint on the server.
4. The Express server (`server.js`) receives the data, logs it to the terminal, and sends a JSON response back.
5. The front-end JavaScript displays a **success** or **error** message to the user.

---

## 📂 Project Structure

```
contact-app/
├── public/
│   ├── index.html      # The main HTML file
│   ├── style.css       # All styles for the frontend
│   └── script.js       # Client-side form submission logic
├── .gitignore          # Ignore node_modules and other unnecessary files
├── package.json        # Project metadata and dependencies
└── server.js           # The Node.js & Express backend server
```

```
```
