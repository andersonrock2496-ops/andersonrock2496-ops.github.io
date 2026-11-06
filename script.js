"use strict";

const GITHUB_USER = "andersonrock2496-ops";
const UI = {
  pt: {
    pageTitle: "Anderson Rocha | Operações Industriais & Tecnologia", navAria: "Navegação principal", menuAria: "Abrir menu",
    navAbout: "Sobre", navExpertise: "Competências", navProjects: "Projetos", navCertifications: "Certificações", navContact: "Contato",
    heroEyebrow: "Operações Industriais · Tecnologia · Dados · Geotecnologias", heroTitle: "Conecto operações industriais com tecnologia, automação e dados.",
    heroDescription: "Profissional com trajetória em liderança técnica, sistemas elétricos, instrumentação, manutenção industrial, inspeção, tratamento de água e coordenação de equipes multidisciplinares.",
    viewProjects: "Ver projetos", downloadCv: "Baixar CV (PDF em inglês)", aboutLabel: "Perfil profissional",
    aboutTitle: "Experiência em operações. Evolução contínua pela tecnologia.",
    aboutText: "Atuo desde 2006 em funções técnicas e de liderança ligadas a operações industriais, manutenção, segurança, qualidade e execução de projetos. Estudo Ciências da Computação e Agronomia e aplico Python, Linux, cibersegurança, QGIS e Google Earth Engine a problemas operacionais.",
    expertiseLabel: "Competências principais", expertiseTitle: "Experiência técnica multidisciplinar",
    skill1Title: "Liderança e operações", skill1Text: "Coordenação de equipes, planejamento, segurança, produtividade, controle de qualidade, documentação técnica e operações críticas.",
    skill2Title: "Elétrica e instrumentação", skill2Text: "Sistemas elétricos industriais, instrumentação, automação, fundamentos de CLP, diagnóstico de falhas e manutenção.",
    skill3Title: "Integridade industrial", skill3Text: "Inspeção de equipamentos, medição de espessura por ultrassom, estruturas metálicas, corrosão, pintura industrial e relatórios técnicos.",
    skill4Title: "Água e meio ambiente", skill4Text: "Estações de tratamento de água e efluentes, instalação de equipamentos, sistemas em fibra de vidro, monitoramento e processos ambientais.",
    skill5Title: "Tecnologia e automação", skill5Text: "Automação com Python, Linux, linha de comando, processamento de dados estruturados, relatórios e integração de sistemas.",
    skill6Title: "SIG e sensoriamento remoto", skill6Text: "QGIS, Google Earth Engine, Sentinel-2, NDVI, coordenadas, análise espacial e processamento de dados geográficos.",
    projectsLabel: "Projetos no GitHub", projectsTitle: "Projetos publicados e atualizados automaticamente",
    projectsIntro: "Esta seção consulta meus repositórios públicos no GitHub. Os projetos são ordenados pela atualização mais recente.",
    loading: "Carregando projetos...", empty: "Nenhum repositório público encontrado.",
    error: "Não foi possível consultar o GitHub agora. Você pode acessar meus repositórios diretamente pelo link abaixo.",
    errorLink: "Abrir GitHub", noDescription: "Descrição ainda não cadastrada no GitHub.",
    language: "Linguagem", updated: "Atualizado", viewRepo: "Ver repositório", viewDemo: "Ver demonstração",
    certLabel: "Certificações e formação", certTitle: "Desenvolvimento técnico contínuo", certIt: "Cibersegurança e TI", certGeo: "Dados e geotecnologias", certIndustrial: "Treinamento industrial e técnico",
    mechatronics: "Técnico em Mecatrônica", electrical: "Eletrotécnica e Automação Industrial", inspection: "Inspeção de Equipamentos e Medição de Espessura por Ultrassom",
    contactLabel: "Contato", contactTitle: "Vamos conectar operações, tecnologia e dados.",
    contactText: "Aberto a oportunidades em tecnologia industrial, TI, infraestrutura, automação, cibersegurança e transformação digital.", email: "E-mail"
  },
  es: {
    pageTitle: "Anderson Rocha | Operaciones Industriales y Tecnología", navAria: "Navegación principal", menuAria: "Abrir menú",
    navAbout: "Sobre mí", navExpertise: "Competencias", navProjects: "Proyectos", navCertifications: "Certificaciones", navContact: "Contacto",
    heroEyebrow: "Operaciones Industriales · Tecnología · Datos · Geotecnologías", heroTitle: "Conecto las operaciones industriales con la tecnología, la automatización y los datos.",
    heroDescription: "Profesional con trayectoria en liderazgo técnico, sistemas eléctricos, instrumentación, mantenimiento industrial, inspección, tratamiento de agua y coordinación de equipos multidisciplinarios.",
    viewProjects: "Ver proyectos", downloadCv: "Descargar CV (PDF en inglés)", aboutLabel: "Perfil profesional",
    aboutTitle: "Experiencia en operaciones. Evolución continua mediante la tecnología.",
    aboutText: "Desde 2006 desempeño funciones técnicas y de liderazgo en operaciones industriales, mantenimiento, seguridad, calidad y ejecución de proyectos. Estudio Ciencias de la Computación y Agronomía, y aplico Python, Linux, ciberseguridad, QGIS y Google Earth Engine a desafíos operativos.",
    expertiseLabel: "Competencias principales", expertiseTitle: "Experiencia técnica multidisciplinaria",
    skill1Title: "Liderazgo y operaciones", skill1Text: "Coordinación de equipos, planificación, seguridad, productividad, control de calidad, documentación técnica y operaciones críticas.",
    skill2Title: "Electricidad e instrumentación", skill2Text: "Sistemas eléctricos industriales, instrumentación, automatización, fundamentos de PLC, diagnóstico de fallas y mantenimiento.",
    skill3Title: "Integridad industrial", skill3Text: "Inspección de equipos, medición de espesores por ultrasonido, estructuras metálicas, corrosión, pintura industrial e informes técnicos.",
    skill4Title: "Agua y medioambiente", skill4Text: "Plantas de tratamiento de agua y efluentes, instalación de equipos, sistemas de fibra de vidrio, monitoreo y procesos ambientales.",
    skill5Title: "Tecnología y automatización", skill5Text: "Automatización con Python, Linux, línea de comandos, procesamiento de datos estructurados, informes e integración de sistemas.",
    skill6Title: "SIG y teledetección", skill6Text: "QGIS, Google Earth Engine, Sentinel-2, NDVI, coordenadas, análisis espacial y procesamiento de datos geográficos.",
    projectsLabel: "Proyectos en GitHub", projectsTitle: "Proyectos publicados y actualizados automáticamente",
    projectsIntro: "Esta sección consulta mis repositorios públicos en GitHub. Los proyectos se ordenan por su actualización más reciente.",
    loading: "Cargando proyectos...", empty: "No se encontraron repositorios públicos.",
    error: "No se puede consultar GitHub ahora. Puedes visitar mis repositorios en el siguiente enlace.",
    errorLink: "Abrir GitHub", noDescription: "Descripción aún no registrada en GitHub.",
    language: "Lenguaje", updated: "Actualizado", viewRepo: "Ver repositorio", viewDemo: "Ver demostración",
    certLabel: "Certificaciones y formación", certTitle: "Desarrollo técnico continuo", certIt: "Ciberseguridad y TI", certGeo: "Datos y geotecnologías", certIndustrial: "Formación industrial y técnica",
    mechatronics: "Técnico en Mecatrónica", electrical: "Electrotecnia y Automatización Industrial", inspection: "Inspección de Equipos y Medición de Espesores por Ultrasonido",
    contactLabel: "Contacto", contactTitle: "Conectemos operaciones, tecnología y datos.",
    contactText: "Disponible para oportunidades en tecnología industrial, TI, infraestructura, automatización, ciberseguridad y transformación digital.", email: "Correo electrónico"
  },
  en: {
    pageTitle: "Anderson Rocha | Industrial Operations & Technology", navAria: "Main navigation", menuAria: "Open menu",
    navAbout: "About", navExpertise: "Expertise", navProjects: "Projects", navCertifications: "Certifications", navContact: "Contact",
    heroEyebrow: "Industrial Operations · Technology · Data · GIS", heroTitle: "I connect industrial operations with technology, automation and data.",
    heroDescription: "Professional with a background in technical leadership, electrical systems, instrumentation, industrial maintenance, inspection, water treatment and multidisciplinary team coordination.",
    viewProjects: "View projects", downloadCv: "Download CV (English PDF)", aboutLabel: "Professional profile",
    aboutTitle: "Experienced in operations. Expanding through technology.",
    aboutText: "Since 2006, I have worked in technical and leadership roles involving industrial operations, maintenance, safety, quality and project execution. I am studying Computer Science and Agronomy and applying Python, Linux, cybersecurity, QGIS and Google Earth Engine to operational challenges.",
    expertiseLabel: "Core expertise", expertiseTitle: "Multidisciplinary technical background",
    skill1Title: "Leadership & operations", skill1Text: "Team coordination, planning, safety, productivity, quality control, technical documentation and critical operations.",
    skill2Title: "Electrical & instrumentation", skill2Text: "Industrial electrical systems, instrumentation, automation, PLC fundamentals, troubleshooting and maintenance.",
    skill3Title: "Industrial integrity", skill3Text: "Equipment inspection, ultrasonic thickness measurements, metallic structures, corrosion, industrial painting and technical reports.",
    skill4Title: "Water & environmental systems", skill4Text: "Water and wastewater treatment plants, equipment installation, fiberglass systems, monitoring and environmental processes.",
    skill5Title: "Technology & automation", skill5Text: "Python automation, Linux, command line, structured data processing, reporting and systems integration.",
    skill6Title: "GIS & remote sensing", skill6Text: "QGIS, Google Earth Engine, Sentinel-2, NDVI, coordinates, spatial analysis and geospatial data processing.",
    projectsLabel: "GitHub projects", projectsTitle: "Automatically published and updated projects",
    projectsIntro: "This section retrieves my public repositories from GitHub. Projects are ordered by their most recent update.",
    loading: "Loading projects...", empty: "No public repositories found.",
    error: "GitHub is temporarily unavailable. You can visit my repositories using the link below.",
    errorLink: "Open GitHub", noDescription: "No GitHub description provided yet.",
    language: "Language", updated: "Updated", viewRepo: "View repository", viewDemo: "Live demo",
    certLabel: "Certifications & education", certTitle: "Continuous technical development", certIt: "Cybersecurity & IT", certGeo: "Data & geospatial technologies", certIndustrial: "Industrial & technical training",
    mechatronics: "Mechatronics Technician", electrical: "Electrical and Industrial Automation", inspection: "Equipment Inspection and Ultrasonic Thickness Measurement",
    contactLabel: "Contact", contactTitle: "Let's connect operations, technology and data.",
    contactText: "Open to opportunities in industrial technology, IT, infrastructure, automation, cybersecurity and digital transformation.", email: "Email"
  }
};

