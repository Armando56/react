import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 }
    ],
    pageTitle: 'React components',
    textDescr: 'Arman forefer',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }
  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({ cars })
  }

  changeTextHandler = (newText) => {
    this.setState({
      textDescr: newText
    })
  }


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onChangeText={() => this.changeTextHandler(car.year)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>


        <p>{this.state.textDescr}</p>
        <button onClick={this.changeTextHandler.bind(this, 'Kruto!!! Rabotaet')}
        >Change text</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
