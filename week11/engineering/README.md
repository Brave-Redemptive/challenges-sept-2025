# **Software Engineering Weekly Challenge**

## **Topic:** Technical Trade-Off Decisions

## **Title:**

**Evaluating Technical Trade-Offs in a Distributed Payments Platform**

---

## **Description / Scenario**

You’ve joined **PayVerse**, a rapidly scaling fintech company that processes high‑volume transactions across multiple regions. The engineering team is planning the next major system upgrade, but every architectural decision comes with trade-offs affecting scalability, cost, developer velocity, maintainability, and reliability.

As a Software Engineer on the Core Services team, you are tasked with analyzing and implementing **three major technical trade-offs**. You must justify each decision, implement a minimal working solution, and demonstrate your reasoning through documentation and clean code.

This challenge simulates real-world engineering environments where technical decisions must be intentional, measurable, and defensible.

---

## **Instructions**

1. Choose **any 3 technical decision categories** from the list below:

   * **SQL vs NoSQL**
   * **REST vs gRPC**
   * **Monorepo vs Polyrepo**
   * **Redis Cache vs In-Memory Cache**
   * **WebSockets vs Server-Sent Events (SSE)**
   * **JWT vs Session-Based Authentication**
   * **Docker Compose vs Kubernetes (K8s)**

2. For each selected decision:

   * Identify **3–5 trade-offs** (advantages, disadvantages, constraints).
   * Choose **one option** and justify it clearly.

3. Build a small proof-of-concept system that reflects your chosen decisions:

   * **Backend:** Node.js (Express, no NestJS)
   * **Frontend:** React-Vite or Next.js
   * Backend and frontend must be **separate private repositories**.

4. Backend Requirements:

   * At least **two API endpoints** demonstrating your trade-offs.
   * Proper error handling and modular folder structure.
   * Include **Postman API documentation**.

5. Frontend Requirements:

   * Implement a simple UI consuming your backend APIs.
   * At least **two pages/screens** with loading and error states.

6. Create a **Technical Trade-Off Report** (PDF or Google Doc) containing:

   * Problem statement
   * Decision options
   * Trade-off table
   * Justification
   * Architecture diagram
   * Implementation summary

7. Record your submission in the provided Google Sheet.

---

## **Expected Deliverables**

### **1. Backend Repository: `payverse-backend`**

* Functional Node.js backend
* Trade-off-aligned implementation
* API endpoints + Postman documentation
* README with decisions and setup

### **2. Frontend Repository: `payverse-frontend`**

* React-Vite or Next.js interface
* Functional UI interacting with backend
* README with setup instructions

### **3. Technical Trade-Off Report**

* PDF or Google Doc
* Architecture diagram
* Explanation of trade-offs and final decisions

### **4. (Optional) Demo Video**

2–4 minutes walkthrough of architecture + implementation

---

## **Resources**

### **PDF Resource:**

**Software Architecture Patterns (O’Reilly)**
[https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/)

### **Video Resource:**

**GOTO Conference – Trade-Offs in Software Engineering**
[https://www.youtube.com/watch?v=bC8fpKX5eJQ](https://www.youtube.com/watch?v=bC8fpKX5eJQ)

---

## **Submission Guidelines**

1. Backend and frontend repositories **must be private**.
2. Invite **@braveredemptive** to both repositories.
3. Backend and frontend must be **separate repositories**.
4. POSTMAN documentation must be included.
5. Log your submission here:
   👉 [https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk](https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk)
6. **Deadline:** Friday, 11:59 PM
7. **Late submissions will not be reviewed.**

---
