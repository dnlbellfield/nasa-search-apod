// Your API key for Dnlbellfield@gmail.com is:  cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa

// ex https://api.nasa.gov/EPIC/api/natural/images?api_key=cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa

// https://api.nasa.gov/planetary/apod?api_key=cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa
// https://api.nasa.gov/planetary/apod
const apodBtn = document.querySelector('.btn');
// const neoBtn = document.querySelector('.btn-neo');



async function getApod() {
  const date = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa&date=${date}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json()
  console.log(data);

  document.querySelector('img').src = data.hdurl;
  document.querySelector('h3').innerText = data.explanation;
  date.innerText ="";


}

// async function getNeo() {
//   const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=cYHfe95lZaojXTRkycOfu3dCqkMhPyuKYr2LhMYa');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json()
//   console.log(data);

//   // document.querySelector('img').src = data.hdurl;
//   // document.querySelector('h3').innerText = data.explanation;


// }
apodBtn.addEventListener('click',getApod);
// neoBtn.addEventListener('click',getNeo);


