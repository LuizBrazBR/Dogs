import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
} from "victory";
import styles from "./VictoryLib.module.css";

const VictoryLib = ({ data }) => {
  console.log("render");
  return (
    <section className={styles.display}>
      <div className={styles.bgVictory}>
        <VictoryPie data={data} theme={VictoryTheme.clean} innerRadius={50} />
      </div>
      <div className={styles.bgVictory}>
        <VictoryChart theme={VictoryTheme.clean} domainPadding={{ x: 20 }}>
          <VictoryBar data={data} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default VictoryLib;
