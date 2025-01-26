module.exports = {
  editorTheme: {
    projects: {
      enabled: true,
    },
  },
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "yaferreira",
        // docker exec -it nodered-ew node-red-admin hash-pw
        // yaferreira
        password:
          "$2y$08$B1sn31oARuvy2zuVsRXh8OdJOk2mJkyIei0Tm7KTlqzoAuseJqPqu",
        permissions: "*",
      },
    ],
  },
  userDir: "/data",
};
