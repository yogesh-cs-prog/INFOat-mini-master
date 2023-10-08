import React from "react";
import StudentLayout from "../../ourLayouts/student/Layout";
import StudentDashboard from "./StudentProfile";
import EditProfile from "./EditProfile";
const store = require("../../our_rtk/store");
function Profile() {
  return <>{store.getState() ? <StudentDashboard /> : <EditProfile />}</>;
}

export default Profile;
