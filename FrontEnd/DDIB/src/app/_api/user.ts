import { ClientAxiosApi } from "@/app/_utils/commons";

const api = ClientAxiosApi();

// 일반회원 정보 조회
async function getUserInfo() {
  console.log("ddd");
  const { data } = await api.get(`/api/user`);
  return data;
}

// 일반회원 정보 수정
async function putUserInfo() {
  const { data } = await api.get(`/api/user`);
  return data;
}

// 일반회원로그아웃
async function postUser() {
  const { data } = await api.post(`/api/user/logout`);
  return data;
}

// 일반회원탈퇴
async function deleteUser() {
  await api.delete(`api/user`);
}

export { getUserInfo, putUserInfo, postUser, deleteUser };
