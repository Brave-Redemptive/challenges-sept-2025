# AI/ML Engineering Week 7 Challenge

## Challenge Title

**Test Strategy: Coverage and Confidence in Machine Learning Pipelines**

## Scenario / Description

You’ve joined **CodePilot AI**, a growing AI startup that builds predictive analytics APIs for fintech clients. Recently, the company discovered that undetected bugs and untested edge cases in data pipelines and model inference code have caused unreliable predictions in production.

As an **AI/ML Engineer**, your task this week is to design and implement a **testing strategy** for your machine learning pipeline — one that increases **coverage** (breadth of testing) and **confidence** (trust in results). You’ll focus on applying software testing best practices to ML systems, ensuring that data transformations, model predictions, and APIs are all properly validated and reliable.

---

## Challenge Overview

You are required to:

* Implement a small **ML pipeline** (e.g., classification or regression) using **Python (scikit-learn or TensorFlow)**.
* Build a **FastAPI or Flask** service that exposes your model’s predictions.
* Write **unit**, **integration**, and **functional tests** to validate your ML workflow:

  * **Unit tests:** Cover data preprocessing and model components.
  * **Integration tests:** Validate data flow between components.
  * **Functional tests:** Ensure API endpoints behave correctly end-to-end.
* Implement **mocking/stubbing** where real data or model loading is expensive.
* Generate **test coverage reports** and ensure at least **85% coverage**.
* Integrate **GitHub Actions CI** to automate testing.

---

## Instructions

1. Create **two private GitHub repositories**:

   * `codepilotai-ml` → ML pipeline and training/testing scripts.
   * `codepilotai-api` → API service for model serving.
2. ML Repository Requirements:

   * Use **Python 3.10+**.
   * Include at least:

     * Data preprocessing script.
     * Model training and saving script.
     * Evaluation notebook or Python script.
   * Write **unit tests** for preprocessing, feature engineering, and model evaluation.
   * Include **mocking** for external dependencies or large datasets.
3. API Repository Requirements:

   * Use **FastAPI** (preferred) or **Flask**.
   * Expose endpoints such as:

     * `/api/v1/predict` → Returns model predictions.
     * `/api/v1/health` → Returns service status.
   * Include **integration and functional tests** (e.g., using Pytest + HTTPX).
   * Include **Postman documentation** for all endpoints.
4. Add a **GitHub Actions workflow** that runs all tests automatically.
5. Ensure both repositories are **private** and invite **@braveredemptive**.

---

## Expected Deliverables

* **ML Repository (`codepilotai-ml`)**:

  * Preprocessing and model training scripts.
  * Test suite (Pytest or Unittest) covering data validation and model behavior.
  * Coverage report (`pytest --cov` or equivalent).
  * Mocked dataset and evaluation results.
  * README.md explaining the test structure.
* **API Repository (`codepilotai-api`)**:

  * FastAPI/Flask app with model-serving endpoints.
  * Integration tests and functional endpoint tests.
  * CI pipeline (GitHub Actions) to automate testing.
  * Postman API documentation (link or JSON file).

---

## Learning Resources

**📘 PDF Resource:**
[Practical Testing for Data Science and Machine Learning Systems (O’Reilly Excerpt)](https://learning.oreilly.com/library/view/testing-in-data/9781098129336/)

**🎥 Video Resource:**
[Testing and Monitoring Machine Learning Systems — Made With ML](https://www.youtube.com/watch?v=fKhbD6Y5Eo8)

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

* Focus on **building trust** in ML systems through systematic testing.
* Ensure all tests are **meaningful, automated, and repeatable**.
* Balance test coverage with **real-world relevance** — avoid overfitting your tests to synthetic data.
