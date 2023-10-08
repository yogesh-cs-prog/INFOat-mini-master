export const MENUITEMS = [
  {
    menutitle: "Welcome",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "Profile",
        icon: "project",
        type: "sub",

        active: false,
        children: [
          { path: `/student/profile`, type: "link", title: "Profile" },
          { path: `/student/editprofile`, type: "link", title: "Edit Profile" },
        ],
      },
      {
        path: `/student/attendence`,
        icon: "board",
        title: "Attendence",
        type: "link",
      },
      {
        path: `/student/task`,
        icon: "board",
        title: "Task",
        type: "link",
      },
      {
        path: `/student/events`,
        icon: "board",
        title: "Event",
        type: "link",
      },
      {
        path: `/student/achievements`,
        icon: "board",
        title: "Achievements",
        type: "link",
      },
      {
        path: `/student/raisetickets`,
        icon: "board",
        title: "Raise your tickets",
        type: "link",
      },
    ],
  },
];
