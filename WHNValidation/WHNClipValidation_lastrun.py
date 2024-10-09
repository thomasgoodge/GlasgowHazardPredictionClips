#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on October 09, 2024, at 05:55
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'WHNClipsValidation'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\thoma\\OneDrive - University of Glasgow\\Desktop\\GlasgowHazardPrediction\\WHNValidation\\WHNClipValidation_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=1, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Info_2"
Info_2Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text="Welcome to the experiment\n\nWhat will I be required to do?\nThis study sets out to measure your Hazard Prediction ability on a series of driving clips. You will view 40 clips filmed from the perspective of a driver. Just before a hazard occurs, the clip will stop, and you will be asked ‘What Happens Next?’. You can respond by pressing the corresponding numbers between 1 and 4 on your keyboard. The study should take between 30 and 40 minutes. You will first see a practice clip, and then proceed through 4 blocks of 10 clips. You may take a break at any point required.\n\nHow will my data be used?\n'The good data management' guidance of the University of Glasgow will be followed. Any personal data collected from you will be anonymised and stored in an encrypted file, under a participant number. Your data will form part of a larger dataset which will be analysed and potentially written up as part of a research paper to be published in an academic journal. However, it will not be possible to link any of these data back to you individually once it is part of the larger dataset. \nIf you would like to talk to the researcher about your data, make sure to record your participant number and keep a hold of the receipt at the end of the experiment. \n\nHow can I get in contact with the researcher?\nMy email is t.goodge.1@research.gla.ac.uk, where you can get in contact about your participation, to withdraw your data or find out the results of the experiment once data collection has ended. You can also contact the project supervisor at Stephen.Brewster@Glasgow.ac.uk Please make a note of these now if you wish to contact us about your data.\n\nWhat if I do not wish to take part?\nIf you do not wish to take part in the experiment, feel free to close this window now.\n\nPress the space bar to continue\n\n",
    font='Open Sans',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "exp_start"
