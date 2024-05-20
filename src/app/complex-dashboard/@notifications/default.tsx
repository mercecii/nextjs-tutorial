import Link from "next/link";
import React from "react";

const DefaultNotifications = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        border: "0.5px dotted white",
        margin: "10px",
        padding: "10px",
      }}
    >
      Notifications
      <Link href={"/complex-dashboard/archived"}>
        {" "}
        Go to Archived Notifications
      </Link>
    </div>
  );
};

export default DefaultNotifications;
