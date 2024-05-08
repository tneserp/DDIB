import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

async function getWaitingList(pk: number) {
  console.log("ddd");
  const { data } = await api.get(`/api/v1/queue/rank?user_id=1`);
  return data;
}

async function test(pk: number) {
  console.log("aaaa");
  await api.get(`/api/v1/queue?user_id=2`);
  await api.get(`/api/v1/queue?user_id=3`);
  await api.get(`/api/v1/queue?user_id=4`);
}

async function listIn(pk: number) {
  console.log("bbbb");
  await api.get(`/api/v1/queue?user_id=1`);
}

export { getWaitingList, test, listIn };
