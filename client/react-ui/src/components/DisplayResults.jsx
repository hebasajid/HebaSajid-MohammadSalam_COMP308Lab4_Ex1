import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import NewDataEntryForm from './NewDataEntryForm';


//Displays results with Epoch and learning rate \\

function DisplayResults() {
  const [newdata, setnewdata] = useState({});
  const [showLoading, setShowLoading] = useState(true);

  const [predictionResults, setPredictionResults] = useState(null);

  const apiUrl = "api/run";

  useEffect(() => {
    const fetchnewdata = async () => {
      try {
        const result = await axios.get(apiUrl);
        console.log('result.newdata:', result.newdata);
        setnewdata(result.newdata);
        setShowLoading(false);
      } catch (error) {
        console.log('error in fetchnewdata:', error);
      }
    };

    fetchnewdata();
  }, []);

  // const handleSubmit = async (formnewdata) => {
  //   try {
  //     setShowLoading(true);
  //     const result = await axios.post('/api/run', { params: formnewdata });
  //     setnewdata(result.newdata);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   } finally {
  //     setShowLoading(false);
  //   }
  // };

 

  // Function to determine species based on values
  const determineNewSpecies = (values) => {
    const threshold = 0.5; // You can adjust this threshold based on your specific scenario
    if (values[0] >= threshold && values[1] < threshold && values[2] < threshold) {
      return 'setosa';
    } else if (values[0] < threshold && values[1] >= threshold && values[2] < threshold) {
      return 'virginica';
    } else if (values[0] < threshold && values[1] < threshold && values[2] >= threshold) {
      return 'versicolor';
    } else {
      return 'Unknown'; // Add a default case or handle other scenarios as needed
    }
  };

/////////////////////////////////////////////////////////////////////////

  return (


//////////////////////////

    <div>
      {showLoading === false ? (
        <div>









          <h1>Prediction Results After Epoch & Learning rate</h1>

          {/* Table for Test Results */}
          <table className="DisplayResults-table">
            <thead>
              <tr>
                <th className="DisplayResults-th">Test 1</th>
                <th className="DisplayResults-th">Test 2</th>
                <th className="DisplayResults-th">Test 3</th>
                <th className="DisplayResults-th">Species</th> {/* New Column */}
                <th className="DisplayResults-th">Epoch's</th>
                <th className="DisplayResults-th">Learning rate</th>
                

              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="DisplayResults-td">
                  {newdata.row1 && newdata.row1.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                <td className="DisplayResults-td">
                  {newdata.row2 && newdata.row2.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                <td className="DisplayResults-td">
                  {newdata.row3 && newdata.row3.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                <td className="DisplayResults-td">
                  {newdata.row1 && newdata.row2 && newdata.row3 && (
                    <div>
                      <p>{determineNewSpecies([newdata.row1[0], newdata.row2[0], newdata.row3[0]])}</p>
                      <p>{determineNewSpecies([newdata.row1[1], newdata.row2[1], newdata.row3[1]])}</p>
                      <p>{determineNewSpecies([newdata.row1[2], newdata.row2[2], newdata.row3[2]])}</p>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>



          {/* Table for Species Values */}
          <h2>Definition of Values for Species, Epoch and learning</h2>
          <table className="DisplayResults-table">
            <thead>

              <tr>
                <th className="DisplayResults-th">Species</th>
                <th className="DisplayResults-th">Values</th>
                
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="DisplayResults-td">setosa</td>
                <td className="DisplayResults-td">1, 0, 0</td>
              </tr>
              <tr>
                <td className="DisplayResults-td">virginica</td>
                <td className="DisplayResults-td">0, 1, 0</td>
              </tr>
              <tr>
                <td className="DisplayResults-td">versicolor</td>
                <td className="DisplayResults-td">0, 0, 1</td>


              </tr>


            </tbody>

            

</table>
            
</div>

) : (
  <div>
    {showLoading && (
      <Spinner animation="border" role="status">
        <span className="sr-only">Waiting for results...</span>
      </Spinner>



    )}
  </div>
)}


<tbody>
<h2>Results  epoch and learning rate adjustments</h2>

<table className="DisplayResults-table">
<thead>
 <tr>
   <th className="DisplayResults-th">RT</th>
   <th className="DisplayResults-th">test</th>
 </tr>
</thead>
</table>


</tbody>

</div>



)}

export default DisplayResults;

