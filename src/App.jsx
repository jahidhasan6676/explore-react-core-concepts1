import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Condition from './Condition'
import Actor from './Actor'
import Singer from './Singer'
import Hafez from './Hafez'
import BookStore from './BookStore'

function App() {
  // const actors = ['Jahid', 'Shakib', 'Burhan', 'Raj', 'Salman'];

  // const singers = [
  //   {id:1, name: 'Dr. Mahfuzur Rahman', age: 60},
  //   {id:2, name: 'pritom', age: 30},
  //   {id:3, name: 'Lalon', age: 80},
  //   {id:4, name: 'Shuvro', age: 40},
  // ]

  const hafezs = [
    {id:1, name: 'saiful', age: 20},
    {id:2, name: 'monir', age: 30},
    {id:3, name: 'obaydul', age: 34},
    {id:4, name: 'hasan', age: 22},
  ]
  const books = [
    {id:1, name: 'Bangla', price: 20},
    {id:2, name: 'English', price: 30},
    {id:3, name: 'Math', price: 34},
    {id:4, name: 'ICT', price: 22},
  ]
  return (
    <>
      <h2>Vite + React</h2>

      <BookStore books={books}></BookStore>


      {
        hafezs.map(hafez => <Hafez details ={hafez}></Hafez>)
      }
    {/* {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

      <Actor name={'Bappa raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {/* <Condition work="Learn Javascript" isPractice={true}></Condition>
      <Condition work="Try Javascript" isPractice={false}></Condition>
      <Condition work="Problem solving" isPractice={false}></Condition> */}
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Core concepts"
        isDone={false}></Todo>
      <Todo
        task="Try Jsx"
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="50" ram="4gb"></Device>
      <Device name="mobile" price="20" ram="3gb"></Device>
      <Device name="watch" price="10" ram="1gb"></Device>
      <Device name="desktop" price="30" ram="8gb"></Device>
     
      <Person></Person>
      <Student name="jahid" classes="13" score="90"></Student>
      <Student name="Rashid" classes="9" score="70"></Student>
      <Student name="Abul"></Student>
      <Developer person={{name: 'Jahid', coding: 'Javascript', Time: '24hr'}}></Developer> */}

    </>
  )
}

function Device(props) {
  return <h2>This device: {props.name}, price: {props.price}k, ram: {props.ram}</h2>
}

function Person() {
  const age = 21;
  const money = 50;
  const person = { name: 'jahid', age: 22 }
  return <h3>I am a person with age: {age} and money: {money}.00TK</h3>
}

function Student({ name, classes = 5, score = 33 }) {
  const developerStyle = {
    color: 'bisque',
    fontSize: '30px'
  }

  return (
    <div className='student'>
      <h3 style={{
        color: 'bisque',
        fontSize: '30px'
      }}>This is a student</h3>
      <p className='pTagStudent'>Name:  {name} </p>
      <p className='pTagStudent'>Class: {classes}</p>
      <p className='pTagStudent'>Score: {score} </p>
    </div>
  )
}

function Developer({ person }) {
  const developerStyle = {
    margin: ' 15px',
    padding: '10px',
    border: '2px solid green',
    borderRadius: '10px',
    fontSize: '20px'
  }
  const pTagStyle = {
    fontSize: '18px',
    color: 'goldenrod',
    fontWeight: 'bold'
  }
  return (
    <div style={developerStyle}>
      <h3>I am junior developer</h3>
      <p style={pTagStyle}>Name: {person.name}</p>
      <p style={pTagStyle}>Coding: {person.coding}</p>
      <p style={pTagStyle}>Work Time: {person.Time}</p>
    </div>
  )
}

export default App
