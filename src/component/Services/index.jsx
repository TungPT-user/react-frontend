import { SERVER_API } from "../../constants/index";

export async function getProducts() {
  const response = await fetch(SERVER_API + "/laptops", {
    method: "GET",
  });

  // const response = await fetch("https://.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74", {
  //   method: "GET",
  // });
  const data = await response.json();
  return data;
}
