# AI/ML Engineering Week 5 Challenge

## Challenge Title

**Database Modeling for Complex Entities in AI-Driven Health Data Systems**

## Description

You're working as a **Machine Learning Engineer** at **PulseTrack AI**, a company developing an intelligent health insights system that learns from user activity, nutrition, and medical data. Your mission this week is to **design a data architecture** and **implement data ingestion, preprocessing, and storage pipelines** to support future AI models.

This challenge focuses on how well you model complex relationships in your data schema, build APIs for data access, and create foundational scripts for AI/ML data workflows.

---

## Challenge Overview

You are required to:

* Model and implement a **relational database schema** that captures entities like **Users**, **HealthMetrics**, **Meals**, **Appointments**, and **Reports**.
* Use **Python (FastAPI or Flask)** to create a backend API for interacting with the database.
* Implement **data ingestion and preprocessing scripts** to prepare raw data for training.
* Document your API endpoints in **Postman**.
* Keep backend and ML notebooks separate.

---

## Instructions

1. Create **two separate GitHub repositories**:

   * One for the **backend API** (`pulseai-backend`)
   * One for the **AI/ML scripts and notebooks** (`pulseai-ml`)
2. Backend Requirements:

   * Use **Python + FastAPI** (or Flask).
   * Use **PostgreSQL** with SQLAlchemy or Tortoise ORM.
   * Implement APIs for at least **3 related entities** (e.g., Users, HealthMetrics, Meals).
   * Document your APIs using **Postman**.
3. AI/ML Requirements:

   * Implement a **data ingestion** script that populates the database with mock data.
   * Create a **data preprocessing** notebook (Jupyter Notebook) to clean and analyze data.
   * Use **Pandas, NumPy, and Matplotlib** for analysis.
4. Both repositories **must be private**. Invite **@braveredemptive** as a collaborator.
5. Keep all sensitive configurations in a `.env` file.

---

## Expected Deliverables

* **Backend Repository (`pulseai-backend`)**:

  * FastAPI or Flask application with CRUD endpoints.
  * Database schema and ORM models.
  * Postman API documentation (link or JSON file).
  * Proper README.md with setup instructions.
* **AI/ML Repository (`pulseai-ml`)**:

  * Data ingestion scripts.
  * Data preprocessing and analysis Jupyter Notebook.
  * Visualizations and insights.
  * README.md describing approach and dependencies.

---

## Learning Resources

**📘 PDF Resource:**
[Designing Data-Intensive Applications (Excerpt)](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/ch01.html)

**🎥 Video Resource:**
[Relational Database Design and Modeling for Machine Learning](https://www.youtube.com/watch?v=QpdhBUYk7Kk)

---

## Submission Guidelines

1. Both repositories (**backend** and **AI/ML**) must be **private**.
2. Invite **@braveredemptive** to both repositories.
3. Log your submission details (repo links) in this document:
   👉 [Submission Log Spreadsheet](https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk)
4. Deadline for submission is **Friday, 11:59 PM**.
5. Submissions are due by the end of the week. **Late submissions will not be reviewed.**

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* Focus on designing scalable data systems that can support AI/ML models.
* Pay attention to **data quality**, **consistency**, and **documenting assumptions**.
* Ensure API documentation is complete with example requests and responses.
