# Software Engineering Week 8 Challenge

## Challenge Title

**CI/CD + Observability: Building Reliable and Insightful Delivery Pipelines**

## Scenario / Description

You’ve joined **DeployHub**, a DevOps-focused SaaS company that provides CI/CD automation and monitoring solutions for microservice-based applications. The team is working to improve its **deployment reliability** and **observability** after recent issues with untracked failures in production.

As a **Software Engineer**, your task this week is to implement a **continuous integration and continuous deployment (CI/CD)** pipeline with built-in **observability**—ensuring that every deployment is automated, tested, and monitored for performance insights and error visibility.

This challenge focuses on your ability to design, automate, and monitor a complete delivery process with **Node.js (backend)** and **React-Vite (frontend)** while integrating observability tools for system health tracking.

---

## Challenge Overview

You are required to:

* Set up a **Node.js (Express)** backend and a **React-Vite** frontend.
* Implement a **CI/CD pipeline** that automatically builds, tests, and deploys both services.
* Integrate **observability tools** (logs, metrics, tracing) to monitor app health.
* Use GitHub Actions for automation and Docker for environment consistency.
* Deploy to **Render**, **Railway**, or **Vercel** (free tiers acceptable).

---

## Instructions

1. Create **two separate GitHub repositories**:

   * `deployhub-backend` for your backend service.
   * `deployhub-frontend` for your frontend.
2. Backend Requirements:

   * Node.js (Express) with modular routes and error handling.
   * Logging using **Winston** or **Pino**.
   * Metrics collection with **Prometheus client** or similar.
   * Basic health check endpoint (`/api/health`).
   * Dockerfile for containerization.
3. Frontend Requirements:

   * React-Vite app consuming backend API.
   * Build and deploy automatically via CI/CD.
   * Show app health status and version info (from API endpoint).
4. CI/CD Requirements:

   * Use **GitHub Actions** for automated build, test, and deploy workflows.
   * Include test jobs (Jest or Mocha) and linting.
   * Add branch protections (e.g., run tests on pull requests).
5. Observability Requirements:

   * Implement structured logging.
   * Add a simple dashboard or logs visualization (can use external tools like Grafana or console-based logs).
   * Track basic metrics (uptime, API response time, error counts).
6. Deployment:

   * Deploy backend (e.g., Render/Railway) and frontend (e.g., Vercel).
   * Include deployment URLs in README.

---

## Expected Deliverables

* **Backend Repository (`deployhub-backend`)**:

  * Node.js app with logging, metrics, and health checks.
  * Dockerfile and GitHub Actions workflows.
  * Deployed backend URL.
  * Postman API documentation.
* **Frontend Repository (`deployhub-frontend`)**:

  * React-Vite app consuming backend endpoints.
  * Automated build and deploy workflow.
  * Deployed frontend URL.
  * README.md with setup and deployment details.
* **Observability Metrics** (logged or visualized):

  * Response time, uptime, and error frequency.

---

## Learning Resources

## 📄 PDF / Article Resources

1. [CI/CD Best Practices for Building Modern Applications (AWS) (PDF)](https://d1.awsstatic.com/events/Summits/AMER2019/Toronto/CICD_best_practices_for_building_modern_applications_MAD303.pdf)
2. [The CI/CD Litmus Test — AWS Prescriptive Guidance (PDF)](https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/strategy-cicd-litmus/strategy-cicd-litmus.pdf)
3. [CI/CD Security Cheat Sheet (OWASP) (Web PDF)](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
4. [Best Practices for Configuring CI/CD Pipelines in Open-Source Projects (PDF)](https://rjpn.org/jetnr/papers/JETNR2310003.pdf)
5. [JumpStart to CI/CD – Whitepaper (PDF)](https://www.progress.com/docs/default-source/papers/cicd_whitpaperv4.pdf?download=true)
6. [A Journey Through CI/CD Principles and Best Practices (PDF)](https://pdfs.semanticscholar.org/303c/23a4d090234dba8a6ac5565adce818341de2.pdf)

---

## 🎥 Video / Tutorial Resources

1. [How to Design a Modern CI/CD Pipeline (YouTube)](https://www.youtube.com/watch?v=KnSBNd3b0qI)
2. [GitLab CI/CD Tutorial for Beginners [Crash Course] (YouTube)](https://www.youtube.com/watch?v=qP8kir2GUgo)
3. [How to Create a CI/CD Pipeline in Azure DevOps (YouTube)](https://www.youtube.com/watch?v=_Qq3HO5l3ko)
4. [CI/CD Full Course | CI/CD Tutorial | Continuous Integration And Continuous Delivery (YouTube)](https://www.youtube.com/watch?v=h9K1NnqwUvE)


---

## Submission Guidelines

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

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* The goal is to simulate **production-grade CI/CD and monitoring** setup.
* Prioritize **observability over complexity** — even console-based metrics are acceptable if meaningful.
* Use best practices for secure automation (e.g., GitHub Secrets for credentials).
