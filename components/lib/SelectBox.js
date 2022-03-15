import * as React from "react";
import styles from "../../commonStyle";

const countryList = ["US", "UK", "India", "China", "Malaysia", "Singapore", "Japan", "Thailand","Srilanka"];

const SelectBox = ({ handler }) => (
  <div>
    <label  className="label">Nationality:</label>
    <select style={styles.input} {...handler()}>
      <option value="" disabled>
        Select
      </option>
      {
        countryList.map(val => <option value={val}>{val}</option>
      )}
    </select>
  </div>
);
export default SelectBox;
