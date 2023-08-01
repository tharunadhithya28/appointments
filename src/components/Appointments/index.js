import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentList: initialAppointmentsList,
    date: '',
    title: '',
    isStarred: false,
  }

  listenTitle = event => {
    this.setState({title: event.target.value})
  }

  listenDate = event => {
    this.setState({date: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {appointmentList, title, date, isStarred} = this.state
    const appointment = {
      id: uuidv4(),
      title,
      date,
      isStarred,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, appointment],
    }))
    console.log(appointmentList)
  }

  onlyStarred = () => {
    const {appointmentList} = this.state
    const starredList = appointmentList.filter(
      eachList => eachList.isStarred === !eachList.isStarred,
    )
    this.setState({appointmentList: starredList})
  }

  changeIsStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachList => {
        if (eachList.id === id) {
          return {...eachList, isStarred: !eachList.isStarred}
        }
        return eachList
      }),
    }))
  }

  render() {
    const {appointmentList} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="top-container">
            <form onSubmit={this.onFormSubmit}>
              <div className="top-left-container">
                <h1> Add Appointment </h1>
                <label htmlFor="title"> TITLE </label>
                <input type="text" id="title" onChange={this.listenTitle} />
                <label htmlFor="date"> Date </label>
                <input type="date" onChange={this.listenDate} />
              </div>
              <button type="submit"> Add </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="appointments">
            <h1> Appointments </h1>
            <button type="button" onClick={this.onlyStarred}>
              {' '}
              Starred{' '}
            </button>
          </div>
          <ul>
            {appointmentList.map(eachList => (
              <AppointmentItem
                appointmentList={eachList}
                changeIsStarred={this.changeIsStarred}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
