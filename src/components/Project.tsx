import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img src={project1} className="zoom" alt="thumbnail" width="100%" />
          <h2>Charge Point Managment System</h2>
          <p>
            Designed and implemented a <b>plugin-based frontend architecture</b>{" "}
            for CPMS, enabling flexible and scalable module management.
            Leveraged React, Babel, Webpack, and integrated Webpack Dev
            Middleware and Hot Middleware to streamline development and enhance
            modularity.
          </p>
        </div>
        <div className="project">
          <img src={project2} className="zoom" alt="thumbnail" width="100%" />
          <h2>Parking Guidance System</h2>
          <p>
            Developed a real-time parking occupancy monitoring system with an{" "}
            <b>interactive map</b> and live video wall. Enabled instant updates
            via WebSockets and integrated live CCTV feeds for enhanced
            visibility. Built an analytics module to track peak hours, and
            generate insights.
          </p>
        </div>
        <div className="project">
          <img src={project3} className="zoom" alt="thumbnail" width="100%" />
          <h2>E-membership Dashboard</h2>
          <p>
            Developed a dashboard for operators to manage parking site
            memberships and user contracts. Enabled cardholder management,
            including registration, renewals, and cancellations. Improved
            operational efficiency and user experience for end users parking
            their vehicles.
          </p>
        </div>
        <div className="project">
          <img src={project4} className="zoom" alt="thumbnail" width="100%" />
          <h2>Smart Parking Operations</h2>
          <p>
            Developed a dashboard to monitor parking occupancy and{" "}
            <b>control devices</b> like barriers in real time. Integrated live
            alerts from parking machines for issue detection and response.
            Included a comprehensive user management module with role-based
            access control.
          </p>
        </div>
        <div className="project">
          <img src={project5} className="zoom" alt="thumbnail" width="100%" />
          <h2>Express Ticket Checkout</h2>
          <p>
            Developed a mobile-friendly web app for end users to easily pay
            their parking tickets. Implemented{" "}
            <b>dynamic UI rendering based on backend configurations</b> to
            support multiple client requirements. Integrated various payment
            options, offering a flexible checkout experience.
          </p>
        </div>
        <div className="project">
          <img src={project6} className="zoom" alt="thumbnail" width="100%" />
          <h2>EV Mobile App</h2>
          <p>
            Developed a user-friendly mobile app for customers to find charging
            locations, start sessions, and monitor real-time progress.
            Implemented an in-app e-wallet for account top-ups via multiple
            secure payment options.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
