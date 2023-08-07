import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLinkContent,
  FooterLink,
  FooterDescContainer,
  FooterDescRights
} from './Styled.jsx'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              넷플릭스 소개
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              고객 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              미디어 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              이용 약관
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              자막 및 설정
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              음성 지원
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              기프트카드
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              쿠키 설정
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
                <FooterDescRights>
                    Netflix Rights Reserved.
                </FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}
