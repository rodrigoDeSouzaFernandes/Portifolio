
const summary = () => {
    const aboutme = document.getElementById('about-me');
    aboutme.addEventListener('click', () => {
        window.location.href = '#about-me-here';
    });
    const projects = document.getElementById('projetos');
    projects.addEventListener('click', () => {
        window.location.href = '#projetos-here';
    });
    const contact = document.getElementById('contato');
    contact.addEventListener('click', () => {
        window.location.href = '#contato-here';
    });
}
const linkProjects = () => {
    const pixelsArt = document.querySelector('.pixels-art');
    const shoppingCart = document.querySelector('.shopping-cart');
    const todolist = document.querySelector('.project-todolist');
    const memeGenerator = document.querySelector('.meme-generator');

    pixelsArt.addEventListener('click', () => {
        window.location.href = 'https://rodrigodesouzafernandes.github.io/pixels-art/';
    });
    shoppingCart.addEventListener('click', () => {
        window.location.href = 'https://rodrigodesouzafernandes.github.io/shopping-cart-project/'
    });
    todolist.addEventListener('click', () => {
        window.location.href = 'https://rodrigodesouzafernandes.github.io/project-to-do-list/'
    });
    memeGenerator.addEventListener('click', () => {
        window.location.href = 'https://rodrigodesouzafernandes.github.io/project-meme-generator/'
    });
}
const social = () => {
    const linkedin = document.getElementById('linkedin');
    const instagram = document.getElementById('instagram');
    const github = document.getElementById('github');
    linkedin.addEventListener('click', () => {
        window.location.href = 'https://linkedin.com/in/rodrigo-de-souza-fernandes-23348810a'
    });
    instagram.addEventListener('click', () => {
        window.location.href = 'https://www.instagram.com/rodrigo.fernandes95/'
    });
    github.addEventListener('click', () => {
        window.location.href = 'https://github.com/rodrigoDeSouzaFernandes'
    });
}


window.onload = 
summary(),
linkProjects(),
social();

