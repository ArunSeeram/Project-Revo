📘 Hello Names — React + Node.js Beginner Project

A simple full-stack application built with:

        *Frontend: React (Create React App)

        *Backend: Node.js + Express

Users can:

    *Type a name

    *Submit it

    *See a list of all submitted names

This project is perfect for beginners learning React + APIs + Express.  
  

  Folder Structure

  project revo/
│
├── backend/        ← Node + Express API
│   ├── index.js
│   ├── package.json
│
└── frontend/       ← React App
    ├── src/
    │   ├── App.js
    │   └── index.js
    ├── package.json



    🟦 Backend (Node.js + Express)

The backend has two API routes:
    ✅ 1. POST /api/names

        Saves a name to memory.   

        Body Example:

                    { "name": "John" }


            Success Response:

                    { "success": true, "message": "Name stored successfully" }


                Error Responses:

                        { "success": false, "message": "Name is required" }

    ✅ 2. GET /api/names

        Returns the list of stored names.

            Response Example:

                {
                "success": true,
                "names": ["John", "Priya", "Aman"]
            }                    




▶️ Run Backend
cd backend
npm install
npm start






🟩 Frontend (React)
What the React app does:

    Shows a simple input box

        Sends name to backend using fetch()

        Loads all stored names

        Displays them in a list

        Shows validation error if input is empty

        Very beginner-friendly.





⚙️ React Setup (Create React App)

        Create your React app inside the frontend folder:

        npx create-react-app frontend

🔗 Connect React to Backend (Proxy)

            Inside frontend/package.json, add:

            {
            "proxy": "http://localhost:5000"
            }


This allows calling /api/names without typing the full server URL.

▶️ Run Frontend
cd frontend
npm install
npm start