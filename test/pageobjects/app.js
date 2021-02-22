
class App{
  get DIRECTION_UP() {return 1}
  get DIRECTION_DOWN() {return -1}
  get DAY_BAR() {return 0}
  get HOUR_BAR() {return 1}
  get MINUTE_BAR() {return 2}

  getCurrentDate(){
    let seekBar = $$('//android.widget.SeekBar')
    return {day:seekBar[0].getText(), hour:seekBar[1].getText(), minute:seekBar[2].getText()}
  }
  
  openReminderWindow(){
      let sendButton = $$('//android.view.View[@content-desc="Send"]')[0]
      let loc = sendButton.getLocation()
      driver.touchPerform([
          {
              action: "press",
              options: {
              x: loc.x,
              y: loc.y
              }
          },
          { action: "wait", options: { mseconds: 1000 } },
          // {
          //   action: "moveTo",
          //   options: {
          //     x: to.x,
          //     y: to.y
          //   }
          // },
          { action: "release" }
          ]);
  
          driver.touchPerform([
          {
              action: "press",
              options: {
              x: loc.x,
              y: loc.y - 50
              }
          },
          { action: "wait", options: { mseconds: 200 } },
          // {
          //   action: "moveTo",
          //   options: {
          //     x: to.x,
          //     y: to.y
          //   }
          // },
          { action: "release" }
          ]);
  }

  setMessageText(text){
      $$('//android.widget.EditText')[0].setValue(text)
  }
  /**
   * Swipes given seekbar for 1 value in given direction
   * 
   * @param {int} seekBarType Index of wheel to rotate, 0 1 2 for date, hour, minute
   * @param {int} direction const for direction of turn
   * @param {int} reps optional amount of repetiotions, default = 1
   */
  swipeSeekbar(seekIndex, direction, reps = 1){
    let seekBar = $$('//android.widget.SeekBar')
    let loc1 = seekBar[seekIndex].getLocation()
    let but = $$('//android.widget.Button')[0].getLocation()
    let from = {x:loc1.x, y : loc1.y}
    let elemHeight = (but.y-loc1.y)/6
    let to = { x:loc1.x, y: from.y + (elemHeight * direction)} 
    for (let i = 0; i<reps; i++){
      driver.touchPerform([
        {
          action: "press",
          options: {
            x: from.x,
            y: from.y
          }
        },
        { action: "wait", options: { mseconds: 500 } },
        {
          action: "moveTo",
          options: {
            x: to.x,
            y: to.y
          }
        },
        { action: "release" }
      ]);
    }
  }

  setReminder(){
    $$('//android.widget.Button')[0].click()
  }

  setDateByOffset(offset){
    this.swipeSeekbar(this.DAY_BAR, DIRECTION_DOWN, offset.days)
    this.swipeSeekbar(this.HOUR_BAR, DIRECTION_DOWN, offset.hours)
    this.swipeSeekbar(this.MINUTE_BAR, DIRECTION_DOWN, offset.minutes)
  }
  
}
    
    module.exports = new App()