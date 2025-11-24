# AI/ML Engineering Week 10 Challenge

## Challenge Title

**Code Reviews & Distributed Collaboration for ML Engineering Teams**

## Scenario / Description

You’ve joined **ModelSync AI**, a fully remote AI/ML organization where engineers collaborate across multiple time zones. Recently, the team has faced issues with inconsistent code quality, unreviewed notebooks, model drift going unnoticed, and poor collaboration habits that make debugging and iteration slow.

This week, your goal is to work as part of a globally distributed ML engineering team. You will build a small ML workflow, enforce structured collaboration practices, create meaningful pull requests, simulate code reviews, and document your remote-first engineering process.

Your work should reflect real-world ML engineering standards—reproducibility, automation, reviewability, and high collaboration discipline.

---

## Challenge Overview

You are required to:

* Build a small ML pipeline (e.g., preprocessing + training + inference script).
* Use a clean Git branching strategy (Gitflow, trunk-based, or Github Flow).
* Create clear, meaningful Pull Requests with templates.
* Simulate distributed collaboration through issues, PRs, and review comments.
* Add automated linting/testing checks using GitHub Actions.
* Document collaboration and ML workflow best practices.

---

## Instructions

1. Create **one private GitHub repository**:

   * `modelsync-ml` → contains all ML workflow code.
2. ML Workflow Requirements:

   * Use **Python (3.10+)**.
   * Build a simple ML pipeline using **scikit-learn** or **TensorFlow/PyTorch**.
   * Include:

     * `data_preprocessing.py`
     * `train.py`
     * `evaluate.py`
     * `predict.py`
   * Use a small open dataset (Iris, Titanic, or a CSV you create).
   * Ensure training is reproducible (random seeds, config file, etc.).
3. Collaboration Requirements:

   * Create a **GitHub Project board** (Kanban).
   * Create at least **5 issues**:

     * Clear acceptance criteria.
     * Labels (e.g., enhancement, bug, documentation).
   * Use a consistent **branching strategy**.
   * Create **PR templates**.
   * Open at least **3 Pull Requests** demonstrating:

     * Before/after code diffs
     * Linked issues
     * Screenshots, metrics, or plots
     * Checklists
   * Perform **2 mock code reviews**.
4. Automation Requirements:

   * Add GitHub Actions workflows for:

     * Linting (flake8/black/isort)
     * Running tests (pytest)
   * Action must run on every pull request.
5. Testing Requirements:

   * Add at least **3 unit tests** covering:

     * Preprocessing functions
     * Training logic or metrics
     * Prediction function

---

## Expected Deliverables

* **ML Repository (`modelsync-ml`)** containing:

  * Complete ML pipeline scripts
  * PR templates
  * GitHub Project board
  * Issues Linked to PRs
  * At least 3 PRs with code reviews
  * Automated GitHub Actions workflow
  * README documenting:

    * Collaboration workflow
    * Code review conventions
    * ML pipeline structure & reproducibility
* **Postman API documentation** (if you expose predictions via a FastAPI/Flask endpoint — optional but earns bonus points)

---

## Learning Resources

## 📄 PDF / Article Resources

1. [Collaborative, Open, and Automated Data Science (PDF)](https://dai.lids.mit.edu/wp-content/uploads/2021/09/Smith-2021-Collaborative-Open-and-Automated-Data-Science.pdf)
2. [Collaboration Challenges in Building ML-Enabled Systems: Communication, Documentation, Engineering, and Process (PDF)](https://www.cs.cmu.edu/~ckaestne/pdf/icse22_seai.pdf)
3. [Towards Effective Collaboration between Software Engineers and Data Scientists Developing Machine Learning-Enabled Systems (PDF)](https://arxiv.org/abs/2407.15821)
4. [How to Build an Effective Data Science Team That Delivers Business Value (PDF)](https://f.hubspotusercontent40.net/hubfs/6347197/Whitepaper_How%20To%20Build%20an%20Effective%20Data%20Science%20Team%20That%20Delivers%20Business%20Value.pdf)

--- 

## 🎥 Video / Tutorial Resources

1. [How do Data Science Workers Collaborate? Roles, Workflows, and Tools (YouTube)](https://www.youtube.com/watch?v=j6gbbWfkO-o)  
2. [How Can MLOps Help Teams Work Together On ML Models? (YouTube)](https://www.youtube.com/watch?v=4nt-8AMKej4)  
3. [Data Science Meets Engineering: A Customer-Centric Collaboration (YouTube)](https://www.youtube.com/watch?v=KSxfV6aivQc)  
4. [Stream of Teams, Episode 2 | Team Topologies for AI/ML (YouTube)](https://www.youtube.com/watch?v=B0IBSUfvdjs)  


---

## Submission Guidelines

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

* This challenge mirrors how real distributed ML teams work.
* Treat your repository as an artifact shared across multiple time zones.
* Think about reproducibility, clarity, and reviewability—not just correctness.
* Good collaboration is as valuable as good modeling.
