import {Component} from 'react'

const AppointmentItem = props => {
  const {appointmentList, changeIsStarred} = props
  const {id, title, date, isStarred} = appointmentList

  const starChange = () => {
    changeIsStarred(id)
  }

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li>
      <h1> {title}</h1>
      <p> Date: {date}</p>
      <button data-testid="star">
        <img src={starUrl} alt="star" onClick={starChange} />
      </button>
    </li>
  )
}
export default AppointmentItem
