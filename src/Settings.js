const Settings = () => {
  // Settings section to show it's heading and Settings icon
  return (
    <div style={{ alignItems: "center", display: "flex", margin: "auto" }}>
      <div style={{ width: "100%" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
          alt="settings-icon"
          style={{ width: 100, height: 100 }}
        ></img>
        <p
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
            margin: 0
          }}
        >
          Settings
        </p>
      </div>
    </div>
  );
};
export default Settings;
