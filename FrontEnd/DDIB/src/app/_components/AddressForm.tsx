"use client";

import { ChangeEvent, useState } from "react";
import styles from "./addressForm.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { orderAddressStore } from "@/app/_store/product";

interface Props {
  type: string;
}

export default function AddressForm({ type }: Props) {
  const [useMyAddress, setUseMyAddress] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const { addressInfo } = orderAddressStore();

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

  return (
    <div className={styles.main}>
      {type === "order" && (
        <>
          <div className={styles.addressItem}>
            <div>배송지 선택</div>
            <div className={styles.addressCheck} onClick={() => setUseMyAddress((prev) => !prev)}>
              {useMyAddress ? <FaCheckCircle /> : <FaRegCheckCircle color="gray" />}
              <div>기본배송지로 설정</div>
            </div>
          </div>
          <div className={styles.line}></div>
        </>
      )}

      <div className={styles.addressItem}>
        <div>받으시는 분</div>
        <div>{type === "order" ? <input type="text" className={styles.input}></input> : <div>{addressInfo.receiverName}</div>}</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.addressItem}>
        <div>휴대폰 번호</div>
        <div>
          {type === "order" ? (
            <>
              <input type="number" className={styles.inputNum}></input>
              <input type="number" className={styles.inputNum}></input>
              <input type="number" className={styles.inputNum}></input>
            </>
          ) : (
            <div>{addressInfo.receiverPhone}</div>
          )}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.addressItem}>
        <div>주소</div>
        <div className={styles.addressArea}>
          {type === "order" ? (
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
