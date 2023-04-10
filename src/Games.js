const Games = (props) => {
  // Games section to show it's heading and games icon
  return (
    <div style={{ alignItems: "center", display: "flex", margin: "auto" }}>
      <div style={{ width: "100%" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9302/9302137.png"
          alt="games-icon"
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
          Games
        </p>
      </div>
    </div>
  );
};
export default Games;
