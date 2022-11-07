
import axios from 'axios'
const host = "http://localhost:3001"

export function getGolfCourses(callback) {
  return axios
  .get(`${host}/courses`)
  .then(res => {
    callback(res.data)
  })
}


export function getScores(callback) {
  return axios
  .get(`${host}/scores`)
  .then(res => {
    callback(res.data)
  })
}