import React from "react";
import styled from "styled-components";

const StyleSocial = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
  }

  margin-top: 20px;

  a.facebook {
    background-image: url("../images/facebook.png");
    width: 60px;
    height: 60px;
  }

  a.twitter {
    background-image: url("../images/twitter.png");
    width: 60px;
    height: 60px;
  }

  a.googleplus {
    background-image: url("../images/google.png");
    width: 60px;
    height: 60px;
  }
`;

function Social() {
  return (
    <StyleSocial>
      <a href="#" className="facebook" />
      <a href="#" className="twitter" />
      <a href="#" className="googleplus" />
    </StyleSocial>
  );
}

export default Social;
