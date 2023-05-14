import React from 'react'
import { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, SubTitle } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);




export default function ExpenseChart({open1,handleClose1}) {
 

    const url1 = `http://localhost:4000/expense?category=Grocery`
    const url2 = `http://localhost:4000/expense?category=Utility`
    const url3 = `http://localhost:4000/expense?category=Rent`
    const url4 = `http://localhost:4000/expense?category=Vehicle`
    const url5 = `http://localhost:4000/expense?category=Insurance`
    const url6 = `http://localhost:4000/expense?category=EMI`
    const url7 = `http://localhost:4000/expense?category=Entertainment`
    const url8 = `http://localhost:4000/expense?category=Personal-Care`
    const url9 = `http://localhost:4000/expense?category=Education`
    const url10 = `http://localhost:4000/expense?category=Miscellaneous`



    const n=10
    let a = new Array(n); for (let i=0; i<n; i++) a[i] = 0;


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
  a[j]+=Number(user7.amount)
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
  a[j]+=Number(user8.amount)
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
  a[j]+=Number(user9.amount)
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
  a[j]+=Number(user10.amount)
))}

let sum=0;
for (let i=0; i<n; i++){
  sum+=a[i];
}

const data = {
  labels: ["Grocery", "Utility", "Rent", "Vehicle", "Insurance", "EMI", "Entertainment", "Personal Care", "Education", "Miscellaneous"],
  datasets: [
    {
      label: "Amount",
      data: a,
      backgroundColor: [
        "rgba(255,0,0,0.5)",
        "rgba(0,0,255,0.5)",
        "rgba(128,0,0,0.5)",
        "rgba(0,128,128,0.5)",
        "rgba(85,107,47,0.5)",
        "rgba(255,69,0,0.5)",
        "rgba(255,20,147,0.5)",
        "rgba(128,0,128,0.5)",
        "rgba(218, 165, 32,0.5)",
        "rgba(0,100,0,0.5)",

      ],
      borderColor: [
        "rgba(255,0,0,1)",
        "rgba(0,0,255,1)",
        "rgba(128,0,0,1)",
        "rgba(0,128,128,1)",
        "rgba(85,107,47,1)",
        "rgba(255,69,0,1)",
        "rgba(255,20,147,1)",
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
          text: `Expense Chart` ,
          font: {
            size: 24,
            weight: 900
        }
      },
      subtitle: {
        display: true,
        text: `Your Total Expenses are Rs. ${sum}` ,
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

