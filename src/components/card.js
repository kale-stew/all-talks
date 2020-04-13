import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const EventInfo = styled('div')`
  padding: 2rem 0;
`;

const ImgWrapper = styled('div')``;

const TalkDescription = styled('span')``;

const TalkTitle = styled('span')``;

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
      href={talk.exportedSlidesUrl}
      title={`Link to exported slides for ${talk.title}`}
    >
      <span>See a PDF of slides</span>
    </a>
    <a
      href={talk.hostedSlidesUrl}
      title={`Link to exported slides for ${talk.title}`}
    >
      <span>See the live slides</span>
    </a>
    {talk.recordedPresentationUrl && (
      <a
        href={talk.recordedPresentationUrl}
        title={`Link to exported slides for ${talk.title}`}
      >
        <span>See a recording of the presentation</span>
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
