<h1 align="center"> Text Analysis with Quarkus and Python 💬 </h1>

This project demonstrates how to build a fullstack application using Quarkus
(Java) and Python, leveraging GraalPy for seamless Python integration. It also
features a modern web interface built with React to showcase Quarkus'
capabilities for fullstack development. <https://sentiment-analysis.martindotpy.dev>.

## Features

- Sentiment analysis powered by Python (VADER Sentiment)
- RESTful API built with Quarkus
- Embedded Python execution using GraalPy
- Responsive React web UI for text analysis

## Technologies Used

- Quarkus (Java framework)
- GraalPy (Python on GraalVM)
- React (frontend)
- Maven (build tool)

## Getting Started

### Prerequisites

- Java 21+

> [!NOTE]
>
> You do not need to install Node.js or npm manually. Quarkus will automatically
> download and use a local version for the frontend when running `quarkus:dev`.

### Backend (Quarkus + GraalPy) + Frontend (React)

1. Install dependencies:

   ```sh
   ./mvnw clean install
   ```

2. Run the application:

   ```sh
   ./mvnw quarkus:dev
   ```

### Frontend (React)

If you want to run the web UI separately, follow these steps:

1. Navigate to the web UI folder:

   ```sh
   cd src/main/webui
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## Reference & Credits

- Based on the official GraalPy Spring Boot example:
  [GraalPy Spring Boot Guide](https://github.com/graalvm/graal-languages-demos/tree/main/graalpy/graalpy-spring-boot-guide)

---

Feel free to explore, modify, and use this project as a template for your own
Quarkus + Python applications!
