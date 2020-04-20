// A → Z
const orderByTitleAsc = talks => {
  return (
    talks &&
    talks.sort((a, b) => {
      const first = a.title.toUpperCase();
      const second = b.title.toUpperCase();
      return first < second ? -1 : first > second ? 1 : 0;
    })
  );
};

// Z → A
const orderByTitleDesc = talks => {
  return (
    talks &&
    talks.sort((a, b) => {
      const first = a.title.toUpperCase();
      const second = b.title.toUpperCase();
      return first > second ? -1 : first < second ? 1 : 0;
    })
  );
};

const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

export const formatDate = date => {
  const arr = date.split('/');
  return `${MONTHS[arr[0]]} ${arr[1]}, ${arr[2]}`;
};

// Now → Then
const orderByDateAsc = talks => {
  return (
    talks &&
    talks.sort((a, b) => {
      const first = new Date(a.eventDate);
      const second = new Date(b.eventDate);
      return first > second ? -1 : first < second ? 1 : 0;
    })
  );
};

// Then → Now
const orderByDateDesc = talks => {
  return (
    talks &&
    talks.sort((a, b) => {
      const first = new Date(a.eventDate);
      const second = new Date(b.eventDate);
      return first < second ? -1 : first > second ? 1 : 0;
    })
  );
};

const fetchConferences = talks => {
  return talks && talks.filter(talk => talk.eventType === 'conference');
};

const fetchMeetups = talks => {
  return talks && talks.filter(talk => talk.eventType === 'meetup');
};

export const FILTERS = [
  { name: 'Sort by Date (Newest First)', function: orderByDateAsc },
  { name: 'Sort by Date (Oldest First)', function: orderByDateDesc },
  { name: 'Sort by Title (A → Z)', function: orderByTitleAsc },
  { name: 'Sort by Title (Z → A)', function: orderByTitleDesc },
  { name: 'Show all Meetup talks', function: fetchMeetups },
  { name: 'Show all Conference talks', function: fetchConferences }
];
