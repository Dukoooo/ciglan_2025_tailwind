import img1 from "../assets/zemne_section.jpg";
import img2 from "../assets/stavebne_section.jpg";
import img3 from "../assets/zahradne_section.jpg";

const servicesData = [
  {
    id: 1,
    serviceName: "Zemné a výkopové práce",
    serviceDesc:
      "Zemné a výkopové práce zahŕňajú rôzne činnosti súvisiace s úpravou a prípravou terénu pre rôzne druhy projektov",
    serviceFeatures: [
      "Výkopy základov, drenážných jám, pivníc, bazénov, jazierok...",
      "Dovoz a predaj sypkých materiálov",
      "Príprava povrchu pre výstavbu ciest, parkovísk a chodníkov...",
      "Prípojky inžinierskych sietí",
      "A iné...",
    ],
    img: img1,
  },
  {
    id: 2,
    serviceName: "Stavebná činnosť",
    serviceDesc:
      "Stavebná činnosť je činnosť, ktorá zahŕňa stavbu konštrukcie, renovácie a údržby rôznych typov stavieb, ako sú budovy, mosty, cesty...",
    serviceFeatures: [
      "Príprava stavebných miest a úprava terénu",
      "Odvoz a likvidácia stavebnej sute a odpadu",
      "Búranie a demolácia",
      "A iné...",
    ],
    img: img2,
  },
  {
    id: 3,
    serviceName: "Záhradná činnosť a iné",
    serviceDesc:
      "komplexné riešenia pre úpravu a údržbu záhrad, verejných priestranstiev a zelených plôch",
    serviceFeatures: [
      "Úprava terénov a záhrad ",
      "Stavba terás, altánkov a plotov ",
      "Rovnanie svahov, kaskádovanie pozemku...",
      "Pokládka zámkovej dlažby",
      "A iné...",
    ],
    img: img3,
  },
];

export default servicesData;
