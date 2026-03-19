import React from "react";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory";
import styles from "./VictoryLib.module.css";

const VictoryLib = ({ data }) => {
  console.log("render");
  return (
    <div className={styles.display}>
      <div className={styles.bgVictory}>
        <VictoryChart theme={VictoryTheme.clean} domainPadding={{ x: 20 }}>
          <VictoryBar data={data} />
        </VictoryChart>
      </div>
      <div className={styles.bgVictory}>
        <VictoryChart theme={VictoryTheme.clean} domainPadding={{ x: 20 }}>
          <VictoryBar data={data} />
        </VictoryChart>
      </div>
    </div>
  );
};

export default VictoryLib;
