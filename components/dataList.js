import React, { useState, useEffect } from 'react';
import {getDataList, deleteData} from '../service/service.js';
import styles from '../commonStyle.js';

const DataListComponent = (props)=>{

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);

      function fetchData(){
        getDataList()
        .then(
          (result) => {
            if(result.status === 200)
              setData(result.data);
          },
          (error) => {
          }
        );
      }
    
      function handleAction(e){
        if(e.target.dataset && e.target.dataset.delteelid){
          deleteData(e.target.dataset.delteelid)
          .then(
            (result) => {
              let type="";
              if(result.status === 200 && result.data.status === "success"){
                type="Success ";
                fetchData();
              }else{
                type="Error ";
              }
              alert(`${type}: ${result.data.message}`);

            },
            (error) => {
            }
          );
        }
      }

  return (<div  style={styles.main}>
    <h2> Available Data List </h2>
    {
        data.length > 0
        ?
     <div className="center">
       <table >
        <thead>
          <tr> 
              <th>Name</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Status</th>
              <th>Note</th>
              <th></th>

          </tr>
          </thead>
          <tbody>
        {data.map(el => (
          <tr key={el.id}  onClick={handleAction}> 
            <td >{el.first_name + " " + el.last_name}</td> 
            <td >{el.gender}</td> 
            <td >{el.nationality}</td> 
            <td >{el.terms ? 'Active': 'In-Active'}</td> 
            <td >{el.notes}</td>
            <td data-delteelid={el.id} className="delete">Delete</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>: <div className = "Show message"> Sorry !! There is no any Data available. </div> 
    }
  </div>);
}

export default DataListComponent;