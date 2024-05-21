import { ProductAxiosApi, FileAxiosApi } from "@/app/_utils/commons";

const api = ProductAxiosApi();
const fileApi = FileAxiosApi();

async function getSellerProducts(userPk: string) {
  const { data } = await api.get(`/product/seller/${userPk}`);
  console.log(data);
  return data;
}

async function getTimeInfo(date: string) {
  console.log(date);
  const { data } = await api.get(`/product/time/${date}`);
  console.log(data);
  return data;
}

async function postCreateProuct(data: FormData) {
  try {
    await fileApi.post(`/product`, data);
  } catch (error) {
    throw error;
  }
}

async function getOrderDetail(pk: number) {
  const { data } = await api.get(`/order/sales-history/${pk}`);
  console.log(data);
  return data;
}

export { getSellerProducts, getTimeInfo, postCreateProuct, getOrderDetail };
