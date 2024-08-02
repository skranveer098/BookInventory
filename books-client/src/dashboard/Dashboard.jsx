import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import SideBar from "./Sidebar"; // Import the Sidebar component

 const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // Close sidebar when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       !document.getElementById("sidebar")?.contains(event.target) &&
  //       !document.getElementById("menuButton")?.contains(event.target)
  //     ) {
  //       setIsSidebarOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "16px",
    backgroundColor: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    color: "black",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "24px",
    zIndex: "3",
    position: "relative",
  };

  const hamburgerButtonStyle = {
    display: "block",
    position: "absolute",
    top: "16px",
    left: "16px",
    cursor: "pointer",
    color: "black",
    zIndex: 1100, // Make sure it's on top of other elements
  };

  const sidebarStyle = {
    // backgroundColor: "#ffffff",
    // borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // padding: "16px",
    // position: "fixed",
    // top: "0",
    // left: "0",
    // height: "100%",
    // width: "250px",
    // transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
    // transition: "transform 0.3s ease",
    // zIndex: 1000, // Ensure it's below the hamburger button
    // overflowY: "auto",
    // display: "block", // Always block for small screens
    // "@media (min-width: 768px)": {
    //   // For larger screens
    //   display: "none",
    // },
  };

  const mainContentStyle = {
    // marginLeft: isSidebarOpen ? "250px" : "0",
    transition: "margin-left 0.3s ease",
    padding: "16px",
    flex: "1",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    flex: "1",
    minWidth: "250px",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem", // 24px
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#333333",
  };

  const cardContentStyle = {
    fontSize: "1rem", // 16px
    color: "#666666",
    marginBottom: "16px",
  };

  const chartContainerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const chartTitleStyle = {
    fontSize: "1.25rem", // 20px
    fontWeight: "bold",
    color: "#333333",
  };

  const responsiveGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
  };

  const notificationStyle = {
    backgroundColor: "#fffbf0",
    color: "#d75f5f",
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid #fddbb0",
    marginBottom: "16px",
  };

  return (
    <div style={containerStyle}>
      <div id="sidebar" style={sidebarStyle}>
        {/* <SideBar /> */}
      </div>
      <header style={headerStyle}>
        <div
          id="menuButton"
          // style={hamburgerButtonStyle}
          // onClick={toggleSidebar}
        >
          {/* {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
        </div>
        <h1>Dashboard</h1>
        <p>
          Welcome to your dashboard. Monitor key metrics, view reports, and
          manage your activities here.
        </p>
      </header>
      <main style={mainContentStyle}>
        <div style={responsiveGridStyle}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Activity Overview</h2>
            <p style={cardContentStyle}>
              Get a quick overview of your recent activities, performance
              metrics, and key insights.
            </p>
            <div style={chartContainerStyle}>
              <h3 style={chartTitleStyle}>Activity Chart</h3>
              {/* Placeholder for an actual chart */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#e2e8f0",
                }}
              >
                <p style={{ textAlign: "center", color: "#9b9b9b" }}>
                  Chart Placeholder
                </p>
              </div>
            </div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>User Statistics</h2>
            <p style={cardContentStyle}>
              View detailed statistics about user engagement, growth trends, and
              more.
            </p>
            <div style={chartContainerStyle}>
              <h3 style={chartTitleStyle}>User Growth Chart</h3>
              {/* Placeholder for an actual chart */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#e2e8f0",
                }}
              >
                <p style={{ textAlign: "center", color: "#9b9b9b" }}>
                  Chart Placeholder
                </p>
              </div>
            </div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Notifications</h2>
            <div style={notificationStyle}>
              <p>
                New feature updates are available! Check out the latest
                improvements.
              </p>
            </div>
            <div style={notificationStyle}>
              <p>
                Scheduled maintenance will occur on August 15th. Please plan
                accordingly.
              </p>
            </div>
          </div>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Settings</h2>
            <p style={cardContentStyle}>
              Manage your account settings, preferences, and other
              configurations to optimize your experience.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
