import React from "react";
import Button from './ui/Button';
import { Link } from "react-router-dom";
import {BiTimeFive} from "react-icons/bi";
import { icons } from "react-icons/lib";
function OnlineQuestion() {
  return (
    <div className="w-full m-auto relative" id="online_question">
      <p className="index_title flex justify-center my-5 sm:my-11 text-xl sm:text-3xl">온라인문의</p>
      <div className="mx-8 flex">
        <div className=" float-left  mr-5  sm:mx-20 justify-start  sm:justify-center ">
          <iframe
            title="온라인문의 지도"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3084013027596!2d126.87608934029521!3d37.50064376514793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e0d48acba47%3A0x17a5f69a2a89d439!2z7ISc7Jq47Yq567OE7IucIOq1rOuhnOq1rCDqtazroZzrj5kg6rK97J2466GcNTTquLggNA!5e0!3m2!1sko!2skr!4v1585199542802!5m2!1sko!2skr"
            height="280"
            className=" w-72 sm:w-96"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className=" float-right mb-10"> 
          <ul className="mb-3">
            <li className="mb-5">업무시간 : 09 : 00 - 18 : 00</li>
            <li className="oq_info oq_email mb-5">
              이메일 : cbtcshin@naver.com
            </li>
            <li className="oq_info oq_address mb-5">
              주소 : 서울시 구로구 경인로 54길 4 일번지공구상가 J동105호
            </li>
            <li className="oq_info_half oq_tel mb-5">전화번호 : 02-2637-3437</li>
            <li className="oq_info_half oq_fax mb-5">팩스번호 : 02-2637-3439</li>
          </ul>
            <Link to='/questions'> <Button text={'문의하러가기'}></Button></Link>
        </div>
      </div>
    </div>
  );
}

export default OnlineQuestion;
