import React from 'react'
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



export default function AnalysisChart({open1,handleClose1}) {
 


    const url1 = `http://localhost:4000/analysis?month=January`
    const url2 = `http://localhost:4000/analysis?month=February`
    const url3 = `http://localhost:4000/analysis?month=March`
    const url4 = `http://localhost:4000/analysis?month=April`
    const url5 = `http://localhost:4000/analysis?month=May`
    const url6 = `http://localhost:4000/analysis?month=June`
    const url7 = `http://localhost:4000/analysis?month=July`
    const url8 = `http://localhost:4000/analysis?month=August`
    const url9 = `http://localhost:4000/analysis?month=September`
    const url10 = `http://localhost:4000/analysis?month=October`
    const url11 = `http://localhost:4000/analysis?month=November`
    const url12 = `http://localhost:4000/analysis?month=December`
    
    
    
    const n=12;
    let a = new Array(n); for (let i=0; i<n; i++) a[i] = 0;
    let b = new Array(n); for (let i=0; i<n; i++) b[i] = 0;
    
    
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [user3, setUser3] = useState([]);
    const [user4, setUser4] = useState([]);
    const [user5, setUser5] = useState([]);
    const [user6, setUser6] = useState([]);
    const [user7, setUser7] = useState([]);
    const [user8, setUser8] = useState([]);
    const [user9, setUser9] = useState([]);
    const [user10, setUser10] = useState([]);
    const [user11, setUser11] = useState([]);
    const [user12, setUser12] = useState([]);
    
    
    let j=0;
    
    useEffect(() => {
      fetchData1();
    },[user1])
    
    const fetchData1 = () => {
      return fetch(url1)
            .then((response) => response.json())
            .then((data) => setUser1(data))
    }
    
    {user1.map((user1) => (
      a[j]=Number(user1.income)
    ))}
    {user1.map((user1) => (
        b[j]=Number(user1.expense)
    ))}
    j++;
    
    useEffect(() => {
        fetchData2();
      },[user2])
    
      const fetchData2 = () => {
        return fetch(url2)
              .then((response) => response.json())
              .then((data) => setUser2(data))
      }
    
      {user2.map((user2) => (
        a[j]=Number(user2.income)
      ))}
      {user2.map((user2) => (
          b[j]=Number(user2.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData3();
      },[user3])
    
      const fetchData3 = () => {
        return fetch(url3)
              .then((response) => response.json())
              .then((data) => setUser3(data))
      }
    
      {user3.map((user3) => (
        a[j]=Number(user3.income)
      ))}
      {user3.map((user3) => (
          b[j]=Number(user3.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData4();
      },[user4])
    
      const fetchData4 = () => {
        return fetch(url4)
              .then((response) => response.json())
              .then((data) => setUser4(data))
      }
    
      {user4.map((user4) => (
        a[j]=Number(user4.income)
      ))}
      {user4.map((user4) => (
          b[j]=Number(user4.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData5();
      },[user5])
    
      const fetchData5 = () => {
        return fetch(url5)
              .then((response) => response.json())
              .then((data) => setUser5(data))
      }
    
      {user5.map((user5) => (
        a[j]=Number(user5.income)
      ))}
      {user5.map((user5) => (
          b[j]=Number(user5.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData6();
      },[user6])
    
      const fetchData6 = () => {
        return fetch(url6)
              .then((response) => response.json())
              .then((data) => setUser6(data))
      }
    
      {user6.map((user6) => (
        a[j]=Number(user6.income)
      ))}
      {user6.map((user6) => (
          b[j]=Number(user6.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData7();
      },[user7])
    
      const fetchData7 = () => {
        return fetch(url7)
              .then((response) => response.json())
              .then((data) => setUser7(data))
      }
    
      {user7.map((user7) => (
        a[j]=Number(user7.income)
      ))}
      {user7.map((user7) => (
          b[j]=Number(user7.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData8();
      },[user8])
    
      const fetchData8 = () => {
        return fetch(url8)
              .then((response) => response.json())
              .then((data) => setUser8(data))
      }
    
      {user8.map((user8) => (
        a[j]=Number(user8.income)
      ))}
      {user8.map((user8) => (
          b[j]=Number(user8.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData9();
      },[user9])
    
      const fetchData9 = () => {
        return fetch(url9)
              .then((response) => response.json())
              .then((data) => setUser9(data))
      }
    
      {user9.map((user9) => (
        a[j]=Number(user9.income)
      ))}
      {user9.map((user9) => (
          b[j]=Number(user9.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData10();
      },[user10])
    
      const fetchData10 = () => {
        return fetch(url10)
              .then((response) => response.json())
              .then((data) => setUser10(data))
      }
    
      {user10.map((user10) => (
        a[j]=Number(user10.income)
      ))}
      {user10.map((user10) => (
          b[j]=Number(user10.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData11();
      },[user11])
    
      const fetchData11 = () => {
        return fetch(url11)
              .then((response) => response.json())
              .then((data) => setUser11(data))
      }
    
      {user11.map((user11) => (
        a[j]=Number(user11.income)
      ))}
      {user11.map((user11) => (
          b[j]=Number(user11.expense)
      ))}
      j++;
    
      useEffect(() => {
        fetchData12();
      },[user12])
    
      const fetchData12 = () => {
        return fetch(url12)
              .then((response) => response.json())
              .then((data) => setUser12(data))
      }
    
      {user12.map((user12) => (
        a[j]=Number(user12.income)
      ))}
      {user12.map((user12) => (
          b[j]=Number(user12.expense)
      ))}
    


const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Income",
      data: a,
      borderColor: "rgba(0,0,255,1)",
      backgroundColor: "rgba(0,0,255,0.5)",
      borderWidth: 1.2,
    },
    {
      label: "Expense",
      data: b,
      borderColor: "rgba(255,0,0,1)",
      backgroundColor: "rgba(255,0,0,0.5)",
      borderWidth: 1.2,
    },
  ],
};


const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        font: {
            size: 20,
            weight: 800
        },
        text: 'Month-on-Month Analysis',
      },
    },

};

  return (
    <div>
      <Dialog
          PaperProps={{
            sx: {
              height: "50%",
              width: "100%",

              // maxHeight: 500
            }
          }}
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <Bar options={options} data={data} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

