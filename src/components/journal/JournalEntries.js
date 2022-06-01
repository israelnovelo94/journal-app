import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = ({notes = []}) => {

    const entries = notes;

  return (
    <div className='journal__entries'>

        {
            entries.map( value => 
                <JournalEntry key={value.id} id={value.id} />
            )
        }
        
    </div>
  )
}
