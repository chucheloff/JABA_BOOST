
const App = require('../pageObjects/app')

describe('LVL UP MY JABA', ()=>{

    //telegram
    it('SWEEP THE SWIPES', ()=>{

      App.setMessageText('BOOSTING IS NOT CHEATING')
      App.openReminderWindow()

      //set date setup sequence
      App.swipeSeekbar(App.DATE_BAR, App.DIRECTION_DOWN)
      App.swipeSeekbar(App.DATE_BAR, App.DIRECTION_DOWN)
      App.swipeSeekbar(App.HOUR_BAR, App.DIRECTION_DOWN)
      App.swipeSeekbar(App.MINUTE_BAR, App.DIRECTION_DOWN)
      App.swipeSeekbar(App.MINUTE_BAR, App.DIRECTION_DOWN)
      App.swipeSeekbar(App.MINUTE_BAR, App.DIRECTION_DOWN)

      //check whats set up
      console.log(App.getCurrentDate())

      App.setReminder()
        
    })

})