const state = { lang: "pt", repos: null, error: false };
const $ = (selector) => document.querySelector(selector);

function languageFromPreferences() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query && Object.hasOwn(UI, query)) return query;
  try {
    const stored = window.localStorage.getItem("cv-language");
    if (stored && Object.hasOwn(UI, stored)) return stored;
  } catch (_) { /* Armazenamento pode estar bloqueado. */ }
  const browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
  return Object.hasOwn(UI, browser) ? browser : "pt";
}

function translate(lang) {
  if (!Object.hasOwn(UI, lang)) return;
  state.lang = lang;
  const t = UI[lang];
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  document.title = t.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const value = t[node.dataset.i18nAriaLabel];
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  try { window.localStorage.setItem("cv-language", lang); } catch (_) { /* Opcional. */ }
  renderProjects();
}

function make(tag, className, value) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (value !== undefined) el.textContent = value;
  return el;
}

function safeExternalUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch (_) { return null; }
}

function renderProjects() {
  const container = $("#github-projects");
  const status = $("#projects-status");
  if (!container || !status) return;
  const t = UI[state.lang];
  container.replaceChildren();
  status.replaceChildren();

  if (state.error) {
    status.hidden = false;
    status.append(document.createTextNode(`${t.error} `));
    const link = make("a", "", t.errorLink);
    link.href = `https://github.com/${GITHUB_USER}?tab=repositories`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    status.appendChild(link);
    return;
  }
  if (state.repos === null) { status.hidden = false; status.textContent = t.loading; return; }
  if (state.repos.length === 0) { status.hidden = false; status.textContent = t.empty; return; }
  status.hidden = true;

  for (const repo of state.repos) {
    const card = make("article", "project-card");
    const content = make("div", "project-content");
    const tech = make("span", "project-category", repo.language || "GitHub");
    const title = make("h3", "", repo.name.replace(/[-_]+/g, " "));
    const description = make("p", "", repo.description || t.noDescription);
    const date = repo.pushed_at ? new Date(repo.pushed_at) : null;
    const updated = make("p", "project-updated", date && !Number.isNaN(date.getTime())
      ? `${t.updated}: ${new Intl.DateTimeFormat(state.lang === "pt" ? "pt-BR" : state.lang, { dateStyle: "medium" }).format(date)}` : "");
    const tags = make("div", "tags");
    if (repo.language) tags.appendChild(make("span", "", repo.language));
    for (const topic of (Array.isArray(repo.topics) ? repo.topics : []).slice(0, 4)) {
      tags.appendChild(make("span", "", topic));
    }
    const link = make("a", "", t.viewRepo + " →");
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    content.append(tech, title, description, updated, tags, link);
    const demoUrl = safeExternalUrl(repo.homepage);
    if (demoUrl) {
      const demo = make("a", "", t.viewDemo + " →");
      demo.href = demoUrl;
      demo.target = "_blank";
      demo.rel = "noopener noreferrer";
      content.appendChild(demo);
    }
    card.appendChild(content);
    container.appendChild(card);
  }
}

async function loadRepositories() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USER)}/repos?per_page=100&sort=pushed&direction=desc`, {
      headers: { Accept: "application/vnd.github+json" }, signal: controller.signal
    });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Resposta inesperada do GitHub");
    state.repos = data.filter((repo) =>
      !repo.fork && !repo.archived &&
      repo.name.toLowerCase() !== `${GITHUB_USER}.github.io`.toLowerCase() &&
      typeof repo.html_url === "string" && repo.html_url.startsWith(`https://github.com/${GITHUB_USER}/`)
    ).sort((a, b) => new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0));
  } catch (error) {
    console.error("Falha ao carregar projetos:", error);
    state.error = true;
  } finally {
    window.clearTimeout(timeout);
    renderProjects();
  }
}

function setup() {
  const year = $("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
  const menu = $("#menu-button");
  const nav = $("#nav-links");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => translate(button.dataset.lang));
  });
  translate(languageFromPreferences());
  loadRepositories();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup, { once: true });
} else {
  setup();
}
