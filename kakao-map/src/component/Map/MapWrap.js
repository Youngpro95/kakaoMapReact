import React, { useEffect, useRef} from "react";
import Styled from "styled-components";

const { kakao } = window; //스크립트로 kakao map api 를 가져오면 window 전역 객체에 들어감  -> 구조분해 이용
const MapWrap = () => {
  const kakaoDiv = useRef();
  useEffect(() => { //화면이 렌더링 되기 전에는 브라우저의 전역 객체인 window를 인식하지 못하기 때문에 사용
    const options = {
      //map 옵션들
      center: new kakao.maps.LatLng(37.4955, 127.0293), //지도 중심좌표
      level: 3,
    };
    const map = new kakao.maps.Map(kakaoDiv.current, options);
  }, []);

  return (
    <KakaoMap ref={kakaoDiv}/>
  );
};

export default MapWrap;

const KakaoMap = Styled.div`
  margin : 0 auto;
  width: 50%;
  height: calc(100vh - 100px);
`