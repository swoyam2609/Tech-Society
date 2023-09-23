import React from 'react'
import { useState } from 'react'
import Landing from '../../components/events/landing'
import All from '../../components/events/All'

import EventPic1 from '../../../src/assets/events/ALL/event3.png'
import EventPic2 from '../../../src/assets/events/ALL/event2.png'
import EventPic3 from '../../../src/assets/events/ALL/event3.png'
import EventPic4 from '../../../src/assets/events/ALL/event4.png'
// import BlogCard from '../../components/home/BlogCard'
const all = [
  {
    title: 'WATCH STREAM',
    subject: 'HACKATHON',
    time: '3rd MARCH 2023, 11:00 AM',
    imageUrl:EventPic1
    },
  {
    title: 'GAME RESULTS',
    subject: 'CYBER HUNT',
    time: '3rd MARCH 2023, 2:00 PM',
    imageUrl:EventPic2,
  },
  {
    title: 'WATCH STREAM',
    subject: 'SWING N  CODE',
    time: '2nd MARCH 2023, 3:00 PM',
    imageUrl:EventPic3,
  },
  {
    title: 'GAME RESULTS',
    subject: 'SWITCH CODING',
    time: '4th MARCH 2023, 6:00 PM',
    imageUrl:EventPic4,
  },
]
const recent = [
  {
    title: 'WATCH STREAM',
    subject: 'HACKATHON',
    time: '3rd MARCH 2023, 11:00 AM',
    imageUrl:EventPic1
    },
  {
    title: 'GAME RESULTS',
    subject: 'CYBER HUNT',
    time: '3rd MARCH 2023, 2:00 PM',
    imageUrl:EventPic2,
  },
  {
    title: 'WATCH STREAM',
    subject: 'SWING N  CODE',
    time: '2nd MARCH 2023, 3:00 PM',
    imageUrl:EventPic3,
  },
  {
    title: 'GAME RESULTS',
    subject: 'SWITCH CODING',
    time: '4th MARCH 2023, 6:00 PM',
    imageUrl:EventPic4,
  },
]
const upcoming = [
  {
    title: 'WATCH STREAM',
    subject: 'SWING N  CODE',
    time: '2nd MARCH 2023, 3:00 PM',
    imageUrl:EventPic3,
  },
  {
    title: 'GAME RESULTS',
    subject: 'SWITCH CODING',
    time: '4th MARCH 2023, 6:00 PM',
    imageUrl:EventPic4,
  },
]



function Events() {
  const [currentEvents, setCurrentEvents] = useState(all); // Default to displaying "All" events

  const showAllEvents = () => {
    setCurrentEvents(all);
  };

  const showUpcomingEvents = () => {
    setCurrentEvents(upcoming);
  };

  const showRecentEvents = () => {
    setCurrentEvents(recent);
  };

  return (
    <div>
      <Landing />
      <div className="w-full flex justify-center text-center items-center p-5 bg-standard-bg bg-cover min-h-fit">
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="container mx-auto">
            <div className="container mx-auto">
              {/* Buttons to switch between event types */}
              <div className="my-0 flex flex-wrap justify-start">
                <button
                  className={`${
                    currentEvents === all
                      ? 'bg-blue-500 text-white'
                      : 'bg-black text-gray-700'
                  } hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 w-28 mb-0.5`}
                  onClick={showAllEvents}
                >
                  All Events
                </button>
                <button
                  className={`${
                    currentEvents === upcoming
                      ? 'bg-blue-500 text-white'
                      : 'bg-black text-gray-700'
                  } hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 w-28 mb-0.5`}
                  onClick={showUpcomingEvents}
                >
                  Upcoming
                </button>
                <button
                  className={`${
                    currentEvents === recent
                      ? 'bg-blue-500 text-white'
                      : 'bg-black text-gray-700'
                  } hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 w-28 mb-0.5`}
                  onClick={showRecentEvents}
                >
                  Recent
                </button>
              </div>

              {/* Display the current events */}
              {currentEvents.map((event, index) => (
                <All key={index} {...event} isGray={index % 2 === 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;