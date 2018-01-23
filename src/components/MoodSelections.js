import React, { Component } from 'react';

import './MoodSelections.css';

export default class MoodSelections extends Component {
  render() {
    return(
      <div className='container'>
        <div className='row row-1'>
          <input type='button' className='enraged mood-square' name='enraged' />
          <input type='button' className='panicked mood-square' name='panicked' />
          <input type='button' className='stressed mood-square' name='stressed' />
          <input type='button' className='jittery mood-square' name='jittery' />
          <input type='button' className='shocked mood-square' name='shocked' />
          <input type='button' className='surprised mood-square' name='surprised' />
          <input type='button' className='upbeat mood-square' name='upbeat' />
          <input type='button' className='festive mood-square' name='festive' />
          <input type='button' className='exhilarated mood-square' name='exhilarated' />
          <input type='button' className='ecstatic mood-square' name='ecstatic' />
        </div>
        
        <div className='row row-2'>
          <input type='button' className='livid mood-square' name='livid' />
          <input type='button' className='furious mood-square' name='furious' />
          <input type='button' className='frustrated mood-square' name='frustrated' />
          <input type='button' className='tense mood-square' name='tense' />
          <input type='button' className='stunned mood-square' name='stunned' />
          <input type='button' className='hyper mood-square' name='hyper' />
          <input type='button' className='cheerful mood-square' name='cheerful' />
          <input type='button' className='motivated mood-square' name='motivated' />
          <input type='button' className='inspired mood-square' name='inspired' />
          <input type='button' className='elated mood-square' name='elated' />
        </div>
        
        <div className='row row-3'>
          <input type='button' className='fuming mood-square' name='fuming' />
          <input type='button' className='frightened mood-square' name='frightened' />
          <input type='button' className='angry mood-square' name='angry' />
          <input type='button' className='nervous mood-square' name='nervous' />
          <input type='button' className='restless mood-square' name='restless' />
          <input type='button' className='energized mood-square' name='energized' />
          <input type='button' className='lively mood-square' name='lively' />
          <input type='button' className='enthusiastic mood-square' name='enthusiastic' />
          <input type='button' className='optimistic mood-square' name='optimistic' />
          <input type='button' className='excited mood-square' name='excited' />
        </div>
        
        <div className='row row-4'>
          <input type='button' className='anxious mood-square' name='anxious' />
          <input type='button' className='apprenhensive mood-square' name='apprenhensive' />
          <input type='button' className='worried mood-square' name='worried' />
          <input type='button' className='irrated mood-square' name='irrated' />
          <input type='button' className='annoyed mood-square' name='annoyed' />
          <input type='button' className='pleased mood-square' name='pleased' />
          <input type='button' className='happy mood-square' name='happy' />
          <input type='button' className='focused mood-square' name='focused' />
          <input type='button' className='proud mood-square' name='proud' />
          <input type='button' className='thrilled mood-square' name='thrilled' />
        </div>
        
        <div className='row row-5'>
          <input type='button' className='repulsed mood-square' name='repulsed' />
          <input type='button' className='troubled mood-square' name='troubled' />
          <input type='button' className='concerned mood-square' name='concerned' />
          <input type='button' className='uneasy mood-square' name='uneasy' />
          <input type='button' className='peeved mood-square' name='peeved' />
          <input type='button' className='pleasant mood-square' name='pleasant' />
          <input type='button' className='joyful mood-square' name='joyful' />
          <input type='button' className='hopeful mood-square' name='hopeful' />
          <input type='button' className='playful mood-square' name='playful' />
          <input type='button' className='blissful mood-square' name='blissful' />
        </div>
        
        <div className='row row-6'>
          <input type='button' className='disgusted mood-square' name='disgusted' />
          <input type='button' className='glum mood-square' name='glum' />
          <input type='button' className='disappointed mood-square' name='disappointed' />
          <input type='button' className='down mood-square' name='down' />
          <input type='button' className='apathetic mood-square' name='apathetic' />
          <input type='button' className='at-ease mood-square' name='at-ease' />
          <input type='button' className='easygoing mood-square' name='easygoing' />
          <input type='button' className='content mood-square' name='content' />
          <input type='button' className='loving mood-square' name='loving' />
          <input type='button' className='fulfilled mood-square' name='fulfilled' />
        </div>
        
        <div className='row row-7'>
          <input type='button' className='pessimistic mood-square' name='pessimistic' />
          <input type='button' className='morose mood-square' name='morose' />
          <input type='button' className='discouraged mood-square' name='discouraged' />
          <input type='button' className='sad mood-square' name='sad' />
          <input type='button' className='bored mood-square' name='bored' />
          <input type='button' className='calm mood-square' name='calm' />
          <input type='button' className='secure mood-square' name='secure' />
          <input type='button' className='satisfied mood-square' name='satisfied' />
          <input type='button' className='grateful mood-square' name='grateful' />
          <input type='button' className='touched mood-square' name='touched' />
        </div>

        <div className='row row-8'>
          <input type='button' className='aliented mood-square' name='aliented' />
          <input type='button' className='miserable mood-square' name='miserable' />
          <input type='button' className='lonely mood-square' name='lonely' />
          <input type='button' className='disheartened mood-square' name='disheartened' />
          <input type='button' className='tired mood-square' name='tired' />
          <input type='button' className='relaxed mood-square' name='relaxed' />
          <input type='button' className='chill mood-square' name='chill' />
          <input type='button' className='restful mood-square' name='restful' />
          <input type='button' className='blessed mood-square' name='blessed' />
          <input type='button' className='balanced mood-square' name='balanced' />
        </div>

        <div className='row row-9'>
          <input type='button' className='despondent mood-square' name='despondent' />
          <input type='button' className='depressed mood-square' name='depressed' />
          <input type='button' className='sullen mood-square' name='sullen' />
          <input type='button' className='exhausted mood-square' name='exhausted' />
          <input type='button' className='fatigued mood-square' name='fatigued' />
          <input type='button' className='mellow mood-square' name='mellow' />
          <input type='button' className='thoughtful mood-square' name='thoughtful' />
          <input type='button' className='peaceful mood-square' name='peaceful' />
          <input type='button' className='comfy mood-square' name='comfy' />
          <input type='button' className='carefree mood-square' name='carefree' />
        </div>

        <div className='row row-10'>
          <input type='button' className='despair mood-square' name='despair' />
          <input type='button' className='hopeless mood-square' name='hopeless' />
          <input type='button' className='desolate mood-square' name='desolate' />
          <input type='button' className='spent mood-square' name='spent' />
          <input type='button' className='drained mood-square' name='drained' />
          <input type='button' className='sleepy mood-square' name='sleepy' />
          <input type='button' className='complacent mood-square' name='complacent' />
          <input type='button' className='tranquil mood-square' name='tranquil' />
          <input type='button' className='cozy mood-square' name='cozy' />
          <input type='button' className='serene mood-square' name='serene' />
        </div>

      </div>
    )
  }
}
