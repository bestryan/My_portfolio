import { projects } from "./data.js";

const myContent = document.querySelector(".Content")

const showInHtml = projects.map((project) => {
    return `
        <div class="proj_text_box w-[580px]">
            <h2 class="text-xl font-bold">${project.title}</h2>
            <h3 class="font-bold">${project.tools}</h3>
            <p>${project.description}</p>
            <div class="launch">
                <a href=${project.code} target="_blank"><h4 class="font-semibold">Code</h4></a>
                <a href=${project.code} target="_blank"><img src="/images/code_icon.svg"></a>
                ${project.demo.length > 0 ? ('<a href='+project.demo+' target="_blank"><h4 class="demo font-semibold">Live Demo</h4></a> <a href='+project.demo+ ' target="_blank"><img src="/images/launch_icon.svg"></a>') : '<p></p>'}
            </div>
            <img class="py-4" src=${project.photo} alt="img"/>
        </div>
    `
}).join('');

myContent.innerHTML = showInHtml;