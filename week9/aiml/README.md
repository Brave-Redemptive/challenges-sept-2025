# AI/ML Engineering Week 9 Challenge

## Challenge Title

**Integrating Legacy Systems with Modern Machine Learning Pipelines**

## Scenario / Description

You’ve joined **DataBridge AI**, a logistics company that has decades of historical shipment and tracking data stored in a **legacy relational database system**. The company now wants to integrate this legacy data into a **modern AI pipeline** for predictive analytics and anomaly detection.

Your task this week is to design and implement a **data integration pipeline** that connects to a legacy-style database, extracts and transforms data, and feeds it into a **machine learning model** for prediction. You must ensure that the system is reliable, compatible, and maintainable across old and new systems.

This challenge focuses on connecting **legacy data infrastructure** to modern ML workflows, addressing challenges like schema mismatches, inconsistent data, and integration reliability.

---

## Challenge Overview

You are required to:

* Connect to a **mock legacy database** (e.g., SQLite, MySQL, or PostgreSQL) containing old-style shipment or user data.
* Implement a **data extraction and transformation pipeline** using **Python (Pandas / SQLAlchemy)**.
* Train a simple **ML model** (e.g., regression or classification) on the transformed data.
* Expose predictions using a **FastAPI or Flask API**.
* Document the full flow from data integration to ML inference.

---

## Instructions

1. Create **two private GitHub repositories**:

   * `databridgeai-ml` → for data processing and ML training.
   * `databridgeai-api` → for serving predictions.
2. ML Repository Requirements:

   * Use **Python (3.10+)** with Pandas, SQLAlchemy, and scikit-learn.
   * Connect to a mock legacy database (e.g., SQLite or MySQL) and extract data.
   * Perform **data cleaning and transformation** to align legacy fields with new schema.
   * Train and evaluate a basic ML model (classification or regression).
   * Save trained model (`.pkl` or `.joblib`).
   * Include **unit tests** for data pipeline and model output.
3. API Repository Requirements:

   * Use **FastAPI** (preferred) or **Flask** to expose model predictions.
   * Endpoints:

     * `/api/v1/predict` → accepts new data and returns predictions.
     * `/api/v1/health` → returns system status.
   * Implement **logging**, **error handling**, and **backward-compatible schema mapping**.
   * Add **Postman API documentation**.
4. Deployment (optional but encouraged):

   * Deploy API via Render, Railway, or Hugging Face Spaces.
5. Include diagrams or flowcharts showing how legacy data integrates with your ML pipeline.

---

## Expected Deliverables

* **ML Repository (`databridgeai-ml`)**:

  * Data ingestion and transformation scripts.
  * Trained ML model and evaluation report.
  * Unit tests for pipeline and model.
  * README explaining integration strategy and schema mapping.
* **API Repository (`databridgeai-api`)**:

  * FastAPI/Flask app serving model predictions.
  * Logging, error handling, and backward-compatible schemas.
  * Postman API documentation (JSON or link).
  * README with setup, deployment instructions, and flow diagram.

---

## Learning Resources

## 📄 PDF / Article Resources

1. [Integrating Artificial Intelligence with Legacy Systems (PDF)](https://eajournals.org/wp-content/uploads/sites/21/2025/05/Integrating-Artificial-Intelligence.pdf)
2. [From Legacy to AI-Native: Transforming Enterprise Data Pipelines (PDF)](https://jisem-journal.com/index.php/journal/article/download/12746/5924/21444)
3. [Challenges of Integrating Artificial Intelligence in Legacy Systems (PDF)](https://papers.ssrn.com/sol3/Delivery.cfm/5268176.pdf?abstractid=5268176)
4. [AI-Driven Mainframe Modernization: Unlocking Legacy Data for Cloud Analytics (PDF)](https://sarcouncil.com/download-article/SJECS-72_-2025-60-67.pdf)
5. [Automating Legacy System Modernization for Cloud Readiness Using AI Techniques (PDF)](https://www.authorea.com/users/925546/articles/1297293/master/file/data/Automating%20Legacy%20System%20Modernization%20for%20Cloud%20Readiness%20Using%20AI%20Techniques/Automating%20Legacy%20System%20Modernization%20for%20Cloud%20Readiness%20Using%20AI%20Techniques.pdf)

---

## 🎥 Video / Tutorial Resources

1. [AI Data Pipelines — What They Are and How They Differ from Legacy Pipelines](https://estuary.dev/blog/ai-data-pipeline/)
2. [The Role of Data Engineering in Modernizing Legacy Systems](https://dev.to/smart_data_/the-role-of-data-engineering-in-modernizing-legacy-systems-a-consultants-perspective-1on9)


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

* Focus on **real-world legacy data migration** challenges — data inconsistency, missing documentation, and schema drift.
* Demonstrate **graceful handling of old data models** while preparing for modern ML integration.
* Include a clear explanation of how legacy compatibility is preserved through your design.
