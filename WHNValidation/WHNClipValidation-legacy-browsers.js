/************************** 
 * Whnclipvalidation Test *
 **************************/


// store info about the experiment session:
let expName = 'WHNClipValidation';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(exp_startRoutineBegin());
flowScheduler.add(exp_startRoutineEachFrame());
flowScheduler.add(exp_startRoutineEnd());
flowScheduler.add(practiceTrialRoutineBegin());
flowScheduler.add(practiceTrialRoutineEachFrame());
flowScheduler.add(practiceTrialRoutineEnd());
flowScheduler.add(pracReponseRoutineBegin());
flowScheduler.add(pracReponseRoutineEachFrame());
flowScheduler.add(pracReponseRoutineEnd());
flowScheduler.add(end_of_practiceRoutineBegin());
flowScheduler.add(end_of_practiceRoutineEachFrame());
flowScheduler.add(end_of_practiceRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Clip13WHN.mp4', 'path': 'Clip13WHN.mp4'},
    {'name': 'Clip39WHN.mp4', 'path': 'Clip39WHN.mp4'},
    {'name': 'Clip32WHN.mp4', 'path': 'Clip32WHN.mp4'},
    {'name': 'Clip31WHN.mp4', 'path': 'Clip31WHN.mp4'},
    {'name': 'Slide17.jpg', 'path': 'Slide17.jpg'},
    {'name': 'Slide20.jpg', 'path': 'Slide20.jpg'},
    {'name': 'Slide2.jpg', 'path': 'Slide2.jpg'},
    {'name': 'Clip11WHN.mp4', 'path': 'Clip11WHN.mp4'},
    {'name': 'Clip15WHN.mp4', 'path': 'Clip15WHN.mp4'},
    {'name': 'Clip21WHN.mp4', 'path': 'Clip21WHN.mp4'},
    {'name': 'Slide23.jpg', 'path': 'Slide23.jpg'},
    {'name': 'Clip37WHN.mp4', 'path': 'Clip37WHN.mp4'},
    {'name': 'Clip03WHN.mp4', 'path': 'Clip03WHN.mp4'},
    {'name': 'Slide38.jpg', 'path': 'Slide38.jpg'},
    {'name': 'Slide40.jpg', 'path': 'Slide40.jpg'},
    {'name': 'Clip08WHN.mp4', 'path': 'Clip08WHN.mp4'},
    {'name': 'Slide27.jpg', 'path': 'Slide27.jpg'},
    {'name': 'WHNVideoList.xlsx', 'path': 'WHNVideoList.xlsx'},
    {'name': 'Clip07WHN.mp4', 'path': 'Clip07WHN.mp4'},
    {'name': 'Clip26WHN.mp4', 'path': 'Clip26WHN.mp4'},
    {'name': 'Clip40WHN.mp4', 'path': 'Clip40WHN.mp4'},
    {'name': 'Clip28WHN.mp4', 'path': 'Clip28WHN.mp4'},
    {'name': 'Slide36.jpg', 'path': 'Slide36.jpg'},
    {'name': 'Clip23WHN.mp4', 'path': 'Clip23WHN.mp4'},
    {'name': 'Slide39.jpg', 'path': 'Slide39.jpg'},
    {'name': 'Clip20WHN.mp4', 'path': 'Clip20WHN.mp4'},
    {'name': 'Slide3.jpg', 'path': 'Slide3.jpg'},
    {'name': 'Slide8.jpg', 'path': 'Slide8.jpg'},
    {'name': 'Slide14.jpg', 'path': 'Slide14.jpg'},
    {'name': 'Slide4.jpg', 'path': 'Slide4.jpg'},
    {'name': 'Slide22.jpg', 'path': 'Slide22.jpg'},
    {'name': 'Slide7.jpg', 'path': 'Slide7.jpg'},
    {'name': 'Clip30WHN.mp4', 'path': 'Clip30WHN.mp4'},
    {'name': 'Clip10WHN.mp4', 'path': 'Clip10WHN.mp4'},
    {'name': 'Clip34WHN.mp4', 'path': 'Clip34WHN.mp4'},
    {'name': 'Slide5.jpg', 'path': 'Slide5.jpg'},
    {'name': 'Slide9.jpg', 'path': 'Slide9.jpg'},
    {'name': 'Clip25WHN.mp4', 'path': 'Clip25WHN.mp4'},
    {'name': 'Slide21.jpg', 'path': 'Slide21.jpg'},
    {'name': 'Clip09WHN.mp4', 'path': 'Clip09WHN.mp4'},
    {'name': 'Slide13.jpg', 'path': 'Slide13.jpg'},
    {'name': 'Slide18.jpg', 'path': 'Slide18.jpg'},
    {'name': 'Clip14WHN.mp4', 'path': 'Clip14WHN.mp4'},
    {'name': 'Clip22WHN.mp4', 'path': 'Clip22WHN.mp4'},
    {'name': 'Slide26.jpg', 'path': 'Slide26.jpg'},
    {'name': 'Clip18WHN.mp4', 'path': 'Clip18WHN.mp4'},
    {'name': 'Clip06WHN.mp4', 'path': 'Clip06WHN.mp4'},
    {'name': 'Slide16.jpg', 'path': 'Slide16.jpg'},
    {'name': 'Slide24.jpg', 'path': 'Slide24.jpg'},
    {'name': 'Clip16WHN.mp4', 'path': 'Clip16WHN.mp4'},
    {'name': 'Clip17WHN.mp4', 'path': 'Clip17WHN.mp4'},
    {'name': 'Clip27WHN.mp4', 'path': 'Clip27WHN.mp4'},
    {'name': 'Clip05WHN.mp4', 'path': 'Clip05WHN.mp4'},
    {'name': 'Slide25.jpg', 'path': 'Slide25.jpg'},
    {'name': 'Clip29WHN.mp4', 'path': 'Clip29WHN.mp4'},
    {'name': 'Slide28.jpg', 'path': 'Slide28.jpg'},
    {'name': 'Slide1.jpg', 'path': 'Slide1.jpg'},
    {'name': 'WHNPractice2.mp4', 'path': 'WHNPractice2.mp4'},
    {'name': 'Clip12WHN.mp4', 'path': 'Clip12WHN.mp4'},
    {'name': 'Slide32.jpg', 'path': 'Slide32.jpg'},
    {'name': 'Clip01WHN.mp4', 'path': 'Clip01WHN.mp4'},
    {'name': 'Slide30.jpg', 'path': 'Slide30.jpg'},
    {'name': 'Slide15.jpg', 'path': 'Slide15.jpg'},
    {'name': 'Slide33.jpg', 'path': 'Slide33.jpg'},
    {'name': 'Slide35.jpg', 'path': 'Slide35.jpg'},
    {'name': 'Slide31.jpg', 'path': 'Slide31.jpg'},
    {'name': 'Slide10.jpg', 'path': 'Slide10.jpg'},
    {'name': 'WHNPractice2.jpg', 'path': 'WHNPractice2.jpg'},
    {'name': 'Slide11.jpg', 'path': 'Slide11.jpg'},
    {'name': 'Slide34.jpg', 'path': 'Slide34.jpg'},
    {'name': 'Slide37.jpg', 'path': 'Slide37.jpg'},
    {'name': 'Clip04WHN.mp4', 'path': 'Clip04WHN.mp4'},
    {'name': 'Slide29.jpg', 'path': 'Slide29.jpg'},
    {'name': 'Clip19WHN.mp4', 'path': 'Clip19WHN.mp4'},
    {'name': 'Slide19.jpg', 'path': 'Slide19.jpg'},
    {'name': 'Clip38WHN.mp4', 'path': 'Clip38WHN.mp4'},
    {'name': 'Clip02WHN.mp4', 'path': 'Clip02WHN.mp4'},
    {'name': 'Slide6.jpg', 'path': 'Slide6.jpg'},
    {'name': 'Clip33WHN.mp4', 'path': 'Clip33WHN.mp4'},
    {'name': 'Clip36WHN.mp4', 'path': 'Clip36WHN.mp4'},
    {'name': 'Slide12.jpg', 'path': 'Slide12.jpg'},
    {'name': 'Clip24WHN.mp4', 'path': 'Clip24WHN.mp4'},
    {'name': 'Clip35WHN.mp4', 'path': 'Clip35WHN.mp4'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C164PHTK', '');

  return Scheduler.Event.NEXT;
}


var exp_startClock;
var Info;
var key_resp_2;
var practiceTrialClock;
var pracWHNvideoClock;
var pracWHNvideo;
var skipPrac;
var practice_fixation;
var pracReponseClock;
var pracImage;
var prac_resp;
var end_of_practiceClock;
var practice_end_text;
var end_of_practice_resp;
var trialClock;
var hazardVideoSkip;
var fixation_cross;
var trialCount;
var printed;
var responseClock;
var WHNAnswer_2;
var trialrespkey;
var break_2Clock;
var break_text;
var breakresp;
var breakTrials;
var endClock;
var end_text;
var end_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "exp_start"
  exp_startClock = new util.Clock();
  Info = new visual.TextStim({
    win: psychoJS.window,
    name: 'Info',
    text: "Welcome to the experiment!\n\nYou will be taking part in a Hazard Prediction or 'What Happens Next' task.\n\nVideo footage filmed from the driver's perspective will be shown on the monitor in front of you. At some point in each clip, it will cut to black and you will be presented with four potential scenarios.\n\nYour task is to select what you think happens next from the answers presented to you by pressing the corresponding number between 1 and 4 on your keyboard\n\nPress the space bar to begin\n\n\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practiceTrial"
  practiceTrialClock = new util.Clock();
  pracWHNvideoClock = new util.Clock();
  pracWHNvideo = new visual.MovieStim({
    win: psychoJS.window,
    name: 'pracWHNvideo',
    units: 'pix',
    movie: 'WHNPractice2.mp4',
    pos: [0, 0],
    size: undefined,
    ori: 1.0,
    opacity: 1.0,
    loop: false,
    noAudio: false,
    });
  skipPrac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practice_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "pracReponse"
  pracReponseClock = new util.Clock();
  pracImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage', units : 'pix', 
    image : 'WHNPractice2.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1920, 1080],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  prac_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_of_practice"
  end_of_practiceClock = new util.Clock();
  practice_end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_end_text',
    text: 'This is the end of the practice trials\n\nIn the each block you will see 10 clips. Once the answers appear, press the number key on your keyboard that corresponds to the answer on screen.\n\nPress the space bar to begin\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_of_practice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  hazardVideoSkip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixation_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  trialCount = 0;
  printed = false;
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  WHNAnswer_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'WHNAnswer_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1920, 1080],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  trialrespkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'This is the end of this block\n\nFeel free to take a break\n\nPress the space bar to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  breakresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  breakTrials = [10, 20, 30];
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'This is the end of the experiment\n\nThanks for your help! You should be returned to Prolific to complete your participation.\n\nPress the space bar to exit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  end_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var exp_startComponents;
function exp_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_start'-------
    t = 0;
    exp_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    exp_startComponents = [];
    exp_startComponents.push(Info);
    exp_startComponents.push(key_resp_2);
    
    exp_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_startRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_start'-------
    // get current time
    t = exp_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Info* updates
    if (t >= 0.0 && Info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Info.tStart = t;  // (not accounting for frame time here)
      Info.frameNStart = frameN;  // exact frame index
      
      Info.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 1.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_startRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_start'-------
    exp_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "exp_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _skipPrac_allKeys;
var practiceTrialComponents;
function practiceTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practiceTrial'-------
    t = 0;
    practiceTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skipPrac.keys = undefined;
    skipPrac.rt = undefined;
    _skipPrac_allKeys = [];
    // keep track of which components have finished
    practiceTrialComponents = [];
    practiceTrialComponents.push(pracWHNvideo);
    practiceTrialComponents.push(skipPrac);
    practiceTrialComponents.push(practice_fixation);
    
    practiceTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practiceTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practiceTrial'-------
    // get current time
    t = practiceTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracWHNvideo* updates
    if (t >= 0.5 && pracWHNvideo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracWHNvideo.tStart = t;  // (not accounting for frame time here)
      pracWHNvideo.frameNStart = frameN;  // exact frame index
      
      pracWHNvideo.setAutoDraw(true);
      pracWHNvideo.play();
    }

    if (pracWHNvideo.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *skipPrac* updates
    if (t >= 0.0 && skipPrac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skipPrac.tStart = t;  // (not accounting for frame time here)
      skipPrac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      skipPrac.clock.reset();
      skipPrac.start();
    }

    if (skipPrac.status === PsychoJS.Status.STARTED) {
      let theseKeys = skipPrac.getKeys({keyList: ['y'], waitRelease: false});
      _skipPrac_allKeys = _skipPrac_allKeys.concat(theseKeys);
      if (_skipPrac_allKeys.length > 0) {
        skipPrac.keys = _skipPrac_allKeys[_skipPrac_allKeys.length - 1].name;  // just the last key pressed
        skipPrac.rt = _skipPrac_allKeys[_skipPrac_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practice_fixation* updates
    if (t >= 0.0 && practice_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_fixation.tStart = t;  // (not accounting for frame time here)
      practice_fixation.frameNStart = frameN;  // exact frame index
      
      practice_fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'practiceTrial'-------
    practiceTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    pracWHNvideo.stop();
    skipPrac.stop();
    // the Routine "practiceTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _prac_resp_allKeys;
var pracReponseComponents;
function pracReponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracReponse'-------
    t = 0;
    pracReponseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prac_resp.keys = undefined;
    prac_resp.rt = undefined;
    _prac_resp_allKeys = [];
    // keep track of which components have finished
    pracReponseComponents = [];
    pracReponseComponents.push(pracImage);
    pracReponseComponents.push(prac_resp);
    
    pracReponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pracReponseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracReponse'-------
    // get current time
    t = pracReponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracImage* updates
    if (t >= 0.0 && pracImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage.tStart = t;  // (not accounting for frame time here)
      pracImage.frameNStart = frameN;  // exact frame index
      
      pracImage.setAutoDraw(true);
    }

    
    // *prac_resp* updates
    if (t >= 0.0 && prac_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_resp.tStart = t;  // (not accounting for frame time here)
      prac_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      prac_resp.clock.reset();
      prac_resp.start();
      prac_resp.clearEvents();
    }

    if (prac_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_resp.getKeys({keyList: ['y', '1', '2', '3', '4'], waitRelease: false});
      _prac_resp_allKeys = _prac_resp_allKeys.concat(theseKeys);
      if (_prac_resp_allKeys.length > 0) {
        prac_resp.keys = _prac_resp_allKeys[_prac_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_resp.rt = _prac_resp_allKeys[_prac_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pracReponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracReponseRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracReponse'-------
    pracReponseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    prac_resp.stop();
    // the Routine "pracReponse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_of_practice_resp_allKeys;
var end_of_practiceComponents;
function end_of_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_of_practice'-------
    t = 0;
    end_of_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_of_practice_resp.keys = undefined;
    end_of_practice_resp.rt = undefined;
    _end_of_practice_resp_allKeys = [];
    // keep track of which components have finished
    end_of_practiceComponents = [];
    end_of_practiceComponents.push(practice_end_text);
    end_of_practiceComponents.push(end_of_practice_resp);
    
    end_of_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_of_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_of_practice'-------
    // get current time
    t = end_of_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_end_text* updates
    if (t >= 0.0 && practice_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_end_text.tStart = t;  // (not accounting for frame time here)
      practice_end_text.frameNStart = frameN;  // exact frame index
      
      practice_end_text.setAutoDraw(true);
    }

    
    // *end_of_practice_resp* updates
    if (t >= 1.0 && end_of_practice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_of_practice_resp.tStart = t;  // (not accounting for frame time here)
      end_of_practice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_of_practice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_of_practice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_of_practice_resp.clearEvents(); });
    }

    if (end_of_practice_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_of_practice_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_of_practice_resp_allKeys = _end_of_practice_resp_allKeys.concat(theseKeys);
      if (_end_of_practice_resp_allKeys.length > 0) {
        end_of_practice_resp.keys = _end_of_practice_resp_allKeys[_end_of_practice_resp_allKeys.length - 1].name;  // just the last key pressed
        end_of_practice_resp.rt = _end_of_practice_resp_allKeys[_end_of_practice_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_of_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_of_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_of_practice'-------
    end_of_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_of_practice_resp.stop();
    // the Routine "end_of_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_3;
var currentLoop;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'WHNVideoList.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_3LoopScheduler.add(trialRoutineEachFrame());
      trials_3LoopScheduler.add(trialRoutineEnd());
      trials_3LoopScheduler.add(responseRoutineBegin(snapshot));
      trials_3LoopScheduler.add(responseRoutineEachFrame());
      trials_3LoopScheduler.add(responseRoutineEnd());
      trials_3LoopScheduler.add(break_2RoutineBegin(snapshot));
      trials_3LoopScheduler.add(break_2RoutineEachFrame());
      trials_3LoopScheduler.add(break_2RoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var hazard_videoClock;
var hazard_video;
var _hazardVideoSkip_allKeys;
var VidName;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    hazard_videoClock = new util.Clock();
    hazard_video = new visual.MovieStim({
      win: psychoJS.window,
      name: 'hazard_video',
      units: 'pix',
      movie: video_file,
      pos: [0, 0],
      size: undefined,
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    hazardVideoSkip.keys = undefined;
    hazardVideoSkip.rt = undefined;
    _hazardVideoSkip_allKeys = [];
    trialCount += 1;
    VidName = hazard_video.filename;
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(hazard_video);
    trialComponents.push(hazardVideoSkip);
    trialComponents.push(fixation_cross);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hazard_video* updates
    if (t >= 1.0 && hazard_video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hazard_video.tStart = t;  // (not accounting for frame time here)
      hazard_video.frameNStart = frameN;  // exact frame index
      
      hazard_video.setAutoDraw(true);
      hazard_video.play();
    }

    if (hazard_video.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *hazardVideoSkip* updates
    if (t >= 0.0 && hazardVideoSkip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hazardVideoSkip.tStart = t;  // (not accounting for frame time here)
      hazardVideoSkip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      hazardVideoSkip.clock.reset();
      hazardVideoSkip.start();
    }

    if (hazardVideoSkip.status === PsychoJS.Status.STARTED) {
      let theseKeys = hazardVideoSkip.getKeys({keyList: ['y'], waitRelease: false});
      _hazardVideoSkip_allKeys = _hazardVideoSkip_allKeys.concat(theseKeys);
      if (_hazardVideoSkip_allKeys.length > 0) {
        hazardVideoSkip.keys = _hazardVideoSkip_allKeys[_hazardVideoSkip_allKeys.length - 1].name;  // just the last key pressed
        hazardVideoSkip.rt = _hazardVideoSkip_allKeys[_hazardVideoSkip_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixation_cross* updates
    if (t >= 0.0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    hazard_video.stop();
    hazardVideoSkip.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _trialrespkey_allKeys;
var responseComponents;
function responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'response'-------
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    WHNAnswer_2.setImage(image_file);
    trialrespkey.keys = undefined;
    trialrespkey.rt = undefined;
    _trialrespkey_allKeys = [];
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(WHNAnswer_2);
    responseComponents.push(trialrespkey);
    
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'response'-------
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WHNAnswer_2* updates
    if (t >= 0.0 && WHNAnswer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WHNAnswer_2.tStart = t;  // (not accounting for frame time here)
      WHNAnswer_2.frameNStart = frameN;  // exact frame index
      
      WHNAnswer_2.setAutoDraw(true);
    }

    
    // *trialrespkey* updates
    if (t >= 0.0 && trialrespkey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialrespkey.tStart = t;  // (not accounting for frame time here)
      trialrespkey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialrespkey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialrespkey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialrespkey.clearEvents(); });
    }

    if (trialrespkey.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialrespkey.getKeys({keyList: ['y', '1', '2', '3', '4'], waitRelease: false});
      _trialrespkey_allKeys = _trialrespkey_allKeys.concat(theseKeys);
      if (_trialrespkey_allKeys.length > 0) {
        trialrespkey.keys = _trialrespkey_allKeys.map((key) => key.name);  // storing all keys
        trialrespkey.rt = _trialrespkey_allKeys.map((key) => key.rt);
        // was this correct?
        if (trialrespkey.keys == Correct) {
            trialrespkey.corr = 1;
        } else {
            trialrespkey.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd() {
  return async function () {
    //------Ending Routine 'response'-------
    responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trialrespkey.keys === undefined) {
      if (['None','none',undefined].includes(Correct)) {
         trialrespkey.corr = 1;  // correct non-response
      } else {
         trialrespkey.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('trialrespkey.keys', trialrespkey.keys);
    psychoJS.experiment.addData('trialrespkey.corr', trialrespkey.corr);
    if (typeof trialrespkey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialrespkey.rt', trialrespkey.rt);
        routineTimer.reset();
        }
    
    trialrespkey.stop();
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _breakresp_allKeys;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_2'-------
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    breakresp.keys = undefined;
    breakresp.rt = undefined;
    _breakresp_allKeys = [];
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(break_text);
    break_2Components.push(breakresp);
    
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_2'-------
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }

    
    // *breakresp* updates
    if (t >= 1.0 && breakresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakresp.tStart = t;  // (not accounting for frame time here)
      breakresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { breakresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { breakresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { breakresp.clearEvents(); });
    }

    if (breakresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = breakresp.getKeys({keyList: ['space'], waitRelease: false});
      _breakresp_allKeys = _breakresp_allKeys.concat(theseKeys);
      if (_breakresp_allKeys.length > 0) {
        breakresp.keys = _breakresp_allKeys[_breakresp_allKeys.length - 1].name;  // just the last key pressed
        breakresp.rt = _breakresp_allKeys[_breakresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if (((trialCount % 10) !== 0)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_2'-------
    break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    breakresp.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_resp.keys = undefined;
    end_resp.rt = undefined;
    _end_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_resp);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_resp* updates
    if (t >= 0.0 && end_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_resp.tStart = t;  // (not accounting for frame time here)
      end_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_resp.clearEvents(); });
    }

    if (end_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_resp.getKeys({keyList: ['space', 'a'], waitRelease: false});
      _end_resp_allKeys = _end_resp_allKeys.concat(theseKeys);
      if (_end_resp_allKeys.length > 0) {
        end_resp.keys = _end_resp_allKeys[_end_resp_allKeys.length - 1].name;  // just the last key pressed
        end_resp.rt = _end_resp_allKeys[_end_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_resp.keys', end_resp.keys);
    if (typeof end_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_resp.rt', end_resp.rt);
        routineTimer.reset();
        }
    
    end_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
