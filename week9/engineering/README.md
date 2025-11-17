# Software Engineering Week 9 Challenge

## Challenge Title

**Integrating Legacy Systems: Bridging the Old and the New**

## Scenario / Description

You’ve joined **LegacyBridge**, a fintech company that has been operating for over a decade. The company’s core payment system is built using an outdated monolithic architecture written in PHP, while the new team is developing microservices using Node.js and React.

Your task this week is to design and implement a **Node.js service** that integrates with an existing legacy API. You must ensure **data consistency**, **graceful error handling**, and **reliable communication** between the new and old systems.

This challenge focuses on building robust integration layers, applying modern API design principles, and ensuring smooth interoperability across legacy and modern systems.

---

## Challenge Overview

You are required to:

* Build a **Node.js (Express)** integration service that consumes data from a **mock legacy API** (you can simulate this using a local or mock server).
* Implement logic to transform, cache, and forward data to a **modern RESTful or GraphQL API**.
* Ensure backward compatibility and handle edge cases like API versioning, timeouts, and format mismatches.
* Build a **React-Vite** frontend that displays transformed legacy data.
* Document the API integration flow and testing strategy in your README.

---

## Instructions

1. Create **two private GitHub repositories**:

   * `legacybridge-backend` for backend integration service.
   * `legacybridge-frontend` for frontend UI.
2. Backend Requirements:

   * Use **Node.js (Express) and Typescript**.
   * Consume data from a mock legacy system (e.g., JSONPlaceholder or your own mock server).
   * Transform and expose new endpoints that improve usability (e.g., `/v2/payments`, `/v2/customers`).
   * Implement **error handling**, **retry logic**, and **API versioning**.
   * Include **caching** (in-memory or Redis) for improved performance.
   * Write **unit tests** (Jest or Mocha) for integration logic.
   * Document endpoints using **Postman**.
3. Frontend Requirements:

   * Use **React-Vite** to display legacy-integrated data.
   * Include pages for viewing and interacting with transformed data.
   * Handle loading, error, and success states clearly.
4. Deployment:

   * Deploy backend and frontend (e.g., on Render, Railway, or Vercel).
   * Include deployed URLs in your README.

---

## Expected Deliverables

* **Backend Repository (`legacybridge-backend`)**:

  * Node.js integration service with caching and versioning.
  * Postman API documentation.
  * Coverage report for integration tests.
  * README with API flow diagram and setup guide.
* **Frontend Repository (`legacybridge-frontend`)**:

  * React-Vite UI consuming backend API.
  * UI that displays data transformations from legacy to modern endpoints.
* Deployment URLs (if applicable).

---

## Learning Resources

## 📄 PDF / Article Resources

1. [Modernizing Legacy Applications for the Cloud (PDF)](https://jisem-journal.com/index.php/journal/article/download/13018/6076/21918)
2. [Integrating Legacy Applications through Cloud Services – Fujitsu (PDF)](https://www.fujitsu.com/es/Images/LegacyModernization_IntegratingLegacywCloud.pdf)
3. [Legacy Application Modernization Journey – CAI (PDF)](https://www.cai.io/media/documents/CAI-Legacy-App-Modernization.pdf)
4. [Azure Modernization Pathways: Enhancing Legacy Application Performance (PDF)](https://www.onlinescientificresearch.com/articles/azure-modernization-pathways-a-strategic-guide-to-enhancing-legacy-application-performance.pdf)
5. [Enterprise Guide to Continuous Application Modernization – AWS (PDF)](https://pages.awscloud.com/rs/112-TZM-766/images/AWSMP_newrelic_enterprise_guide_continuous_app_modernization_Sep.pdf)
6. [Modernizing Legacy Systems: Journey to Kubernetes-Based Microservices (PDF)](https://eajournals.org/wp-content/uploads/sites/21/2025/06/Modernizing-Legacy-Systems.pdf)

---

## 🎥 Video / Tutorial Resources

1. [Modernizing Legacy: COBOL to Cloud with GitHub Copilot (YouTube)](https://www.youtube.com/watch?v=xWA0xYttWMo)
2. [What is Legacy Modernization? – Google Cloud](https://cloud.google.com/discover/what-is-legacy-modernization)
3. [Kubernetes and Legacy Modernization – Microservices Migration Talk](https://www.youtube.com/watch?v=1XZskvtraiU)


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

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* Focus on building a **bridge**, not a rewrite — simulate real-world legacy system challenges.
* Emphasize **resilience and clarity** — production environments often rely on integrations like these.
* Ensure backward compatibility; never break existing endpoints without versioning.
* Document every assumption made about the legacy API behavior.
