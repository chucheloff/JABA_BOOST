
const App = require('../pageObjects/app')

describe('LVL UP MY JABA', ()=>{

  //offset structure {days : x, hours : y, minutes: z}, x,y,z - int

  it('SWEEP THE SWIPES', ()=>{
    App.setMessageText('BOOSTING IS NOT CHEATING')
    App.openReminderWindow()
    App.setDateByOffset({days:0,hours:2,minutes:10})
    App.setReminder()
  })
})