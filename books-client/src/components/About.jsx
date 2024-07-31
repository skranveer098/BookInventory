import React from "react";

function About() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "16px",
    backgroundColor: "#e2e8f0", // Light gray-blue background
  };

  const boxStyle = {
    marginTop: "60px",
    maxWidth: "1200px",
    width: "100%",
    backgroundColor: "#ffffff", // White background
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    overflow: "hidden",
    padding: "24px",
  };

  const headingStyle = {
    fontSize: "2.5rem", // 40px
    fontWeight: "bold",
    color: "#2b6cb0", // Blue color for headings
    marginBottom: "16px",
    textAlign: "center",
  };

  const paragraphStyle = {
    color: "#4a5568",
    fontSize: "1rem", // 16px
    marginBottom: "16px",
    lineHeight: "1.6",
    textAlign: "justify",
  };

  const sectionHeadingStyle = {
    fontSize: "1.75rem", // 28px
    fontWeight: "semi-bold",
    color: "#38a169", // Green color for section headings
    marginTop: "24px",
    marginBottom: "8px",
    textAlign: "center",
  };

  const accentStyle = {
    color: "#f56565", // Red accent color
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to our about page! Here you will find information about our
          mission, vision, and the team behind this project. We are dedicated to
          providing you with the best service and experience possible. Our goal
          is to ensure that you have a positive and valuable interaction with
          our platform.
        </p>
        <p style={paragraphStyle}>
          Our team consists of experienced professionals who are passionate
          about what we do. We strive for excellence and are always looking for
          ways to improve and innovate. Thank you for visiting our website and
          learning more about us. If you have any questions or feedback, please
          feel free to reach out to us.
        </p>
        <h2 style={sectionHeadingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          Our mission is to provide top-quality solutions that meet the needs of
          our users and exceed their expectations. We aim to make a significant
          impact through our innovative services and dedicated support.
        </p>
        <h2 style={sectionHeadingStyle}>Our Vision</h2>
        <p style={paragraphStyle}>
          Our vision is to become a leading platform in our industry, known for
          our commitment to excellence, customer satisfaction, and continuous
          improvement. We strive to build long-lasting relationships with our
          users and make a positive difference in their lives.
        </p>
        <h2 style={sectionHeadingStyle}>Meet the Team</h2>
        <p style={paragraphStyle}>
          Our team is made up of diverse and talented individuals who bring
          unique skills and perspectives to the table. We work collaboratively
          to achieve our goals and are passionate about making a difference
          through our work.
        </p>
        <p style={{ ...paragraphStyle, ...accentStyle }}>
          <em>Join us on our journey and be part of something great!</em>
        </p>
      </div>
    </div>
  );
}

export default About;
