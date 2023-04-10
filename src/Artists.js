const Artists = () => {
  // Artists Section showing all the Artists available
  //  (Kygo,Conrad Sewell,
  //   Arijit Singh,Pritam,
  //   Sia)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingInline: 15,
        paddingTop: 30,
        paddingBottom: 20,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h2 style={{ textAlign: "center", margin: 0 }}>Artists</h2>
      <div style={{ height: "100%", padding: 10 }}>
        <div
          style={{
            backgroundColor: "#0098ff",
            height: "30%",
            textAlign: "center",
            padding: 3,
            boxSizing: "border-box",
            margin: 2,
            color: "white"
          }}
        >
          Kygo,Conrad Sewell
        </div>
        <div
          style={{
            backgroundColor: "red",
            height: "30%",
            textAlign: "center",
            padding: 3,
            boxSizing: "border-box",
            margin: 2,
            color: "white"
          }}
        >
          Arijit Singh,Pritam
        </div>
        <div
          style={{
            backgroundColor: "#468522",
            height: "30%",
            textAlign: "center",
            padding: 3,
            boxSizing: "border-box",
            margin: 2,
            color: "white"
          }}
        >
          Sia
        </div>
      </div>
    </div>
  );
};
export default Artists;
