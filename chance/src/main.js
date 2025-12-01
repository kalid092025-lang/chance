import './style.css'
import Chance from "chance";
import { faker } from "@faker-js/faker";
import { Generetestartup } from './startup';



const btn = document.getElementById('generatebtn');
const displayDiv = document.getElementById('StartUpDislpay');

function displayStartup() {
  const startup = Generetestartup();
  displayDiv.innerHTML = `
    <h2>${startup.name}</h2>
    <p><strong>Description:</strong> ${startup.description}</p>
    <p><strong>Founder:</strong> ${startup.founder}</p>
    <p><strong>Founded Year:</strong> ${startup.foundedYear}</p>
    <p><strong>Location:</strong> ${startup.location}</p>
    <p><strong>Website:</strong> <a href="http://${startup.website}" target="_blank">${startup.website}</a></p>
    <p><strong>Tagline:</strong> ${startup.tagline}</p>
    <img src="${startup.avatar}" alt="Founder Avatar" />
  `;
}

btn.addEventListener('click', () => {
  
  displayStartup()
  ;
});