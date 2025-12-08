# Software Engineering Week 12 Challenge

## Title

**Designing and Defending a Scalable Notification Delivery System**

## Description

You're working with **WaveCom**, a growing communications startup that delivers critical transactional notifications (email, SMS, and push). The company is preparing to onboard its first set of enterprise clients—banks, fintechs, and logistics companies—which means the system must scale, remain fault-tolerant, and handle spikes of up to 50,000 notifications per minute.

You have been **tasked with designing the architecture** of this Notification Delivery System **and defending your design** in a system design readme.

The challenge simulates a real-world system design + defense session like those used by Big Tech engineering teams.

## Instructions

1. **Design a scalable Notification Delivery System** using:

   * **Node.js (Express)** for backend
   * **React-Vite or Next.js** for a small frontend dashboard
   * **MongoDB** for storage
   * **RabbitMQ** for message queueing
2. Your system should handle:

   * Creating notification jobs
   * Queueing messages
   * Dispatching notifications via mock providers
   * Retry logic and failure handling
3. Implement **API endpoints** for:

   * Creating notification requests
   * Checking status of a notification
   * Retrieving list of all jobs
4. Build a **minimal frontend** that:

   * Sends notification jobs
   * Displays job status changes in real-time or via polling
5. Create a **system design document (README.md)** explaining:

   * Architecture diagram
   * Components and responsibilities
   * Scaling strategy
   * Fault tolerance strategy
   * Queueing model & retry flow
   * API design
   * Database schema
6. **Defense Section:** Add a section titled **"Design Defense"**, where you answer:

   * Why this architecture?
   * How will it handle 50,000 notifications/min?
   * How does your system degrade gracefully under load?
   * What are potential bottlenecks and mitigations?

## Expected Deliverables

1. **Backend (Node.js-Express) service**
2. **Frontend UI** (React-Vite or Next.js)
3. **RabbitMQ integration**
4. **MongoDB collections** for jobs + logs
5. **Architecture diagram** (image or draw.io link)
6. **README.md** containing:

   * Problem overview
   * Architecture explanation
   * Diagram
   * Scaling strategy
   * Fault tolerance
   * API documentation
   * Queueing + retry flow
   * Design Defense section
7. **Postman collection (optional)**

## Learning Resources

### PDF

* "Designing Distributed Systems" by Brendan Burns (Free excerpt PDF): [https://github.com/cloudfoundry/uaa/raw/develop/docs/designing-distributed-systems.pdf](https://github.com/cloudfoundry/uaa/raw/develop/docs/designing-distributed-systems.pdf)

### Video

* "System Design Basics for Beginners (Queues, Load Balancing, Scaling)" – Gaurav Sen: [https://www.youtube.com/watch?v=UzLMhqg3_Wc](https://www.youtube.com/watch?v=UzLMhqg3_Wc)

---

## **Submission Guidelines**

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

---