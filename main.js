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
        return 'Stay inside with full on AC'
    }
}
console.log(whatToWear(18))

// 2 - DICE GAME

