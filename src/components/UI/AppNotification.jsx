import { useEffect } from "react";

function AppNotification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const notificationStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: type === "success" ? "green" : "red",
    color: "white",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  return <div style={notificationStyle}>{message}</div>;
}

export default AppNotification;
