
---

# **Authify - Login and Registration System**  

A secure, scalable, and user-friendly login and registration system built using **React.js** and **Node.js**, designed to provide robust authentication for web applications.  

---

### **Features**  
- **Secure Authentication**: Passwords hashed with **bcrypt** and token-based authentication with **JWT**.  
- **Responsive Design**: Built with **Tailwind CSS** to ensure mobile and desktop compatibility.  
- **Real-Time Validation**: Form validation with instant feedback.  
- **Easy Integration**: Modular architecture for seamless integration with other projects.  

---

### **Technologies Used**  

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Authentication**: bcrypt, JWT  
- **Database**: MongoDB  

---

### **Setup Instructions**  

#### **Prerequisites**  
- Node.js (latest stable version)  
- MongoDB (local or cloud instance)  

#### **Installation Steps**  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/nandansrivastava/authify.git  
   cd authify  
   ```  

2. Install dependencies:  
   - **Backend**:  
     ```bash  
     cd backend  
     npm install  
     ```  
   - **Frontend**:  
     ```bash  
     cd ../frontend  
     npm install  
     ```  

3. Configure environment variables:  
   Create a `.env` file in the `backend` directory with:  
   ```bash  
   PORT=5000  
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_secret_key  
   ```  

4. Start the application:  
   - Backend server:  
     ```bash  
     cd backend  
     npm start  
     ```  
   - Frontend:  
     ```bash  
     cd ../frontend  
     npm start  
     ```  

5. Visit `http://localhost:3000` in your browser to use the app.  

---

### **How to Use**  
- **Registration**: Create a new account with a secure password.  
- **Login**: Use registered credentials to access protected features.  
- **Extend Functionality**: The project can be expanded with additional features like OAuth or 2FA.  

---

### **Contribution Guidelines**  

We welcome contributions to improve this project!  
1. Fork this repository.  
2. Create a new branch for your feature (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m "Add feature"`).  
4. Push to your branch and submit a Pull Request.  

---
---

### **Contact**  
For inquiries or feedback, reach out at:  
📧 **nandan.shri@gmail.com**  

---  
