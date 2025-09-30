# Aplicaión Team To-Do

Aplicación colaborativa de lista de tareas construida con **React + Vite**, **TailwindCSS**, **JSON Server** y **React Toastify**.  
Permite a los usuarios iniciar sesión, crear, filtrar, completar y gestionar tareas de forma sencilla y dinámica.

---

##  Características principales

- ✅ **Login simulado** con `AuthContext` (usuarios fake).
- ✅ **Rutas privadas** protegidas con `PrivateRoute`.
- ✅ **Gestión de estado** con hooks (`useState`, `useEffect`).
- ✅ **Consumo de API** con `axios` y backend simulado con `JSON Server`.
- ✅ **Estilos modernos** con **TailwindCSS**.
- ✅ **Feedback visual** con **react-toastify** (mensajes de éxito, error y logout).
- ✅ **Búsqueda y filtrado** en tiempo real.
- ✅ **Diseño responsive** y limpio.
- ✅ **Buenas prácticas** con ESLint + Prettier.

---

## 📂 Estructura del proyecto

team-to-do/
├── public/
├── src/
│ ├── components/
│ │ ├── Login.jsx
│ │ ├── TaskForm.jsx
│ │ ├── TaskList.jsx
│ │ ├── TaskCard.jsx
│ │ └── PrivateRoute.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── App.jsx
│ ├── api.js
│ ├── main.jsx
│ └── index.css
├── db.json
├── package.json
└── README.md

## ⚙️ Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/wendy662/team-to-do.git
   cd team-to-do
Instalar dependencias

bash
Copiar código
npm install
Levantar JSON Server

bash
Copiar código
npx json-server --watch db.json --port 3000
👉 El backend quedará disponible en:
http://localhost:3000/tasks

Ejecutar la app

bash
Copiar código
npm run dev
Acceder en el navegador
👉 http://localhost:5173/

👥 Usuarios simulados
Puedes ingresar con alguno de estos usuarios:

Usuario: Tati 

Usuario: Wen 

🛠️ Tecnologías utilizadas
React 18 + Vite

TailwindCSS

React Router DOM

Axios

React Toastify

JSON Server

📸 Capturas
Pantalla de Login

Lista de Tareas

👨‍💻 Autores
Este proyecto fue realizado por Tatiana vega y Wendy Mercado

Cada integrante desarrolló y documentó componentes del proyecto, siguiendo buenas prácticas de colaboración en GitHub (uso de ramas, commits descriptivos y PRs).