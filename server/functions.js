module.exports = {
  getDateTime: (date = new Date()) => {
    return {
      date: date.getFullYear() + '-' + 
          ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + 
          (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()),
      time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
  },
}