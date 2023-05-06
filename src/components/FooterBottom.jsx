import React from 'react';

function FooterBottom(props) {
  return (
    <div className="bg-gray-800 text-white py-5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="http://r685.realserver2.com/theme/basic/img/ft_logo.png"
              alt=""
              className="w-32 mb-4"
            />
            <p className="text-sm md:text-base">
              본 사 : 서울시 구로구 경인로54길 4 일번지공구상가 J동 105호
            </p>
            <p className="text-sm md:text-base">
              평택지점 : 경기도 평택시 청북면 청북중앙로 45
            </p>
          </div>
          <ul className="text-xs md:text-sm text-center md:text-right">
            <li>업체명 : 청북베어링상사 ㅣ 대표자 : 신문호</li>
            <li>사업자등록번호 : 113-22-77845</li>
            <li>대표번호 : 02-2637-3437</li>
            <li>FAX : 02-2637-3439</li>
            <li>이메일 : cbtcshin@naver.com</li>
            <li>업무시간 : 09:00~18:00</li>
          </ul>
        </div>
        <p className="text-center mt-5 text-xs md:text-sm">
          Copyright © 청북베어링상사 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterBottom;