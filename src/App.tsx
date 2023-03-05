import React, { useState } from 'react';
import app from './App.module.scss'
import Card from './Card/Card';

function App() {

  const [choice, setChoice] = useState(true)

  interface MyCardData {
    id: number,
    widthCard: number,
    heightCard: number,
    firstColor: string,
    secondColor: string,
    title: string,
    price: number,
    storage: string,
    users: string,
    sendUp: string
  }

  let monthlyDatas = [
    {
      id: 0,
      widthCard: 325,
      heightCard: 520,
      firstColor: '#FFFFFF',
      secondColor: '#292C42',
      title: 'Basic',
      price: 19.99,
      storage: '500 GB Storage',
      users: '2 Users Allowed',
      sendUp: 'Send up to 3 GB'
    },
    {
      id: 1,
      widthCard: 325,
      heightCard: 580,
      firstColor: '#8F93E9',
      secondColor: '#FFFFFF',
      title: 'Professional',
      price: 24.99,
      storage: '1 TB Storage',
      users: '5 Users Allowed',
      sendUp: 'Send up to 10 GB'
    },
    {
      id: 2,
      widthCard: 325,
      heightCard: 520,
      firstColor: '#FFFFFF',
      secondColor: '#292C42',
      title: 'Master',
      price: 39.99,
      storage: '2 TB Storage',
      users: '10 Users Allowed',
      sendUp: 'Send up to 20 GB'
    }
  ]

  let annuallyDatas = [
    {
      id: 0,
      widthCard: 325,
      heightCard: 520,
      firstColor: '#FFFFFF',
      secondColor: '#292C42',
      title: 'Basic',
      price: 119.9,
      storage: '6 TB Storage',
      users: '24 Users Allowed',
      sendUp: 'Send up to 36 GB'
    },
    {
      id: 1,
      widthCard: 325,
      heightCard: 580,
      firstColor: '#8F93E9',
      secondColor: '#FFFFFF',
      title: 'Professional',
      price: 149.9,
      storage: '12 TB Storage',
      users: '60 Users Allowed',
      sendUp: 'Send up to 120 GB'
    },
    {
      id: 2,
      widthCard: 325,
      heightCard: 520,
      firstColor: '#FFFFFF',
      secondColor: '#292C42',
      title: 'Master',
      price: 239.9,
      storage: '24 TB Storage',
      users: '120 Users Allowed',
      sendUp: 'Send up to 240 GB'
    }
  ]

  let cardDatas: MyCardData[] = choice ? monthlyDatas : annuallyDatas

  return (
    <div className={app.wrapper}>
      <div className={app.header}>
        <h1>Our Pricing</h1>
        <div className={app.header__container}>
          <h1>Annually</h1>
          <button style={{paddingLeft: choice ? '22px' : '3px'}} onClick={() => setChoice(!choice)}>
            <div className={app.circle}>

            </div>
          </button>
          <h1>Monthly</h1>
        </div>
      </div>
      <div className={app.body}>
        {
          cardDatas.map((cardData) =>
            <Card 
              key={cardData.id} 
              widthCard={cardData.widthCard}
              heightCard={cardData.heightCard}
              firstColor={cardData.firstColor}
              secondColor={cardData.secondColor}
              title={cardData.title}
              price={cardData.price}
              storage={cardData.storage}
              users={cardData.users}
              sendUp={cardData.sendUp}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
