import axios from "axios";
import { API_URL } from "../constants/api";

export function getAllPetrol(loginType, loginId) {
  return new Promise(async (resolve, reject) => {
    let apiRes = null;
    try {
      apiRes = await axios.get(`${API_URL}/petrol/${loginType}/${loginId}`);
    } catch (err) {
      apiRes = err.response;
    } finally {
      if (apiRes.data.success) {
        resolve(apiRes.data.data);
      } else {
        reject(apiRes.data.message);
      }
    }
  });
}

export function addPetrol(body, loginType) {
  return new Promise(async (resolve, reject) => {
    let apiRes = null;
    try {
      apiRes = await axios.post(`${API_URL}/petrol/${loginType}`, body);
    } catch (err) {
      apiRes = err.response;
    } finally {
      if (apiRes.data.success) {
        resolve(apiRes.data.message);
      } else {
        reject(apiRes.data.message);
      }
    }
  });
}
