# AI/ML Engineering Week 8 Challenge

## Challenge Title

**CI/CD + Observability for Machine Learning Systems**

## Scenario / Description

You’ve joined **DeployHub AI**, a company that builds and maintains automated machine learning (ML) pipelines for real-time analytics. The team is transitioning from manual deployment and monitoring to a fully automated **CI/CD pipeline with observability**, ensuring that model training, testing, and deployment are consistent, auditable, and reliable.

As an **AI/ML Engineer**, your goal this week is to design and implement a **CI/CD pipeline** for an ML model lifecycle, along with **observability mechanisms** to monitor model performance, data drift, and system health.

This challenge will test your ability to apply MLOps principles using modern tools for automation, deployment, and monitoring.

---

## Challenge Overview

You are required to:

* Build and containerize a simple **ML pipeline** (data preprocessing, model training, evaluation, and prediction service).
* Use **FastAPI** (preferred) or **Flask** to expose your model’s inference endpoint.
* Create a **CI/CD workflow** using **GitHub Actions** for automated testing and deployment.
* Integrate **observability features** for logs, metrics, and basic monitoring.
* Deploy your ML API to **Render**, **Railway**, or **Hugging Face Spaces**.

---

## Instructions

1. Create **two private GitHub repositories**:

   * `deployhubai-ml` → ML model training and evaluation scripts.
   * `deployhubai-api` → FastAPI/Flask service for serving predictions.
2. ML Repository Requirements:

   * Use **Python (3.10+)** with scikit-learn or TensorFlow.
   * Implement modular scripts for preprocessing, training, and evaluation.
   * Store trained model as `.pkl` or `.h5`.
   * Include **unit tests** for data validation and model output.
   * Add a **Dockerfile** for containerization.
   * Push to registry automatically using **GitHub Actions**.
3. API Repository Requirements:

   * Use **FastAPI** to expose endpoints:

     * `/api/v1/predict` — Predict endpoint.
     * `/api/v1/metrics` — Return performance and request metrics.
     * `/api/v1/health` — Health check endpoint.
   * Log predictions and errors using **Python’s logging** or **Loguru**.
   * Add observability integration (e.g., Prometheus metrics, MLflow logging, or basic analytics dashboard).
   * Deploy automatically on successful CI/CD pipeline execution.
4. CI/CD Requirements:

   * **GitHub Actions** workflow with:

     * Linting (flake8, black).
     * Unit testing (pytest).
     * Docker build and push.
     * Deployment to chosen platform (Render/Railway/Hugging Face Spaces).
   * Use environment variables securely via GitHub Secrets.
5. Observability Requirements:

   * Log request counts, error rates, and latency metrics.
   * Monitor basic model performance indicators (e.g., accuracy drift, inference latency).
   * Store logs locally or via a cloud monitoring tool.

---

## Expected Deliverables

* **ML Repository (`deployhubai-ml`)**:

  * Preprocessing, model training, and evaluation scripts.
  * Unit tests for data and model validation.
  * Dockerfile and CI workflow.
  * README.md explaining structure and usage.
* **API Repository (`deployhubai-api`)**:

  * FastAPI/Flask service exposing ML endpoints.
  * CI/CD workflow with deployment automation.
  * Logging and observability instrumentation.
  * Postman documentation for endpoints.
  * README.md with deployment URL and observability setup.

---

## Learning Resources

## 📄 PDF / Article Resources

1. [Practical MLOps: Operationalizing Machine Learning Models — Book by Noah Gift & Alfredo Deza](https://books.google.com/books/about/Practical_MLOps.html?id=Ul5RzgEACAAJ)
2. [Practical MLOps: Operationalizing Machine Learning Models — SlideShare Summary](https://www.slideshare.net/slideshow/practical-mlops-operationalizing-machine-learning-models-1st-edition-noah-gift/276571576)
3. [Practical MLOps — Valohai eBook (PDF)](https://valohai.com/assets/files/practical-mlops-ebook.pdf)
4. [Operationalizing ML Models: MLOps for Scalable AI — Coursera Course](https://www.coursera.org/learn/operationalizing-ml-models-mlops-for-scalable-ai)
5. [Practical MLOps Book GitHub Repository](https://github.com/paiml/practical-mlops-book)

---

## 🎥 Video / Playlist Resources

1. [Practical MLOps: Operationalizing Machine Learning Models — YouTube Talk](https://www.youtube.com/watch?v=s8rdif8oPI4)
2. [Operationalising Machine Learning (MLOps) — YouTube Playlist](https://www.youtube.com/playlist?list=PLi5Sxi_aar1jVmctAwWND_lT8fqodkuWs)
3. [Operationalizing Machine Learning — A Deeper Dive](https://www.youtube.com/watch?v=1XZskvtraiU)


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

---

## Duration

🗓️ **Challenge Duration:** 1 week (Monday to Friday)

---

### Notes

* Focus on **production-readiness** — every ML system should be automatable and observable.
* Demonstrate awareness of **MLOps principles** (traceability, automation, monitoring).
* Keep it practical — use simple models but demonstrate strong engineering practice.
