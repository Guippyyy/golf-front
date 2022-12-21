import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useScores} from '../api/DataFetching/FetchScores'
import Chart from 'chart.js/auto';
export default function DoughnutChart() {
    
  let {scoreData, loading, error} = useScores();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;
  let x = scoreData.filter(e => e.coursID === 1).length
  let y = scoreData.filter(e => e.coursID === 2).length
  let z = scoreData.filter(e => e.coursID === 3).length

    const data = {
    labels : ['Waregem', 'Oudenaarde', 'Damme'],
    datasets : [{
        data : [x ,y, z],
        backgroundColor: [
      'rgb(54, 162, 235)',
      'rgb(255, 219, 64)',
      'rgb(255, 99, 132)'],
        borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86, 1)'],
    }]
  }
  return (
    <div style={{width : '250px'}}>
    <Doughnut data={data}/>
    </div>
  )
}
