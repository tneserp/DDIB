"use client";

import { ChangeEvent, useState, useEffect } from "react";
import styles from "./addressForm.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { orderAddressStore } from "@/app/_store/product";
import { userStore } from "@/app/_store/user";

interface Props {
  type: string;
}

export default function AddressForm({ type }: Props) {
  const [myAddress, setMyAddress] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const { addressInfo } = orderAddressStore();
  const { user } = userStore();

  const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const toggleHandler = () => {
    open({ onComplete: completeHandler });
  };

  const completeHandler = (data: any) => {
    const { address, zonecode } = data;
    setZipCode(zonecode);
    setAddress(address);
  };

  const inputAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  const inputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const inputNum = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getMyAddress = () => {
    setMyAddress((prev) => !prev);
  };

  useEffect(() => {
    if (type === "mypage") {
      setMyAddress(true);
    }
  }, []);

  useEffect(() => console.log("렌더링된다"));

  useEffect(() => {
    if (myAddress) {
      setName(user.name);
      setNum(user.phone);
      setEmail(user.email);
      setZipCode(user.zipCode);
      setAddress(user.roadAddress);
      setAddressDetail(user.detailAddress);
    } else {
      setName("");
      setNum("");
      setEmail("");
      setZipCode("");
      setAddress("");
      setAddressDetail("");
    }
  }, [myAddress]);

  return (
    <div className={styles.main}>
      {type === "order" && (
        <>
          <div className={styles.addressItem}>
            <div>배송지 선택</div>
            <div className={styles.addressCheck} onClick={getMyAddress}>
              {myAddress ? <FaCheckCircle /> : <FaRegCheckCircle color="gray" />}
              <div>기본배송지로 설정</div>
            </div>
          </div>
          <div className={styles.line}></div>
        </>
      )}

      <div className={styles.addressItem}>
        <div>{type === "mypage" ? "이름" : "받으시는 분"}</div>
        <div>{type === "order" || type === "mypage" ? <input type="text" className={styles.input} value={name} onChange={inputName}></input> : <div>{addressInfo.receiverName}</div>}</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.addressItem}>
        <div>휴대폰 번호</div>
        <div>
          {type === "order" || type === "mypage" ? (
            <>
              <input type="text" className={styles.inputNum} value={num} onChange={inputNum}></input>
            </>
          ) : (
            <div>{addressInfo.receiverPhone}</div>
          )}
        </div>
      </div>
      <div className={styles.line}></div>
      {type === "mypage" && (
        <>
          <div className={styles.addressItem}>
            <div>이메일</div>
            <div>
              <input type="text" className={styles.inputNum} value={email} onChange={inputEmail}></input>
            </div>
          </div>
          <div className={styles.line}></div>
        </>
      )}
      <div className={styles.addressItem}>
        <div>주소</div>
        <div className={styles.addressArea}>
          {type === "order" || type === "mypage" ? (
            <>
              <div>
                <input type="text" className={styles.input} value={zipCode} readOnly></input>
                <div onClick={toggleHandler}>우편번호찾기</div>
              </div>
              <div>
                <input type="text" className={styles.inputAddress} value={address} readOnly></input>
                <input type="text" className={styles.inputAddress} value={addressDetail} onChange={inputAddress}></input>
              </div>
            </>
          ) : (
            <>
              <div>({addressInfo.orderZipcode})</div>
              <div>{addressInfo.orderRoadAddress}</div>
              <div>{addressInfo.orderDetailAddress}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
