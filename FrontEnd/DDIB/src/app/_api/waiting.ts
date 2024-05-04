import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

async function getWaitingList(pk: number) {
  console.log("ddd");
  const { data } = await api.get(`/api/v1/queue/rank?user_id=${pk}`);
  return data;
}

async function listIn(pk: number) {
  console.log("aaaa");
  await api.get(`/api/v1/queue?user_id=${pk}`);
}

export { getWaitingList, listIn };
