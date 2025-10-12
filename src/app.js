import brawl from './brawl.json'
import brawlTemplate from './brawl-template.hbs'
const listRev = document.querySelector(".list-brawl")
console.log(listRev);

listRev.innerHTML = brawlTemplate({brawl})