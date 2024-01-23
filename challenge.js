// Stop Watch Challenge

function StopWatch() {
  
  let startTime, endTime, running, duration = 0;

  running = false;

  // StopWatch object property
  this.duration = 0;

  this.start = function () {
    // Check if the StopWatch is not running
    if (running == false) {
      
      running = true;

      startTime = new Date();

    } else {
      // throw an error if the start function is called
      throw new Error("Stopwatch has already started.");
    }
  };

  this.reset = function () {
   startTime = null;
   endTime = null;
   running = false;
   duration = 0;
  };

  this.stop = function () {
    // Check if the StopWatch is running
    if (running === true) {

      running = false;

      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration+=seconds
    } else {
      // Throw an error if Stopwatch is stoppped
      throw new Error("Stopatch  is not started.");
    }
  };

  // mechanism to get duration abstracted property
  Object.defineProperty(this,'duration', 
  {
    get: function(){
      return duration;
    }
  }
  
  )
}
