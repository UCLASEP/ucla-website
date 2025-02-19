/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  MARGINS,
  HEADER_FONT_SIZES,
  BLACK,
  GREY40,
} from '../../../styles/global';

import MemberPhoto from '../../generic/MemberPhoto';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${MARGINS.s};
`;

const Name = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: bold;
  color: ${BLACK};
  margin: 4px 0px;
  letter-spacing: -1px;

  @media (max-width: 450px) {
    font-size: 16px;
    letter-spacing: -1px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${MARGINS.s};
`;

const Class = styled.div`
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 10px;
  color: ${GREY40};

  @media (max-width: 450px) {
    font-size: 8px;
  }
`;

const Major = styled.div`
  font-size: 12px;
  color: ${GREY40};
`;

const Minor = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${GREY40};
`;

const MemberLayout = ({member}) => (
  <Container>
    <MemberPhoto
      name={`${member.firstname} ${member.lastname}`}
      notPictured={member.notPictured}
    />
    <TextContainer>
      <Class>{member.class} Class {member.pronouns ? `| ${member.pronouns}` : ''}</Class>
      <Name>
        {member.firstname} {member.lastname}
      </Name>
      <Major>{member.major}</Major>
      <Minor>{member.minor ? `Minor: ${member.minor}` : ''}</Minor>
    </TextContainer>
  </Container>
);

MemberLayout.propTypes = {
  // TODO: move this out into its own object in constants
  member: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pronouns: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    minor: PropTypes.string.isRequired,
    notPictured: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MemberLayout;
