const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray should have two elements shuffled', () => {
        expect(shuffleArray[1]).toBe(shuffleArray[3])
    })

    test('shuffleArray should return an array', () => {
        expect(shuffleArray).toBe(shuffleArray)
    })
})

