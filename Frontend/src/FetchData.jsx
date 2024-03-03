import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Customer Details</h3>
            <div>
            <table className ='center'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            const createdAtSplit = item.created_at.split('T');
                            const date = createdAtSplit[0];
                            const time = createdAtSplit[1].substring(0,8);
                            return(
                                <tr key={item.sno}>
                                    <td>{item.sno}</td>
                                    <td>{item.customer_name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location}</td>
                                    <td>{date}</td>
                                    <td>{time}</td>
                                </tr>
                             );
                        })

                    }
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default FetchData;