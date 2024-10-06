import moment from 'moment';

export const formatDate = (dateString, format = 'YYYY-MM-DD') => {
  return moment(dateString).format(format);
};

export const dateDisplay = (date) => {
  const dateMoment = moment(date);
  
  const minutesDiff = moment().diff(dateMoment, 'minutes');
  const hoursDiff = moment().diff(dateMoment, 'hours');
  const dayDiff = moment().diff(dateMoment, 'days');

  if (dayDiff > 30) {
    return dateMoment.format('YYYY-MM-DD');
  }
  
  if (minutesDiff < 60) {
    return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
  }
  
  if (hoursDiff < 24) {
    return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
  }

  return `${dayDiff} day${dayDiff !== 1 ? 's' : ''} ago`;
};