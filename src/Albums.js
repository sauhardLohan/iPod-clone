const Albums = () => {
  // Albums Section showing all the albums available (edm,bollywood,english)
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
      <h2 style={{ textAlign: "center", margin: 0 }}>Albums</h2>
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
          EDM
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
          BOLLYWOOD
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
          ENGLISH
        </div>
      </div>
    </div>
  );
};
export default Albums;
