import { ClientAxiosApi } from "@/app/_utils/commons";
import { userStore } from "@/app/_store/user";

const api = ClientAxiosApi();
const { user } = userStore();

async function getWaitingList() {
  const { data } = await api.get(`/api/vi/queue/rand?user_id=${user.userPk}`);
  return data;
}

export { getWaitingList };
