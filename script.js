const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const dgc = document.getElementById("dogecoin");

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

fetch(url)
  .then(response => response.json())
  .then(data => {
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    dgc.innerHTML = data.dogecoin.usd;
    console.log(data);
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
