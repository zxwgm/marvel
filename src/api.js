import qs from "qs";
import xml2js from "react-native-xml2js";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

export async function apiGetMunhwa() {
  try {
    let data;
    const xmlData = await fetch("https://www.cha.go.kr/main.html").then((res) => res.text())

    xml2js.parseString(xmlData, (err, result) => {
      if(err !== null) {
        console.log(err)
        return
      }
      data = result
    })
    return data;
  }catch(error) {
    console.log(error);
  }
}

// [GET] Comics 리스트
export async function apiGetComics({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(`${BASE_URL}/comics?limit=${limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// [GET] Events 리스트
export async function apiGetEvents({ pageParam }) {
  console.log(pageParam);
  const offset = pageParam * 10;
  return await fetch(
    `${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
}

// [GET] Characters 리스트
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(
      `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// params: id
// [GET] Characters Detail
export async function apiGetCharacterDetail({ queryKey }) {
  const id = queryKey[1].id;
  try {
    return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiPostEmail(data) {
  try {
    return await fetch(
      "https://script.google.com/macros/s/AKfycbxTfW8eHeM_vNjGAPPhjlyskqwHSuKGq_Cs8IZ7Yy2DSbfrCsn5h5akI77nHQ1g1lVb/exec",
      {
        method: "post",
        headers: {
          "Content-Type": `application/x-www-form-urlencoded`,
        },

        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
