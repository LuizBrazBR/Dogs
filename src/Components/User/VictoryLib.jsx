import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryPie,
  VictoryTheme,
} from 'victory';
import styles from './VictoryLib.module.css';

const VictoryLib = ({ data }) => {
  return (
    <section className={styles.display}>
      <div className={`${styles.bgVictory} ${styles.bgVictoryTotal}`}>
        <p>Acessos: {data.reduce((t, i) => t + i.y, 0)}</p>
      </div>
      <div className={styles.bgVictory}>
        <VictoryPie
          data={data}
          theme={VictoryTheme.clean}
          innerRadius={50}
          containerComponent={<VictoryContainer responsive={true} />}
          style={{
            labels: { fontSize: 14, fill: 'black' },
          }}
        />
      </div>
      <div className={styles.bgVictory}>
        <VictoryChart
          theme={VictoryTheme.clean}
          domainPadding={{ x: 20 }}
          containerComponent={<VictoryContainer responsive={true} />}
        >
          <VictoryBar data={data} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default VictoryLib;
