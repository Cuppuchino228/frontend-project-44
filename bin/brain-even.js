#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greet } from '../scr/cli.js'

function isEvenGame() {
  const userName = greet()
  console.log("Answer \'yes\" if the number is even, otherwise \"no\.")
  console.log(`Question ${Math.random()}`)

  let totalCount = 0
  const maxCount = 3

  while (totalCount < maxCount) {
    const randomNumber = getRandomInt
    const isEven = randomNumber % 2 === 0
    const correctAnswer = isEven ? 'yes' : 'no'

    console.log(`Question ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (userAnswer === correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return false
    }
  }
  console.log(`Congratulations, ${userName}!`)
  return true
}

isEvenGame(getName())