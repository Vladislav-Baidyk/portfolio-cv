import { Fragment } from "react/jsx-runtime";
import styles from "./main.module.css";
import { useState } from "react";

interface Data {
  namePop: string[];
  numberPop: number[];
  linePop: number[];
  nameLan: string[];
  numberLan: number[];
  lineLan: number[];
}

function Main({
  namePop,
  numberPop,
  linePop,
  nameLan,
  numberLan,
  lineLan,
}: Data) {
  const [activeTab, setActiveTab] = useState("population");
  const maxNumberLan = Math.max(...numberLan);
  const maxNumberPop = Math.max(...numberLan);
  return (
    <Fragment>
      <div className={styles.containerButtons}>
        <button
          className={styles.box}
          onClick={() => setActiveTab("population")}
        >
          Population
        </button>
        <button className={styles.box} onClick={() => setActiveTab("language")}>
          Languages
        </button>
      </div>
      {activeTab === "population" && (
        <p>10 Most populated countries in the world</p>
      )}

      {activeTab === "language" && (
        <p>10 Most populated languages in the world</p>
      )}

      {activeTab === "population" && (
        <div>
          {numberPop.map((number, index) => {
            let name = namePop[index];
            let widthPercentage = number / maxNumberPop / 1000000;
            return (
              <div key={index}>
                <div className={styles.item}>
                  <span>{name}</span>
                  <div
                    style={{
                      width: `${widthPercentage}%`,
                      height: "20px",
                      backgroundColor: "orange",
                    }}
                  ></div>
                  <span>{number}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab == "language" && (
        <div className={styles.item}>
          {numberLan.map((number, index) => {
            let name = nameLan[index];
            let widthPercentage = (number / maxNumberLan) * 100;

            return (
              <div key={index}>
                <span>{name}</span>
                <div
                  style={{
                    width: `${widthPercentage}%`,
                    height: "20px",
                    backgroundColor: "orange",
                  }}
                ></div>
                <span>{number}</span>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
}

export default Main;
