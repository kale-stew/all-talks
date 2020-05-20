import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatDate } from '../filters';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 260px;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const EventInfo = styled('div')`
  padding: 2rem 0;
`;

const ImgWrapper = styled('div')``;

const TalkDescription = styled('span')`
  font-style: italic;
  word-wrap: break-word;
  width: 345px;
  align-self: center;
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

// TODO - make these interchangeable
// <Tag type={talk.eventType} />
// background-color: type === 'meetup' ? #db0606 : #ddaa03;
const MeetupTag = styled('span')`
  background-color: #db0606;
  color: #fff;
  font-size: 10px;
  height: 12px;
  align-self: center;
  padding: 0.2rem;
  margin-top: 0.6rem;
`;

const ConferenceTag = styled('span')`
  background-color: #ddaa03;
  color: #fff;
  font-size: 10px;
  height: 12px;
  align-self: center;
  padding: 0.2rem;
  margin-top: 0.6rem;
`;

const Card = ({ talk }) => (
  <CardWrapper>
    <TalkTitle>{talk.title}</TalkTitle>
    <TalkDescription>{talk.description}</TalkDescription>
    {talk.previewImg && (
      <ImgWrapper>
        <img src={talk.previewImg} alt={`${talk.title} slide preview`} />
      </ImgWrapper>
    )}
    {talk.eventType === 'meetup' ? (
      <MeetupTag>MEETUP</MeetupTag>
    ) : (
      <ConferenceTag>CONFERENCE</ConferenceTag>
    )}
    <EventInfo>
      <span>{talk.eventName} － </span>
      <span>{formatDate(talk.eventDate)}</span>
    </EventInfo>
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
    eventDate: PropTypes.string.isRequired,
    eventName: PropTypes.string,
    eventType: PropTypes.string,
    exportedSlidesUrl: PropTypes.string.isRequired,
    hostedSlidesUrl: PropTypes.string.isRequired,
    previewImg: PropTypes.string,
    recordedPresentationUrl: PropTypes.string
  })
};

export default Card;
