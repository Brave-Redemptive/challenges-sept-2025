# **AI/ML Engineering Weekly Challenge**

## **Topic:** Technical Trade-Off Decisions

## **Title:**

**Evaluating Technical Trade-Offs in Modern Machine Learning Systems**

---

## **Description / Scenario**

You have joined **ModelSphere AI**, a distributed AI/ML engineering organization that builds data pipelines, model training workflows, and real‑time inference services for enterprise clients. The company is planning a major upgrade of its ML infrastructure to improve performance, scalability, and operational reliability.

As an ML Engineer, your task is to evaluate and implement **three major technical trade-offs** that influence model training, serving, and data processing. You must justify each decision through structured analysis, build a minimal ML workflow demonstrating those decisions, and communicate your rationale through documentation.

This challenge simulates real-world ML engineering conditions where trade-offs must be reasoned carefully across compute cost, model performance, latency, maintainability, and operational complexity.

---

## **Instructions**

1. Choose **any 3 technical trade-off categories** from the list below:

   * **Batch Inference vs Real‑Time Inference**
   * **CPU vs GPU Training/Inference**
   * **On-Prem vs Cloud Deployment**
   * **Model Versioning Strategy: DVC vs Git‑LFS**
   * **Data Storage: Parquet vs CSV**
   * **API Type: REST vs gRPC for ML Serving**
   * **Model Serving Stack: FastAPI vs Flask**

2. For each selected decision:

   * Identify **3–5 trade-offs** (pros, cons, constraints).
   * Choose **one option** and justify your decision.

3. Build a small ML workflow reflecting your chosen trade-offs:

   * **Python (3.10+)**
   * Use scikit-learn, TensorFlow, or PyTorch
   * Include the following scripts:

     * `data_preprocessing.py`
     * `train.py`
     * `evaluate.py`
     * `predict.py`

4. Additional requirements:

   * Add **unit tests** (minimum 3)
   * Add a **config file** to ensure reproducibility
   * Use **GitHub Actions** for linting/testing automation

5. Optional (earns bonus):

   * Build a simple **FastAPI/Flask inference endpoint**
   * Provide **Postman API documentation**

6. Create a **Technical Trade-Off Report** (PDF or Google Doc) containing:

   * The problem statement
   * All decision options
   * Trade-off analysis table
   * Final decisions and justification
   * Architecture diagram

7. Log your submission in the provided spreadsheet.

---

## **Expected Deliverables**

### **1. ML Repository: `modelsphere-ml`**

* Complete ML pipeline (preprocessing → training → evaluation → prediction)
* Reproducible configuration
* Unit tests
* GitHub Actions workflow
* README explaining decisions + usage instructions

### **2. Technical Trade-Off Report**

* PDF or Google Doc
* Contains diagrams, analysis tables, and reasoning

### **3. (Optional) Inference API Repository**

* FastAPI or Flask service
* Includes Postman documentation
* README with setup instructions

### **4. (Optional) Demo Video**

2–4 minutes explanation of your architecture and decisions

---

## **Resources**

### **PDF Resource:**

**Designing Machine Learning Systems – Trade-Offs in ML Engineering (Excerpt)**
[https://ai.google/static/documents/machine-learning-design.pdf](https://ai.google/static/documents/machine-learning-design.pdf)

### **Video Resource:**

**Real-World ML System Design – Trade-offs Explained (YouTube)**
[https://www.youtube.com/watch?v=06-AZXmwHjo](https://www.youtube.com/watch?v=06-AZXmwHjo)

---

## **Submission Guidelines**

1. Repository must be **private**.
2. Invite **@braveredemptive** to the repository.
3. If you create an inference API, it must be in a **separate private repo**.
4. Include Postman documentation (if applicable).
5. Log your submission here:
   👉 [https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk](https://docs.google.com/spreadsheets/d/131My2Yo2ekHu9KR9v0-NOfFENDiNm8rT0UEXBhUrkbc/edit?usp=drivesdk)
6. **Deadline:** Friday, 11:59 PM
7. **Late submissions will not be reviewed.**

---
