import React from 'react'
import card from './Card.module.scss'

type Props = {
    title: string,
    widthCard: number,
    heightCard: number,
    firstColor: string,
    secondColor: string,
    price: number,
    storage: string,
    users: string,
    sendUp: string
}

export default function Card({title, widthCard, heightCard, firstColor, secondColor, price, storage, users, sendUp}:Props) {
  return (
    <div className={card.wrapper} style={{width: widthCard + 'px', height: heightCard + 'px', backgroundColor: firstColor}}>
        <div className={card.container}>
            <h1 style={{color: secondColor}}>{title}</h1>
            <div className={card.price}>
                <p style={{color: secondColor}}>$</p>
                <p className={card.price__number} style={{color: secondColor}}>{price}</p>
            </div>
            <span></span>
            <p style={{color: secondColor}}>{storage}</p>
            <span></span>
            <p style={{color: secondColor}}>{users}</p>
            <span></span>
            <p style={{color: secondColor}}>{sendUp}</p>
            <span></span>
            <button>Learn More</button>
        </div>
    </div>
  )
}
