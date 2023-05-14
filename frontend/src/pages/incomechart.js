import React from 'react'
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, SubTitle } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);




export default function IncomeChart({open1,handleClose1}) {
 

    const url1 = `http://localhost:4000/income?category=Salary`
    const url2 = `http://localhost:4000/income?category=Interest`
    const url3 = `http://localhost:4000/income?category=Divident`
    const url4 = `http://localhost:4000/income?category=Rental-Income`
    const url5 = `http://localhost:4000/income?category=ROI`
    const url6 = `http://localhost:4000/income?category=Miscellaneous`



    const n=6;
    let a = new Array(n); for (let i=0; i<n; i++) a[i] = 0;


    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [user3, setUser3] = useState([]);
    const [user4, setUser4] = useState([]);
    const [user5, setUser5] = useState([]);
    const [user6, setUser6] = useState([]);

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
      a[j]+=Number(user1.amount)
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
    a[j]+=Number(user2.amount)
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
  a[j]+=Number(user3.amount)
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
  a[j]+=Number(user4.amount)
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
  a[j]+=Number(user5.amount)
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
  a[j]+=Number(user6.amount)
))}


let sum=0;
for (let i=0; i<n; i++){
  sum+=a[i];
}

const data = {
  labels: ["Salary", "Interest", "Divident", "Rental Income", "ROI", "Miscellaneous"],
  datasets: [
    {
      label: "Amount",
      data: a,
      backgroundColor: [
        "rgba(255,0,0,0.5)",
        "rgba(0,0,255,0.5)",
        "rgba(128,0,0,0.5)",
        "rgba(128,0,128,0.5)",
        "rgba(218, 165, 32,0.5)",
        "rgba(0,100,0,0.5)",

      ],
      borderColor: [
        "rgba(255,0,0,1)",
        "rgba(0,0,255,1)",
        "rgba(128,0,0,1)",
        "rgba(128,0,128,1)",
        "rgba(218, 165, 32,1)",
        "rgba(0,100,0,1)",
      ],
      borderWidth: 1.2,
    },
  ],
};


const options = {
  plugins: {
      title: {
          display: true,
          text: `Income Chart` ,
          font: {
            size: 24,
            weight: 900
        }
      },
      subtitle: {
        display: true,
        text: `Your Total Income is Rs. ${sum}` ,
        font: {
          size: 18,
          weight: "bold"
      }
      }
  }
};

  return (
    <div>
      <Dialog
          PaperProps={{
            sx: {
              height: "100%",
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
        <Doughnut data={data} options={options} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

