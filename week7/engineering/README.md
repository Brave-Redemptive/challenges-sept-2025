# Software Engineering Week 7 Challenge

## Challenge Title

**Test Strategy: Coverage and Confidence**

## Scenario / Description

You’ve joined **CodePilot**, a startup building an internal developer platform for automation testing and deployment. The engineering team has been facing issues with **poor test coverage** and **unreliable test confidence**, causing frequent regressions in production. As a **Software Engineer**, your task this week is to design and implement a **comprehensive test strategy** that ensures both **broad coverage** and **high confidence** in the system’s reliability.

Your focus will be on writing meaningful, maintainable tests for a modular backend API, applying industry best practices for unit, integration, and end-to-end testing. The goal is to give your team confidence that every deploy is safe.

---

## Challenge Overview

You are required to:

* Build a **Node.js (Express)** backend with clear module separation (e.g., auth, products, orders, users).
* Implement **comprehensive testing** at multiple levels:

  * **Unit tests** for individual functions.
  * **Integration tests** for API routes and services.
  * **End-to-end tests** for workflows using a testing tool like **Jest**, **Mocha**, or **Supertest**.
* Ensure your tests measure **code coverage** and generate **coverage reports**.
* Incorporate **GitHub Actions CI pipeline** to automate tests on every push.
* Provide a **Postman API collection** for endpoint reference.

---

## Instructions

1. Create **two separate GitHub repositories**:

   * `codepilot-backend` → Backend API with tests.
   * `codepilot-frontend` → Minimal React-Vite client to test your API manually.
2. Backend Requirements:

   * Use **Node.js (Express)**.
   * Add at least 3 modules (e.g., Auth, Orders, Products).
   * Include both **unit and integration tests** using **Jest** or **Mocha + Chai + Supertest**.
   * Generate coverage reports (`jest --coverage` or nyc reports).
   * Include **test environment setup** and mocking where applicable.
   * Add **GitHub Actions CI** to run tests automatically on push or PR.
3. Frontend Requirements:

   * Use **React-Vite** to test and display some API endpoints.
   * Include basic error handling and loading states.
4. Documentation:

   * Include **Postman API documentation** (collection link or JSON export).
   * Write a short **Testing Strategy document** (in your README) explaining how your tests ensure both coverage and confidence.

---

## Expected Deliverables

* **Backend Repository (`codepilot-backend`)**:

  * Express app with modular architecture.
  * Tests covering at least 80% of code.
  * Coverage report in `/coverage` directory.
  * GitHub Actions CI configuration.
  * Postman API documentation.
  * README.md with test setup and strategy notes.
* **Frontend Repository (`codepilot-frontend`)** (optional):

  * Basic UI to consume backend APIs.
  * Proper error and loading feedback.

---

## Learning Resources

**📘 PDF Resource:**
- [Test Driven Javascript Development](https://ptgmedia.pearsoncmg.com/images/9780321683915/samplepages/0321683919.pdf)

**🎥 Video Resource:**
- [
The ULTIMATE Guide to Testing TypeScript Node.js with Jest.](https://youtu.be/0yScewOhjmU?si=UcWVApwbWXsc9VjC)
- [Testing Strategies and Confidence in Code — Kent C. Dodds](https://www.youtube.com/watch?v=Fha2bVoC8SE)

---

## Submission Guidelines

1. Ensure both repositories (**backend and frontend**) are **private**.
2. Fork the submission repository at [Fundamentals Cohort1 Submissions](https://github.com/Brave-Redemptive/fundamentals-cohort1-submissions)
3. Clone the repo from the forked version on your account to your PC.
4. Add the original repo as a second upstream to easily pull updates.
5. Create a folder with your GitHub username.
6. Create a subfolder inside the folder you created above and name it 'week7'.
7. In this folder, you'll have two folders named backend, and frontend.
8. After you've made your modifications, then push to your online version.
9. Finally, make a pull request to the main fundamentals account.
10. Note that some of the steps will only be done once.
10. Watch [This Video](https://www.youtube.com/watch?v=rxh6MhK6Tbs) to be up to speed on the submission workflow.
4. Deadline for submission is **Friday, 11:59 PM**.
5. Submissions are due by the end of the week. **Late submissions will not be reviewed.**

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* This challenge tests your ability to balance **coverage metrics** with **real-world confidence**.
* Focus on writing meaningful tests — not just increasing the coverage percentage.
* Document assumptions and testing trade-offs clearly.
