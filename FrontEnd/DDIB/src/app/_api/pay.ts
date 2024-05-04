import { PublicAxiosApi } from "@/app/_utils/commons";
import { OrderInfo } from "../_types/types";

const api = PublicAxiosApi();

async function postReady(orderData: OrderInfo) {
  console.log("pay");
  const { data } = await api.post(`/api/payment/ready`, orderData);
  return data;
}

export { postReady };
