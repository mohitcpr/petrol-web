import { getAllPetrol, addPetrol } from "../apis/api";

export async function getAllList(loginType, loginId) {
  try {
    return await getAllPetrol(loginType, loginId);
  } catch (e) {
    console.error("fetching error to get all list", e);
    throw e;
  }
}

export async function addData(data, loginType) {
  try {
    return await addPetrol(data, loginType);
  } catch (e) {
    console.error("fetching error to get all list", e);
    throw e;
  }
}
