import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export const JournalEntry = ({id, title, body, date}) => {

    const noteDate = moment(date);
    // console.log(noteDate);

    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd').charAt(0).toUpperCase() + noteDate.format('dddd').slice(1)}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>

        </div>
    )
}
