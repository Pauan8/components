import React from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'

export const App = () => {
  return (
    <div className="wrapper">
      <Header
        bgColor="rgb(32, 32, 31)"
        title="Get ready for adventure!" />
      <Card
        image="./CardPic.png"
        date="January 2021"
        number="01"
        title="The beginning of everything." />
    </div>
  )
}
