const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctalogo = document.getElementById("cta-img");
ctalogo.setAttribute("src", siteContent["cta"]["img-src"]);

let nav = document.querySelectorAll("a");
nav.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

const ctacontent = document.getElementsByTagName("h1");
ctacontent[0].textContent = siteContent.cta.h1;

const buttontext = document.getElementsByTagName("button");
buttontext[0].innerHTML = siteContent.cta.button;

let middlelogo = document.getElementById("middle-img");
middlelogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let topheader = document.querySelectorAll("h4");
topheader[0].textContent = siteContent["main-content"]["features-h4"];
topheader[1].textContent = siteContent["main-content"]["about-h4"];
topheader[2].textContent = siteContent["main-content"]["services-h4"];
topheader[3].textContent = siteContent["main-content"]["product-h4"];
topheader[4].textContent = siteContent["main-content"]["vision-h4"];
topheader[5].textContent = siteContent["contact"]["contact-h4"];

let paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];
paragraphs[8].textContent = siteContent["footer"]["copyright"];

const nav1 = document.createElement("a");
nav1.textContent = "Support";
const navBar = document.querySelector("nav");
navBar.prepend(nav1);

const nav2 = document.createElement("a");
nav2.textContent = "Team";
navBar.append(nav2);

const links = document.getElementsByTagName("a");
for (let link of links) {
  link.style.color = "green";
}

const styleTesting = document.getElementsByTagName("p");
for (let paragraph of styleTesting) {
  paragraph.style.border = "1px solid black";
  paragraph.style.padding = "2%";
  paragraph.style.backgroundColor = "lightgray";
}
paragraphs[5].style.backgroundColor = "white";
paragraphs[6].style.backgroundColor = "white";
paragraphs[7].style.backgroundColor = "white";
paragraphs[8].style.backgroundColor = "white";
paragraphs[5].style.border = "none";
paragraphs[6].style.border = "none";
paragraphs[7].style.border = "none";
paragraphs[8].style.border = "none";
paragraphs[5].style.padding = "0%";
paragraphs[6].style.padding = "0%";
paragraphs[7].style.padding = "0%";
paragraphs[8].style.padding = "0%";
