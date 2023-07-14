import React from 'react'
import styles from './Apptable.module.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LinkIcon from '@mui/icons-material/Link';

function randTime(){
  let formattedTimestamp = ("0" + Math.floor(Math.random() * 24)).slice(-2) + ":" + 
                            ("0" + Math.floor(Math.random() * 60)).slice(-2) + ":" + 
                            ("0" + Math.floor(Math.random() * 60)).slice(-2);
  return formattedTimestamp;
};

function Apptable() {
  const tableName1 = 'TC01';
  return (
    <div className={styles.tableContainer}>
      <div className={styles.title}>
        <h2>{tableName1}</h2>
      </div>
      
      <div>
        <table className={styles.center}> 
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
              <td>SAM8_UK(BCI)</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_MEXICO</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_US_LB</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_US_PRIMARY1</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_US_PRIMARY2</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_US_SECONDARY1</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_US_SECONDARY2</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM8_CORE_UK</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM3.5STOCKBROKERS_PRIMARY</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>SAM3.5STOCKBROKERS_SECONDARY</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>FORTENT_UK1</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>FORTENT_UK2</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>OWS_GENEVA_LB</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>PEP_REGISTER</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>BCUS_FS_CRANFORD</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>BCUS_SCM_PISCATAWAY</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>BCUS_SCM_CRANFORD</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_FS1_GLOUCESTER</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_FS1_SLOUGH</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_FS2_GLOUCESTER</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_FS2_SLOUGH</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_CASE_MANAGEMENT_GLOUCSTER</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_CASE_MANAGEMENT_SLOUGH</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_CASE_MANAGEMENT_LB</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
            <tr>
              <td>GCWS_PRE_PROD</td>
              <td><TaskAltIcon style={{color: 'green'}}/></td>
              <td>{randTime()}</td>
              <td><LinkIcon style={{color: 'blue'}}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default Apptable