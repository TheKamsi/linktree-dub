import { socials } from "./data.js"

const socialsList = document.getElementById('socials-list')

document.addEventListener('DOMContentLoaded', renderSocials)

function renderSocials(){
    const renderHtml = socials.map(getSocials).join('')
    socialsList.innerHTML = renderHtml
}

function getSocials(social){
    return `
        <a href="${social.url}" target="_blank"><i class="${social.iconClass}"></i></a>
    `
}