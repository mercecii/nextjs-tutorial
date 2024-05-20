import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <div>
      Archived Notifications{" "}
      <Link href={"/complex-dashboard/"}>Go to Default Notifications</Link>
    </div>
  );
};

export default ArchivedNotifications;
