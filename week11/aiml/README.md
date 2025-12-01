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

## 📄 PDF / Article

1. [4 Key Design Tradeoffs of Machine Learning Systems (Medium)](https://medium.com/@meta_heuristic/4-key-design-tradeoffs-of-machine-learning-systems-73757890a629)
2. [Scalability and Maintainability Challenges in Machine Learning: Systematic Literature Review (arXiv)](https://arxiv.org/abs/2504.11079)
3. [On Misbehaviour and Fault Tolerance in Machine Learning Systems (arXiv)](https://arxiv.org/abs/2109.07989)
4. [Machine Learning Systems Design — Public Lecture Notes / Intro PDF](https://sharifmlsd.github.io/assets/MLSD_2023_chap_01_lec_01.pdf)
5. [Resource Usage and Performance Trade‑offs for Machine Learning Models (Sensors Journal)](https://www.mdpi.com/1424-8220/20/4/1176)
6. [Designing Machine Learning Systems — GitHub companion repo by Chip Huyen](https://github.com/chiphuyen/dmls-book)

---

## 🎥 Video / Tutorial

1. [Meta ML System Design: The Complete Guide](https://www.systemdesignhandbook.com/guides/meta-ml-system-design-interview/)
2. [ML System Design & Scalability Considerations – Sanfoundry](https://www.sanfoundry.com/ml-system-design-scalability-considerations/)
3. [Machine Learning Systems Design — Course on MadeWithML / Anyscale](https://madewithml.com/courses/mlops/systems-design/)


---

## **Submission Guidelines**

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
