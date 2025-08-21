# 🚀 Supervisor Assessment App

---

## 📦 Tech Stack

- Next.js
- Tailwind CSS
- Redux
- Redux-Toolkit
- RTK-query
- ShadCN UI
- React-Hook-Form

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zhafranafif/assessment-form-fe.git
cd assessment-form-fe
```
### 2. Install Depedencies
```
npm install
```
### 3. Create .env File
```
NEXT_PUBLIC_API_URL=<<YOUR_NEXT_PUBLIC_API_URL>>
```
### 4. Start the application
```
npm run dev
```
---

## 🐳 Run with Docker

### 1. Create Image
```
docker build -t <<YOUR-APP-NAME>> .

//then run the docker
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=<<YOUR_NEXT_PUBLIC_API_URL>> <<YOUR-APP-NAME>>
```

### 2. Using Docker Compose (Recommended)
```
docker compose up --build

// TO STOP THE COMPOSE 
docker compose down
```
