import { AlarmApply } from "@/app/_types/types";
import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

async function putAlarmOn(userPk: string, info: AlarmApply) {
  console.log("pay");
  const { data } = await api.post(
    `/api/notification/subscribe/${userPk}`,
    info
  );
  return data;
}

async function putAlarmOff(userPk: string) {
  const { data } = await api.post(
    `/api/notification/subscribe/cancel/${userPk}`
  );
}

async function getAlarmList(userPk: string) {
  const { data } = await api.get(`/api/notification/${userPk}`);
  console.log(data);
  return data;
}

export { putAlarmOn, putAlarmOff, getAlarmList };
