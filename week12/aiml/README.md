# AI/ML Engineering Week 12 Challenge

## Title

**Predictive Delivery & Prioritization Service for Notifications (ML System Design + Defense)**

## Description

You're working with **WaveCom's ML team**. As WaveCom moves into enterprise customers, the reliability of notification delivery (email, SMS, push) becomes business-critical. Instead of blind retries, the company wants an **ML-driven service** that predicts the probability of successful delivery for each notification and prioritizes retry/backoff strategies accordingly.

You have been **tasked to design, build, and defend** an ML-enabled subsystem that:

* Predicts delivery success for notification attempts
* Suggests priority and retry strategies per message
* Integrates with the existing Notification Delivery System (from the Software Engineering challenge)

This challenge focuses on ML system design, data pipelines, model training, model serving, monitoring, and an explicit defense of your design choices.

## Instructions

1. **Tech stack requirements**

   * **Backend & ML**: Python (use FastAPI or Flask) for API + model serving
   * **Modeling & Data**: Python (pandas, scikit-learn, or PyTorch/TensorFlow if you prefer)
   * **Frontend**: React-Vite or Next.js for a small UI/dashboard to show model predictions and priority decisions
   * **Database**: MongoDB (or a simple CSV/Parquet for training data) for logs & features
   * **Message broker**: RabbitMQ (mock integration acceptable)
2. **Data**

   * Use a synthetic dataset simulating notification events (fields: provider, recipient_country, send_time, template_type, payload_size, previous_attempts, last_status, response_code, latency_ms, etc.)
   * Provide the dataset in `/data` as CSV or Parquet and include the code used to generate the synthetic data
3. **Modeling task**

   * Train a classifier that predicts the probability of successful delivery on the next attempt
   * Provide a simple feature engineering pipeline and baseline model (e.g., logistic regression or random forest). Bonus for a stronger model and proper validation
4. **API endpoints**

   * `POST /predict` — accept a notification job payload, return success probability and recommended priority/retry strategy
   * `GET /metrics` — current model performance metrics (precision/recall/AUC), model version
   * `POST /train` — (optional) trigger to retrain model on stored logs
5. **Frontend**

   * Minimal dashboard to:

     * Upload a sample notification payload and view prediction + recommended action
     * Display recent predictions and model metrics
6. **Monitoring & Observability**

   * Implement simple logging of predictions and outcomes
   * Provide a monitoring plan in the README: how you'd detect model drift, alerting thresholds, and rollback strategy
7. **Design Defense**

   * Add a **Design Defense** section in your README answering:

     * Why this ML approach?
     * How does the model help scale to 50,000 notifications/min (practical integration & performance considerations)?
     * Failure modes and mitigation (including fairness, bias, and data issues)
     * How will you monitor, evaluate, and update the model in production?

## Expected Deliverables

1. **`/backend`**: Python service implementing APIs and model serving
2. **`/models`**: Training scripts, notebooks, saved model artifacts, and synthetic data generator
3. **`/frontend`**: React-Vite or Next.js dashboard
4. **`/docs/README.md`**: System design doc with architecture diagram, model details, data schema, API docs, and Design Defense section
5. **`/data`**: Synthetic dataset (CSV) and generation script
6. **Optional**: Dockerfile(s) for backend and simple instructions to run locally

## Learning Resources

### PDF

* *Designing Machine Learning Systems* — Chip Huyen (O'Reilly). PDF excerpt / copy for reference: [https://18636251.s21i.faiusr.com/61/ABUIABA9GAAghIK0ugYowM2h3QY.pdf](https://18636251.s21i.faiusr.com/61/ABUIABA9GAAghIK0ugYowM2h3QY.pdf). 
* *Building Machine Learning Powered Applications* — Emmanuel Ameisen (sample chapter PDF): [https://www.mlpowered.com/pdf/BMLPA_Chapter_1.pdf](https://www.mlpowered.com/pdf/BMLPA_Chapter_1.pdf)

### Video

* *What Is Machine Learning System Design?* — YouTube (intro video on ML system design).
* *Machine Learning Engineering for Production (MLOps) — YouTube* (practical production considerations).

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
