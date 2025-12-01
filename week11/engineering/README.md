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

## 📄 PDF / Article Resources

1. [Software Architecture Patterns (PDF) – Mark Richards](https://theswissbay.ch/pdf/Books/Computer%20science/O%27Reilly/software-architecture-patterns.pdf)
2. [Software Architecture Patterns – Archive.org](https://archive.org/details/software-architecture-patterns_202205)
3. [Software Architecture Patterns – O’Reilly Report Page](https://www.oreilly.com/content/software-architecture-patterns/)
4. [Fundamentals of Software Architecture (PDF) – Neal Ford & Mark Richards](https://mrce.in/ebooks/Software-Fundamentals%20of%20Software%20Architecture.pdf)

---

## 🎥 Video / Tutorial Resources

1. [Top 9 Software Architecture Patterns Every Developer Must Know! (YouTube)](https://www.youtube.com/watch?v=126ALse1rWA)
2. [All Major Software Architecture Patterns Explained in 7 Minutes (YouTube)](https://www.youtube.com/watch?v=ZTVAs9cNo30)
3. [Top 5 Most Used Architecture Patterns (YouTube)](https://www.youtube.com/watch?v=f6zXyq4VPP8)
4. [Software Architecture Patterns – YouTube Playlist](https://www.youtube.com/playlist?list=PLwIMP-2cRgX4BctMI0braVM1McCz_jutK)


---

## **Submission Guidelines**

1. Ensure both repositories (**backend and frontend**) are **private**.
2. Fork the submission repository at [Fundamentals Cohort1 Submissions](https://github.com/Brave-Redemptive/fundamentals-cohort1-submissions)
3. Clone the repo from the forked version on your account to your PC.
4. Add the original repo as a second upstream to easily pull updates.
5. Create a folder with your GitHub username.
6. Create a subfolder inside the folder you created above and name it 'week8'.
7. In this folder, you'll have two folders named backend, and frontend.
8. After you've made your modifications, then push to your online version.
9. Finally, make a pull request to the main fundamentals account.
10. Note that some of the steps will only be done once.
10. Watch [This Video](https://www.youtube.com/watch?v=rxh6MhK6Tbs) to be up to speed on the submission workflow.
4. Deadline for submission is **Friday, 11:59 PM**.
5. Submissions are due by the end of the week. **Late submissions will not be reviewed.**

---
