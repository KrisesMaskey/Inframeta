import React from 'react'
import styles from './Apptable.module.css'


function Apptable() {
  const tableName1 = 'TC01';
  const tableName2 = 'TC02';
  return (
    <div className={styles.tableContainer}>
    <h2>{tableName1}</h2>
      <table> 
      <thead>
          <tr>
            <th> Application Name</th>
            <th>Application Status</th>
            <th>Timestamp</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SAM8_UK(BCI)</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_MEXICO</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_US_LB</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_US_PRIMARY1</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_US_PRIMARY2</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_US_SECONDARY1</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_US_SECONDARY2</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM8_CORE_UK</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM3.5STOCKBROKERS_PRIMARY</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>SAM3.5STOCKBROKERS_SECONDARY</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>FORTENT_UK1</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>FORTENT_UK2</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>OWS_GENEVA_LB</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>PEP_REGISTER</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>BCUS_FS_CRANFORD</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>BCUS_SCM_PISCATAWAY</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>BCUS_SCM_CRANFORD</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_FS1_GLOUCESTER</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_FS1_SLOUGH</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_FS2_GLOUCESTER</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_FS2_SLOUGH</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_CASE_MANAGEMENT_GLOUCSTER</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_CASE_MANAGEMENT_SLOUGH</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_CASE_MANAGEMENT_LB</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
          <tr>
            <td>GCWS_PRE_PROD</td>
            <td>up</td>
            <td>Timestamp</td>
            <td>URL</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tableContainer}>
        <h2>{tableName2}</h2>
          <table>
            <thead>
              <tr>
                <th>Application Name</th>
                <th>Application Status</th>
                <th>Timestamp</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GCWS_CASE_MANAGEMENT_LB</td>
                <td>up</td>
                <td>Timestamp</td>
                <td>URL</td>
              </tr>
            </tbody>
            </table>
            </div>
    </div>




  );
}



export default Apptable