exp_startClock = core.Clock()
Info = visual.TextStim(win=win, name='Info',
    text="Welcome to the experiment!\n\nYou will be taking part in a Hazard Prediction or 'What Happens Next' task.\n\nVideo footage filmed from the driver's perspective will be shown on the monitor in front of you. At some point in each clip, it will cut to black and you will be presented with four potential scenarios.\n\nYour task is to select what you think happens next from the answers presented to you by pressing the corresponding number between 1 and 4 on your keyboard\n\nPress the space bar to begin\n\n\n",
    font='Open Sans',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "practiceTrial"
practiceTrialClock = core.Clock()
pracWHNvideo = visual.MovieStim3(
    win=win, name='pracWHNvideo',units='pix', 
    noAudio = False,
    filename='WHNPractice2.mp4',
    ori=1.0, pos=[0,0], opacity=1.0,
    loop=False,
    size=1.0,
    depth=0.0,
    )
skipPrac = keyboard.Keyboard()
practice_fixation = visual.TextStim(win=win, name='practice_fixation',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "pracReponse"
pracReponseClock = core.Clock()
pracImage = visual.ImageStim(
    win=win,
    name='pracImage', units='pix', 
    image='WHNPractice2.jpg', mask=None,
    ori=0.0, pos=(0, 0), size=(1920, 1080),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
prac_resp = keyboard.Keyboard()

# Initialize components for Routine "end_of_practice"
end_of_practiceClock = core.Clock()
practice_end_text = visual.TextStim(win=win, name='practice_end_text',
    text='This is the end of the practice trials\n\nIn the each block you will see 10 clips. Once the answers appear, press the number key on your keyboard that corresponds to the answer on screen.\n\nPress the space bar to begin\n',
    font='Open Sans',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_of_practice_resp = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
hazardVideoSkip = keyboard.Keyboard()
fixation_cross = visual.TextStim(win=win, name='fixation_cross',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
trialCount = 0
printed = False

# Initialize components for Routine "response"
responseClock = core.Clock()
WHNAnswer_2 = visual.ImageStim(
    win=win,
    name='WHNAnswer_2', units='pix', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=[1920,1080],
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
trialrespkey = keyboard.Keyboard()

# Initialize components for Routine "break_2"
break_2Clock = core.Clock()
break_text = visual.TextStim(win=win, name='break_text',
    text='This is the end of this block\n\nFeel free to take a break\n\nPress the space bar to continue',
    font='Open Sans',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
breakresp = keyboard.Keyboard()
breakTrials = [10,20,30]

# Initialize components for Routine "end"
endClock = core.Clock()
end_text = visual.TextStim(win=win, name='end_text',
    text='This is the end of the experiment\n\nThanks for your help! You should be returned to Prolific to complete your participation.\n\nPress the space bar to exit',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
end_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Info_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
Info_2Components = [text, key_resp_3]
for thisComponent in Info_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Info_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Info_2"-------
while continueRoutine:
    # get current time
    t = Info_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Info_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Info_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Info_2"-------
for thisComponent in Info_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# the Routine "Info_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "exp_start"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
exp_startComponents = [Info, key_resp_2]
for thisComponent in exp_startComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
exp_startClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "exp_start"-------
while continueRoutine:
    # get current time
    t = exp_startClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=exp_startClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Info* updates
    if Info.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Info.frameNStart = frameN  # exact frame index
        Info.tStart = t  # local t and not account for scr refresh
        Info.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Info, 'tStartRefresh')  # time at next scr refresh
        Info.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_startComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "exp_start"-------
for thisComponent in exp_startComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp_start" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practiceTrial"-------
continueRoutine = True
# update component parameters for each repeat
skipPrac.keys = []
skipPrac.rt = []
_skipPrac_allKeys = []
# keep track of which components have finished
practiceTrialComponents = [pracWHNvideo, skipPrac, practice_fixation]
for thisComponent in practiceTrialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practiceTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practiceTrial"-------
while continueRoutine:
    # get current time
    t = practiceTrialClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practiceTrialClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *pracWHNvideo* updates
    if pracWHNvideo.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        pracWHNvideo.frameNStart = frameN  # exact frame index
        pracWHNvideo.tStart = t  # local t and not account for scr refresh
        pracWHNvideo.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(pracWHNvideo, 'tStartRefresh')  # time at next scr refresh
        pracWHNvideo.setAutoDraw(True)
    if pracWHNvideo.status == FINISHED:  # force-end the routine
        continueRoutine = False
    
    # *skipPrac* updates
    if skipPrac.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skipPrac.frameNStart = frameN  # exact frame index
        skipPrac.tStart = t  # local t and not account for scr refresh
        skipPrac.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skipPrac, 'tStartRefresh')  # time at next scr refresh
        skipPrac.status = STARTED
        # keyboard checking is just starting
        skipPrac.clock.reset()  # now t=0
    if skipPrac.status == STARTED:
        theseKeys = skipPrac.getKeys(keyList=['y'], waitRelease=False)
        _skipPrac_allKeys.extend(theseKeys)
        if len(_skipPrac_allKeys):
            skipPrac.keys = _skipPrac_allKeys[-1].name  # just the last key pressed
            skipPrac.rt = _skipPrac_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *practice_fixation* updates
    if practice_fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        practice_fixation.frameNStart = frameN  # exact frame index
        practice_fixation.tStart = t  # local t and not account for scr refresh
        practice_fixation.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(practice_fixation, 'tStartRefresh')  # time at next scr refresh
        practice_fixation.setAutoDraw(True)
    if practice_fixation.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > practice_fixation.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            practice_fixation.tStop = t  # not accounting for scr refresh
            practice_fixation.frameNStop = frameN  # exact frame index
            win.timeOnFlip(practice_fixation, 'tStopRefresh')  # time at next scr refresh
            practice_fixation.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practiceTrialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practiceTrial"-------
for thisComponent in practiceTrialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
pracWHNvideo.stop()
# the Routine "practiceTrial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "pracReponse"-------
continueRoutine = True
# update component parameters for each repeat
prac_resp.keys = []
prac_resp.rt = []
_prac_resp_allKeys = []
# keep track of which components have finished
pracReponseComponents = [pracImage, prac_resp]
for thisComponent in pracReponseComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pracReponseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pracReponse"-------
while continueRoutine:
    # get current time
    t = pracReponseClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pracReponseClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *pracImage* updates
    if pracImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        pracImage.frameNStart = frameN  # exact frame index
        pracImage.tStart = t  # local t and not account for scr refresh
        pracImage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(pracImage, 'tStartRefresh')  # time at next scr refresh
        pracImage.setAutoDraw(True)
    
    # *prac_resp* updates
    if prac_resp.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        prac_resp.frameNStart = frameN  # exact frame index
        prac_resp.tStart = t  # local t and not account for scr refresh
        prac_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(prac_resp, 'tStartRefresh')  # time at next scr refresh
        prac_resp.status = STARTED
        # keyboard checking is just starting
        prac_resp.clock.reset()  # now t=0
        prac_resp.clearEvents(eventType='keyboard')
    if prac_resp.status == STARTED:
        theseKeys = prac_resp.getKeys(keyList=['y', '1', '2', '3', '4'], waitRelease=False)
        _prac_resp_allKeys.extend(theseKeys)
        if len(_prac_resp_allKeys):
            prac_resp.keys = _prac_resp_allKeys[-1].name  # just the last key pressed
            prac_resp.rt = _prac_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pracReponseComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pracReponse"-------
for thisComponent in pracReponseComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "pracReponse" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "end_of_practice"-------
continueRoutine = True
# update component parameters for each repeat
end_of_practice_resp.keys = []
end_of_practice_resp.rt = []
_end_of_practice_resp_allKeys = []
# keep track of which components have finished
end_of_practiceComponents = [practice_end_text, end_of_practice_resp]
for thisComponent in end_of_practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_of_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_of_practice"-------
while continueRoutine:
    # get current time
    t = end_of_practiceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_of_practiceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *practice_end_text* updates
    if practice_end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        practice_end_text.frameNStart = frameN  # exact frame index
        practice_end_text.tStart = t  # local t and not account for scr refresh
        practice_end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(practice_end_text, 'tStartRefresh')  # time at next scr refresh
        practice_end_text.setAutoDraw(True)
    
    # *end_of_practice_resp* updates
    waitOnFlip = False
    if end_of_practice_resp.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        end_of_practice_resp.frameNStart = frameN  # exact frame index
        end_of_practice_resp.tStart = t  # local t and not account for scr refresh
        end_of_practice_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_of_practice_resp, 'tStartRefresh')  # time at next scr refresh
        end_of_practice_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_of_practice_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_of_practice_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_of_practice_resp.status == STARTED and not waitOnFlip:
        theseKeys = end_of_practice_resp.getKeys(keyList=['space'], waitRelease=False)
        _end_of_practice_resp_allKeys.extend(theseKeys)
        if len(_end_of_practice_resp_allKeys):
            end_of_practice_resp.keys = _end_of_practice_resp_allKeys[-1].name  # just the last key pressed
            end_of_practice_resp.rt = _end_of_practice_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_of_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_of_practice"-------
for thisComponent in end_of_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_of_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_3 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('WHNVideoList.xlsx'),
    seed=None, name='trials_3')
thisExp.addLoop(trials_3)  # add the loop to the experiment
thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
if thisTrial_3 != None:
    for paramName in thisTrial_3:
        exec('{} = thisTrial_3[paramName]'.format(paramName))

for thisTrial_3 in trials_3:
    currentLoop = trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            exec('{} = thisTrial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    hazard_video = visual.MovieStim3(
        win=win, name='hazard_video',units='pix', 
        noAudio = False,
        filename=video_file,
        ori=0, pos=(0, 0), opacity=1,
        loop=False,
        size=(1920,1080),
        depth=0.0,
        )
    hazardVideoSkip.keys = []
    hazardVideoSkip.rt = []
    _hazardVideoSkip_allKeys = []
    trialCount += 1
    VidName = (hazard_video.filename)
    #print(VidName)
    # keep track of which components have finished
    trialComponents = [hazard_video, hazardVideoSkip, fixation_cross]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *hazard_video* updates
        if hazard_video.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            hazard_video.frameNStart = frameN  # exact frame index
            hazard_video.tStart = t  # local t and not account for scr refresh
            hazard_video.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(hazard_video, 'tStartRefresh')  # time at next scr refresh
            hazard_video.setAutoDraw(True)
        if hazard_video.status == FINISHED:  # force-end the routine
            continueRoutine = False
        
        # *hazardVideoSkip* updates
        if hazardVideoSkip.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            hazardVideoSkip.frameNStart = frameN  # exact frame index
            hazardVideoSkip.tStart = t  # local t and not account for scr refresh
            hazardVideoSkip.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(hazardVideoSkip, 'tStartRefresh')  # time at next scr refresh
            hazardVideoSkip.status = STARTED
            # keyboard checking is just starting
            hazardVideoSkip.clock.reset()  # now t=0
        if hazardVideoSkip.status == STARTED:
            theseKeys = hazardVideoSkip.getKeys(keyList=['y'], waitRelease=False)
            _hazardVideoSkip_allKeys.extend(theseKeys)
            if len(_hazardVideoSkip_allKeys):
                hazardVideoSkip.keys = _hazardVideoSkip_allKeys[-1].name  # just the last key pressed
                hazardVideoSkip.rt = _hazardVideoSkip_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *fixation_cross* updates
        if fixation_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_cross.frameNStart = frameN  # exact frame index
            fixation_cross.tStart = t  # local t and not account for scr refresh
            fixation_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_cross, 'tStartRefresh')  # time at next scr refresh
            fixation_cross.setAutoDraw(True)
        if fixation_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_cross.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                fixation_cross.tStop = t  # not accounting for scr refresh
                fixation_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_cross, 'tStopRefresh')  # time at next scr refresh
                fixation_cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    hazard_video.stop()
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "response"-------
    continueRoutine = True
    # update component parameters for each repeat
    WHNAnswer_2.setImage(image_file)
    trialrespkey.keys = []
    trialrespkey.rt = []
    _trialrespkey_allKeys = []
    # keep track of which components have finished
    responseComponents = [WHNAnswer_2, trialrespkey]
    for thisComponent in responseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "response"-------
    while continueRoutine:
        # get current time
        t = responseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=responseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *WHNAnswer_2* updates
        if WHNAnswer_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            WHNAnswer_2.frameNStart = frameN  # exact frame index
            WHNAnswer_2.tStart = t  # local t and not account for scr refresh
            WHNAnswer_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(WHNAnswer_2, 'tStartRefresh')  # time at next scr refresh
            WHNAnswer_2.setAutoDraw(True)
        
        # *trialrespkey* updates
        waitOnFlip = False
        if trialrespkey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialrespkey.frameNStart = frameN  # exact frame index
            trialrespkey.tStart = t  # local t and not account for scr refresh
            trialrespkey.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialrespkey, 'tStartRefresh')  # time at next scr refresh
            trialrespkey.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(trialrespkey.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(trialrespkey.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if trialrespkey.status == STARTED and not waitOnFlip:
            theseKeys = trialrespkey.getKeys(keyList=['y', '1', '2', '3', '4'], waitRelease=False)
            _trialrespkey_allKeys.extend(theseKeys)
            if len(_trialrespkey_allKeys):
                trialrespkey.keys = [key.name for key in _trialrespkey_allKeys]  # storing all keys
                trialrespkey.rt = [key.rt for key in _trialrespkey_allKeys]
                # was this correct?
                if (trialrespkey.keys == str(Correct)) or (trialrespkey.keys == Correct):
                    trialrespkey.corr = 1
                else:
                    trialrespkey.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in responseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "response"-------
    for thisComponent in responseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if trialrespkey.keys in ['', [], None]:  # No response was made
        trialrespkey.keys = None
        # was no response the correct answer?!
        if str(Correct).lower() == 'none':
           trialrespkey.corr = 1;  # correct non-response
        else:
           trialrespkey.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_3 (TrialHandler)
    trials_3.addData('trialrespkey.keys',trialrespkey.keys)
    trials_3.addData('trialrespkey.corr', trialrespkey.corr)
    if trialrespkey.keys != None:  # we had a response
        trials_3.addData('trialrespkey.rt', trialrespkey.rt)
    trials_3.addData('trialrespkey.started', trialrespkey.tStartRefresh)
    trials_3.addData('trialrespkey.stopped', trialrespkey.tStopRefresh)
    # the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "break_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    breakresp.keys = []
    breakresp.rt = []
    _breakresp_allKeys = []
    # keep track of which components have finished
    break_2Components = [break_text, breakresp]
    for thisComponent in break_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break_2"-------
    while continueRoutine:
        # get current time
        t = break_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break_text* updates
        if break_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break_text.frameNStart = frameN  # exact frame index
            break_text.tStart = t  # local t and not account for scr refresh
            break_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
            break_text.setAutoDraw(True)
        
        # *breakresp* updates
        waitOnFlip = False
        if breakresp.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            breakresp.frameNStart = frameN  # exact frame index
            breakresp.tStart = t  # local t and not account for scr refresh
            breakresp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(breakresp, 'tStartRefresh')  # time at next scr refresh
            breakresp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(breakresp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(breakresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if breakresp.status == STARTED and not waitOnFlip:
            theseKeys = breakresp.getKeys(keyList=['space'], waitRelease=False)
            _breakresp_allKeys.extend(theseKeys)
            if len(_breakresp_allKeys):
                breakresp.keys = _breakresp_allKeys[-1].name  # just the last key pressed
                breakresp.rt = _breakresp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if trialCount % 10 != 0:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break_2"-------
    for thisComponent in break_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_3.addData('break_text.started', break_text.tStartRefresh)
    trials_3.addData('break_text.stopped', break_text.tStopRefresh)
    # the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_3'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
end_resp.keys = []
end_resp.rt = []
_end_resp_allKeys = []
# keep track of which components have finished
endComponents = [end_text, end_resp]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        end_text.setAutoDraw(True)
    
    # *end_resp* updates
    waitOnFlip = False
    if end_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_resp.frameNStart = frameN  # exact frame index
        end_resp.tStart = t  # local t and not account for scr refresh
        end_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_resp, 'tStartRefresh')  # time at next scr refresh
        end_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_resp.status == STARTED and not waitOnFlip:
        theseKeys = end_resp.getKeys(keyList=['space', 'a'], waitRelease=False)
        _end_resp_allKeys.extend(theseKeys)
        if len(_end_resp_allKeys):
            end_resp.keys = _end_resp_allKeys[-1].name  # just the last key pressed
            end_resp.rt = _end_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if end_resp.keys in ['', [], None]:  # No response was made
    end_resp.keys = None
thisExp.addData('end_resp.keys',end_resp.keys)
if end_resp.keys != None:  # we had a response
    thisExp.addData('end_resp.rt', end_resp.rt)
thisExp.nextEntry()
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
