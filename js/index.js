const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//NAV

//select nav as NodeList
let navList = document.querySelectorAll("a");

//update nav anchors
let navItem1 = navList[0].textContent = siteContent["nav"]["nav-item-1"];
let navItem2 = navList[1].textContent = siteContent["nav"]["nav-item-2"];
let navItem3 = navList[2].textContent = siteContent["nav"]["nav-item-3"];
let navItem4 = navList[3].textContent = siteContent["nav"]["nav-item-4"];
let navItem5 = navList[4].textContent = siteContent["nav"]["nav-item-5"];
let navItem6 = navList[5].textContent = siteContent["nav"]["nav-item-6"];

//update nav logo img src
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent.nav["img-src"]);


//add new items to navigation menu
//select parent
let navigation = document.querySelector("nav");

//create child1
const newNavChild1 = document.createElement('a');
newNavChild1.textContent = "Games";
newNavChild1.href = "#";
newNavChild1.style.color = "green";

//append child1
navigation.appendChild(newNavChild1);


//create child2
const newNavChild2 = document.createElement('a');
newNavChild2.textContent = "FAQs";
newNavChild2.href = "#";
newNavChild2.style.color = "green";

//prepend child2
navigation.prepend(newNavChild2);

//change navigation text to green
navList.forEach( element => {
  element.style.color = "green";
});

//CTA section

//cta-text: DOM IS AWESOME
let ctaTitle = document.querySelector(".cta .cta-text h1");
ctaTitle.textContent = siteContent["cta"]["h1"];

//cta-button
let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.textContent = siteContent.cta.button;

//cta img
let codeImg = document.querySelector("#cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main-Content Section

//selection top-content h4 as NodeList
let topContentTitles = document.querySelectorAll(".top-content .text-content h4");

//update top-content h4s
let h4Features = topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
let h4About = topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];

//selction top-content paragraphs as NodeList
let topContentParagraphs = document.querySelectorAll(".top-content .text-content p");

//update top-content paragraphs
let topParagraph1 = topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
let topParagraph2 = topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];

//cta img
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//selection bottom-content h4 as NodeList
let bottomContentTitles = document.querySelectorAll(".bottom-content .text-content h4");

//update bottom-content h4s
let h4Services = bottomContentTitles[0].textContent = siteContent["main-content"]["services-h4"];
let h4Product = bottomContentTitles[1].textContent = siteContent["main-content"]["product-h4"];
let h4Vision = bottomContentTitles[2].textContent = siteContent["main-content"]["vision-h4"];

//selction bottom-content paragraphs as NodeList
let bottomContentParagraphs = document.querySelectorAll(".bottom-content .text-content p");

//update bottom-content paragraphs
let bottomParagraph1 = bottomContentParagraphs[0].textContent = siteContent["main-content"]["services-content"];
let bottomParagraph2 = bottomContentParagraphs[1].textContent = siteContent["main-content"]["product-content"];
let bottomParagraph3 = bottomContentParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

//CONTACT

//select & update heading for contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

//select contact paragraphs as NodeList
let contactList = document.querySelectorAll(".contact p");

//update contact paragraphs
let address = contactList[0].textContent = siteContent.contact.address;
let phone = contactList[1].textContent = siteContent.contact.phone;
let email = contactList[2].textContent = siteContent.contact.email;

//FOOTER

//give footer a class
let newFooterClass = document.querySelector("footer");
newFooterClass.classList.add("greatFooter");

//select footer paragraph
let footerParagraph = document.querySelector(".greatFooter p")
let footerText = footerParagraph.textContent = siteContent.footer.copyright;







