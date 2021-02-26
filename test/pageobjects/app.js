const COMMANDS = require('../consts/commands')
class App{
  //consts
  get SCHEDULE_BUTTON_OFFSET() {return 200} // change to your own experimentally determined value
  get DIRECTION_UP() {return 1}
  get DIRECTION_DOWN() {return -1}
  get DAY_BAR() {return 0}
  get HOUR_BAR() {return 1}
  get MINUTE_BAR() {return 2}
  get COMMANDS() {return {
    EAT:'',
    WORK_1:'',
    WORK_2:'',
    WORK_3:'',

  }}

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
          { action: "release" }
          ]);

          driver.touchPerform([
          {
              action: "press",
              options: {
              x: loc.x,
              y: loc.y - this.SCHEDULE_BUTTON_OFFSET
              }
          },
          { action: "wait", options: { mseconds: 200 } },
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

    setEatReminder(day, offset){

        this.setMessageText(COMMANDS.EAT)

        this.openReminderWindow()

        if(offset.days + day == 0){
          if (offset.hours == 12){
            if( parseInt($$('//android.widget.SeekBar')[1].getText().split(' ')[0]) > 11 ){
              driver.back()
              return offset
            }
          }
        }
        console.log([{days:offset.days + day, hours: offset.hours, minutes:offset.minutes}])
        this.setDateByOffset({
            days:offset.days+day,
            hours:offset.hours,
            minutes:offset.minutes
        })
        $$('//android.widget.Button')[0].click()
        driver.back()
        return offset
    }


    setDateByOffset(offset){
        if (offset.days > 0){this.swipeSeekbar(this.DAY_BAR, this.DIRECTION_DOWN, offset.days)}
        if (offset.hours > 0) {this.swipeSeekbar(this.HOUR_BAR, this.DIRECTION_DOWN, offset.hours)}
        if (offset.minutes > 0) {this.swipeSeekbar(this.MINUTE_BAR, this.DIRECTION_DOWN, offset.minutes)}
    }

}
    module.exports = new App()
