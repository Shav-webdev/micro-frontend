import React, { useEffect, useState } from "react";
import e from "../event-bus";
import LineChart from "./src/components/Charts/LineChart.js";
import PieChart from "./src/components/Charts/PieChart.js";
import {
  initialOptions,
  pieChartInitialOptions,
} from "./src/helpers/constants";

const Root = () => {
  const [chartOptions, setChartOption] = useState(null);
  const [pieChartOptions, setPieChartOption] = useState(null);
  const [message, setMessage] = useState(
    "When Angular receives message, we should see a confirmation here 😎",
  );

  const messageHandler = (message) => {
    setMessage(message.text);
  };

  const dataHandler = (data) => {
    console.log("dataHandler data", data);
    setChartOption(data);
  };

  const pieDataHandler = (data) => {
    console.log("dataHandler data", data);
    setPieChartOption(data);
  };

  const sendMessage = () => {
    e.emit("message", { text: "Hello from React 👋" });
  };

  useEffect(() => {
    e.on("received", messageHandler);
    return () => {
      e.off("received", messageHandler);
    };
  }, [e]);

  useEffect(() => {
    console.log("useEffect", e);
    e.on("data", dataHandler);
    return () => {
      e.off("data", dataHandler);
    };
  }, [e]);

  useEffect(() => {
    console.log("useEffect", e);
    e.on("pieData", pieDataHandler);
    return () => {
      e.off("pieData", pieDataHandler);
    };
  }, [e]);

  return (
    <div style={{ marginTop: "10px" }}>
      <h1>This was written in React</h1>

      <p>
        <button onClick={sendMessage}>Send a message to Angular</button>
      </p>

      <p>{message}</p>
      <div style={{ display: "flex", width: "100%" }}>
        <LineChart chartOptions={chartOptions} />
        <PieChart pieChartOptions={pieChartOptions} />
      </div>
    </div>
  );
};

export default Root;
