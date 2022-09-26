// 1 - WHAT TO WEAR

const whatToWear = (degrees) => {
    if (degrees < 5) {
        return 'Winter jacket & boots'
    } else if (degrees < 10) {
        return 'Its chilly outside! Wear a jacket'
    } else if (degrees > 15 && degrees < 20) {
        return 'Light jacket or hoodie is a vibe'
    } else if (degrees > 23 && degrees < 30) {
        return 'SUMMER VIBES ☀️stay cool'
    } else if (degrees > 30) {
        return 'Stay inside with AC'
    }
}
console.log(whatToWear(18))

// 2 - DICE GAME

const diceGame = (rolls) => {
    for (let i = 0; i < rolls ; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1
        if (randomNumber === 6) {
            console.log('you just hit 6')
        } else {
            console.log(randomNumber)
        }
    }
}
diceGame(0);

// PT 2 JACKPOT

const diceGameJackpot = (rolls1) => {
    let amountOfSix = 0
    for (let i = 0; i < rolls1 ; i++) {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1
        console.log(randomNumber1)
        if (randomNumber1 === 6) {
            console.log('you just hit 6')
        }
        if (randomNumber1 === 6) {
            amountOfSix++
            if (amountOfSix === rolls1) {
                console.log('Jackpot! 🎉')
            }
        }
    }
}
diceGameJackpot(2)

// 3 - Sentiment Analyzer

