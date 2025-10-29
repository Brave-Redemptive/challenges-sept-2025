# Software Engineering Week 6 Challenge

## Challenge Title

**Designing Scalable and Reliable APIs**

## Scenario / Description

You’ve just joined **FlowServe**, a fast-growing fintech company focused on processing real-time transactions and digital wallet operations. As a **Software Engineer**, you’ve been tasked with designing and implementing **scalable, reliable APIs** that can handle increasing user loads while maintaining high availability and fault tolerance.

Your mission is to design and build a robust backend API layer that follows best practices for **scalability, maintainability, and resilience**, along with a lightweight frontend for testing and data interaction.

---

## Challenge Overview

You are required to:

* Build a **Node.js (Express)** backend with a focus on **scalable and modular API design**.
* Implement **robust error handling, validation, and rate limiting**.
* Use **PostgreSQL** as your primary database with an ORM (Sequelize or Prisma).
* Develop a **React-Vite frontend** for testing and displaying data from your APIs.
* Document your APIs in **Postman** and ensure good developer experience.

---

## Instructions

1. Create **two separate GitHub repositories**:

   * `flowserve-backend` for backend API code.
   * `flowserve-frontend` for frontend code.
2. Backend Requirements:

   * Use **Node.js + Express.js**.
   * Implement APIs for **user management and transaction simulation**.
   * Include **pagination, request validation (Joi or Zod)**, and **error handling middleware**.
   * Implement **logging (Winston or Pino)** and **rate limiting**.
   * Ensure routes are modular and well-documented.
   * Include **Postman API documentation**.
3. Frontend Requirements:

   * Use **React-Vite**.
   * Build simple pages for listing users and simulating transactions.
   * Handle success, error, and loading states gracefully.
4. Deployment (optional):

   * You may use **Render**, **Railway**, or **Vercel** for deployment.
5. Make both repositories **private** and invite **@braveredemptive** as a collaborator.

---

## Expected Deliverables

* **Backend Repository (`flowserve-backend`)**:

  * Node.js (Express) setup with environment configuration.
  * PostgreSQL integration and ORM-based data models.
  * CRUD APIs for users and transactions.
  * Error handling, request validation, and rate limiting.
  * Logging mechanism for performance insights.
  * **Postman API documentation** (JSON or shareable link).
* **Frontend Repository (`flowserve-frontend`)**:

  * React-Vite project that consumes your backend API.
  * UI for basic CRUD operations (users, transactions).
  * Clean, responsive layout with meaningful feedback states.
* **README.md** in both repos describing setup, API usage, and project overview.

---

## Learning Resources

**📘 PDF Resource:**
[API Design Guidelines by Microsoft (PDF)](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)

**🎥 Video Resource:**
[Designing Scalable APIs — Backend Best Practices](https://youtu.be/7nm1pYuKAhY?si=2fmalEtEUrc3EAKb)

---

## Submission Guidelines

1. Ensure both repositories (**backend and frontend**) are **private**.
2. Invite **@braveredemptive** to both repositories.
3. Log your submission details (repo links) in this document:
   👉 [Submission Log Spreadsheet](https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk)
4. Deadline for submission is **Friday, 11:59 PM**.
5. Submissions are due by the end of the week. **Late submissions will not be reviewed.**

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* Emphasize **reliable API design** and **consistent performance**.
* Think about how to handle high traffic and potential database load.
* Keep your endpoints, documentation, and testing clean and professional.
