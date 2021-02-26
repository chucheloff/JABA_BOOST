
const App = require('../pageObjects/app')
const COMMANDS = require('../consts/commands')

describe('LVL UP MY JABA', ()=>{

  //offset structure {days : x, hours : y, minutes: z}, 0 <= x < 364, 0 <= y < , 0 <= z < 59 - int

  const daysToGenerate = 7


    it('EAT', ()=>{
        //for each day there are 2 eatigns 
        let offset = {
            days:0,
            hours:0,
            minutes:0
        }
        for (let i = 0; i < daysToGenerate; i++){
            offset = App.setReminder(i,offset)
            offset.hours += 12
            offset = App.setReminder(i,offset)
        }
    })

//   it.skip('WORK', ()=>{
//     //each day there are 
//     for (let i = 0; i < daysToGenerate; i++){
//       App.setMessageText(COMMANDS.WORK[randomInt(0,COMMANDS.WORK.length)])
//       App.openReminderWindow()
//       App.setDateByOffset({days:i,hours:0,minutes:0})
//       App.setReminder()
//     }
//   })
})

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}