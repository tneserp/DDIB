import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

async function putAlarmOn(userPk: number) {
  console.log("pay");
  const { data } = await api.post(`/api/notification/subscribe/${userPk}`);
  return data;
}

async function putAlarmOff(userPk: number) {
  const { data } = await api.post(
    `/api/notification/subscribe/cancel/${userPk}`
  );
}

async function getAlarmList(userPk: number) {
  const { data } = await api.get(`/api/notification/${userPk}`);
  console.log(data);
  return data;
}

export { putAlarmOn, putAlarmOff, getAlarmList };
