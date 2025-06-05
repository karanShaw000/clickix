
## Clickix - URL Shortner

A URL shortener is a tool that converts a long URL (web address) into a shorter, more manageable version. These shorter URLs redirect to the original long URL when clicked.

### Features

- URL Shortner which store in the database (here MongoDB)
- Link Analytics section which shows top 10 most clicked links
- Rate limited the generation of shorten url where user can create upto 10 links per 10 minitues
- Links will be expired after 30 days


[Application Link]()

### 🔧 Frontend

- Built with **React**.
- **Shadcn** as ui library
- TanStack Qurey

### 🔙 Backend

- Built with **Express.js**.


### 🗄️ Database

- Used **MongoDB** as the database.
- Integrated **Mongoose** as the ODM to model and interact with the data.

### 🚀 Deployment

- Deployed using **Microsoft Azure**:
  - The **Express backend** is hosted on **Azure App Service**.
  - The **React frontend** is deployed via **Azure Static Web Apps**.



## 🛠️ Run Locally

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone git@github.com:karanShaw000/clickix.git
```

---

### 2. Setup the Backend

```bash
cd clickix/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file from the sample:

```bash
cp .env.sample .env
```

Edit `.env` and provide the following values:

- `MONGODB_URL` – Your MongoDB connection string
- `PORT` – (Optional) Default is `5000`

> ⚠️ If you change the backend port from `5000`, make sure to update the port in `client/src/libs/network.ts` for development.

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd ../client
```

Install dependencies:

```bash
npm install
```

Start the React app (usually runs on `http://localhost:5173`):

```bash
npm run dev
```

---

You're now all set to use **Clickix** locally!






