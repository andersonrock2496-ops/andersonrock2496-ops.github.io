"use strict";

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#nav-links");
const navigationLinks = document.querySelectorAll("#nav-links a");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear().toString();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation?.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
});

const GITHUB_USER = "andersonrock2496-ops";

async function carregarProjetos() {
  const container = document.getElementById("github-projects");
  if (!container) return;

  try {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`;

    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("GitHub indisponível");

    const repositorios = await resposta.json();

    const projetos = repositorios.filter(repo =>
      !repo.fork &&
      !repo.archived &&
      repo.name !== `${GITHUB_USER}.github.io` &&
      repo.topics.includes("portfolio")
    );

    container.replaceChildren();

    for (const repo of projetos) {
      const card = document.createElement("article");
      card.className = "project-card";

      const titulo = document.createElement("h3");
      titulo.textContent = repo.name.replaceAll("-", " ");

      const descricao = document.createElement("p");
      descricao.textContent =
        repo.description || "Projeto disponível no GitHub.";

      const linguagem = document.createElement("span");
      linguagem.textContent = repo.language || "Multitecnologia";

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Ver projeto no GitHub";

      card.append(titulo, descricao, linguagem, link);
      container.appendChild(card);
    }
  } catch (erro) {
    container.textContent =
      "Não foi possível carregar os projetos agora.";
    console.error(erro);
  }
}

document.addEventListener("DOMContentLoaded", carregarProjetos);
