
const App = require('../pageObjects/app')
const COMMANDS = require('../consts/commands')

describe('LVL UP MY JABA', ()=>{

//   offset structure 
//   {days : x, hours : y, minutes: z}
//   0 <= x < 364, 0 <= y < , 0 <= z < 59 - all int

  const daysToGenerate = 3


    // it('EAT', ()=>{
    //     //for each day there are 2 eatigns 
    //     let offset = {
    //         days:0,
    //         hours:0,
    //         minutes:0
    //     }

    //     for (let day = 0; day < daysToGenerate; day++){
    //         offset = App.setEatReminder(day,offset)
    //         offset.hours += 12
    //         offset = App.setEatReminder(day,offset)
    //         offset.hours -= 12
    //     }
    // })

  it('WORK', ()=>{
    //each day there are 
    let offset = {
        days: 0,
        hours: 0,
        minutes: 0
    }

    while (offset.days < daysToGenerate){
        offset = App.setWorkReminder(day, offset)
        App.safeSumOffsets(offset, {days:0,hours:8,minutes:0})
        offset = App.setWorkReminder(day, offset)
        App.safeSumOffsets(offset, {days:0,hours:8,minutes:0})
        offset = App.setWorkReminder(day, offset)
        App.safeSumOffsets(offset, {days:0,hours:-16,minutes:0})
    }

  })
})

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}