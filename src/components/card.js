import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatDate } from '../filters';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 220px;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const ImgWrapper = styled('div')``;

const TalkDescription = styled('span')`
  font-style: italic;
  word-wrap: break-word;
  width: 345px;
  align-self: center;
  margin-bottom: 0.5rem;
`;

const TalkTitle = styled('span')`
  width: 300px;
  align-self: center;
  font-size: 28px;
  font-weight: 300;
  padding-bottom: 0.45rem;
`;

const TalkLink = styled('a')`
  color: #cb067a;
`;

const Tag = styled('span')`
  background-color: ${props =>
    props.type === 'meetup' ? '#db0606' : '#ddaa03'};
  color: #fff;
  font-size: 10px;
  height: 12px;
  align-self: center;
  padding: 0.2rem;
  margin: 0 0.5rem;
`;

const EventInfo = styled('div')`
  padding: 0.25rem 0;
  white-space: wrap;
  margin: 0.25rem 0;
`;

const EventDetail = ({ event }) => {
  const { eventDate, eventName, eventType } = event;
  return (
    <EventInfo>
      <Tag type={eventType}>{eventType.toUpperCase()}</Tag>
      <span>
        {eventName} －{formatDate(eventDate)}
      </span>
    </EventInfo>
  );
};

const Card = ({ talk }) => (
  <CardWrapper>
    <TalkTitle>{talk.title}</TalkTitle>
    <TalkDescription>{talk.description}</TalkDescription>
    {talk.previewImg && (
      <ImgWrapper>
        <img src={talk.previewImg} alt={`${talk.title} slide preview`} />
      </ImgWrapper>
    )}

    {talk.event.length > 1 ? (
      talk.event.map(e => <EventDetail event={e} key={e.eventDate} />)
    ) : (
      <EventDetail event={talk.event[0]} />
    )}

    {talk.hostedSlidesUrl && (
      <TalkLink
        href={talk.hostedSlidesUrl}
        title={`Link to live hosted slides for ${talk.title}`}
      >
        <span role="img" aria-label="Click to visit the slides">
          💻 → Check out the slides
        </span>
      </TalkLink>
    )}

    {talk.recordedPresentationUrl && (
      <TalkLink
        href={talk.recordedPresentationUrl}
        title={`Link to a recording of ${talk.title}`}
      >
        <span role="img" aria-label="Click to watch the recorded presentation">
          📹 → Watch a recording of the presentation
        </span>
      </TalkLink>
    )}
  </CardWrapper>
);

Card.propTypes = {
  talk: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    event: PropTypes.arrayOf(
      PropTypes.shape({
        eventDate: PropTypes.string.isRequired,
        eventName: PropTypes.string,
        eventType: PropTypes.string
      })
    ).isRequired,
    exportedSlidesUrl: PropTypes.string.isRequired,
    hostedSlidesUrl: PropTypes.string.isRequired,
    previewImg: PropTypes.string,
    recordedPresentationUrl: PropTypes.string
  })
};

export default Card;
