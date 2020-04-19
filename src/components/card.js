import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 260px;
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

const Card = ({ talk }) => (
  <CardWrapper>
    <TalkTitle>{talk.title}</TalkTitle>
    <TalkDescription>{talk.description}</TalkDescription>
    {talk.previewImg && (
      <ImgWrapper>
        <img src={talk.previewImg} alt={`${talk.title} slide preview`} />
      </ImgWrapper>
    )}
    <EventInfo>
      <span style={{ paddingRight: '1rem' }}>{talk.eventName}</span>
      <span>{talk.eventDate}</span>
    </EventInfo>
    <a
      href={talk.hostedSlidesUrl}
      title={`Link to live hosted slides for ${talk.title}`}
    >
      <span role="img" aria-label="Click to visit the slides">
        💻 → Check out the slides
      </span>
    </a>
    {talk.recordedPresentationUrl && (
      <a
        href={talk.recordedPresentationUrl}
        title={`Link to a recording of ${talk.title}`}
      >
        <span role="img" aria-label="Click to watch the recorded presentation">
          📹 → Watch a recording of the presentation
        </span>
      </a>
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
