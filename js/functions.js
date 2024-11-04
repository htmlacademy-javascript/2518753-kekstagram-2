
function isMeetingWithinWorkHours(startWork, endWork, startMeeting, duration) {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60 + minutes);
  };


  const startWorkM = timeToMinutes(startWork);
  const endWorkM = timeToMinutes(endWork);
  const startMeetingM = timeToMinutes(startMeeting);
  const endMeetingM = startMeetingM + duration;
  return startMeetingM >= startWorkM && endMeetingM <= endWorkM;
}


console.log(isMeetingWithinWorkHours('8:00', '10:00', '8:00', 120));
console.log(isMeetingWithinWorkHours('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkHours('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkHours('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkHours('8:00', '17:30', '08:00', 900));

// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false
