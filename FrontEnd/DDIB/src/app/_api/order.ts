import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

async function getOrderDetail(orderId: string) {
  console.log("orderDetail");
  const { data } = await api.get(`/api/order/${orderId}`);
  console.log(data);
  return data;
}

async function getOrderList() {
  const { data } = await api.get(`/api/order`);
  console.log(data);
  return data;
}

export { getOrderDetail, getOrderList };
