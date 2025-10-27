# AI/ML Engineering Weekl 6 Challenge

## Challenge Title

**Designing Scalable and Reliable APIs for AI-Driven Data Services**

## Scenario / Description

You’ve joined **FlowServe AI**, a growing data intelligence company that provides machine learning–driven analytics for fintech applications. The company’s new project requires a **scalable and reliable API layer** that delivers AI-based insights in real time to client applications.

Your task is to design and implement **API endpoints** using Python that can handle **high-volume requests**, provide **predictive insights**, and manage **asynchronous processing** efficiently.

This challenge focuses on applying principles of scalable backend design in the context of **AI/ML model serving** and **data analytics delivery**.

---

## Challenge Overview

You are required to:

* Build a **Python (FastAPI or Flask)** backend that serves **AI model predictions** via RESTful endpoints.
* Design the API to be **fault-tolerant, asynchronous, and scalable**.
* Integrate a simple **pre-trained model** (e.g., scikit-learn or TensorFlow) for demonstration.
* Use **PostgreSQL** (or SQLite for simplicity) to log requests and responses.
* Document the API endpoints using **Postman**.

---

## Instructions

1. Create **two separate GitHub repositories**:

   * One for the **backend API** (`flowserveai-backend`).
   * One for the **AI/ML pipeline and model code** (`flowserveai-ml`).
2. Backend Requirements:

   * Use **FastAPI** (preferred) or **Flask**.
   * Expose at least **three key endpoints**:

     * `/api/v1/predict` → Returns model prediction.
     * `/api/v1/metrics` → Returns performance or request metrics.
     * `/api/v1/logs` → Fetches stored logs or analytics.
   * Implement **asynchronous handling** (if using FastAPI).
   * Include **error handling**, **logging**, and **rate limiting**.
   * Integrate a **PostgreSQL** database for persistence.
   * Document your API using **Postman**.
3. AI/ML Requirements:

   * Include a **data preprocessing script**.
   * Use a small pre-trained ML model (e.g., regression, classification, or clustering).
   * Create an endpoint that consumes the model for predictions.
   * Log each prediction request and response to the database.
4. Both repositories must be **private** and invite **@braveredemptive** as a collaborator.

---

## Expected Deliverables

* **Backend Repository (`flowserveai-backend`)**:

  * FastAPI or Flask application.
  * Async or multithreaded API endpoints.
  * Logging and error-handling middleware.
  * PostgreSQL schema for storing requests and responses.
  * **Postman API documentation** (link or JSON file).
* **AI/ML Repository (`flowserveai-ml`)**:

  * Pre-trained model and data preprocessing script.
  * Notebook or script demonstrating model workflow.
  * Integration script connecting model to backend API.
  * README detailing setup and usage.

---

## Learning Resources

**📘 PDF Resource:**
[Designing Machine Learning APIs (Google Cloud Guide)](https://cloud.google.com/architecture/ml-design-patterns)

**🎥 Video Resource:**
[How to Build Scalable Machine Learning APIs with FastAPI](https://www.youtube.com/watch?v=0RSBz3qg9Zg)

---

## Submission Guidelines

1. Ensure both repositories (**backend and AI/ML**) are **private**.
2. Invite **@braveredemptive** to both repositories.
3. Log your submission details (repo links) in this document:
   👉 [Submission Log Spreadsheet](https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk)
4. Deadline for submission is **Friday, 11:59 PM**.
5. Submissions are due by the end of the week. **Late submissions will not be reviewed.**


## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* Focus on building a **robust API architecture** that could scale in production.
* Prioritize **asynchronous processing** and **clear separation of concerns** between backend and ML code.
* Keep your endpoints predictable, consistent, and developer-friendly.
