import { SERVER_API } from "../../constants/index";

async function getData(item) {
  const response = await fetch(SERVER_API + item, {
    method: "GET",
  });

  // const response = await fetch("https://.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74", {
  //   method: "GET",
  // });
  const data = await response.json();
  return data;
}

export async function getLaptops() {
  return getData("/laptops");
}

export async function getPhones() {
  return getData("/phones");
}

export async function getHeadphones() {
  return getData("/headphones");
}

export async function getMonitors() {
  return getData("/monitors");
}

export async function getWatches() {
  return getData("/watches");
}
