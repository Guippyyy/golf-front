import React from 'react'
import { Line }  from "react-chartjs-2"
import { useScores} from '../api/DataFetching/FetchScores'
import Chart from 'chart.js/auto';
export default function LineChart() {

  let {scoreData, loading, error} = useScores();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;
  scoreData = {
    labels: scoreData.slice(-6).map((e) => new Date(e.createdAt).toLocaleDateString()),
    datasets: [
      { 
       label: "score",
       data: scoreData.slice(-6).map((e) => e.result),
       backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        tension: 0.1,
        borderColor: ['rgb(255, 99, 132)'],
       },
    ],
  }; 
  return (
    <Line data={scoreData} />
  )
}
