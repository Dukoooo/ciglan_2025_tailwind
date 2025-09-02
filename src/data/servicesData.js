import img1 from "../assets/zemne_section.jpg";
import img2 from "../assets/stavebne_section.jpg";
import img3 from "../assets/zahradne_section.jpg";
const servicesData = [
  {
    id: 1,
    serviceName: "Zemné a výkopové práce",
    serviceDesc:
      "Naše zemné a výkopové práce zahŕňajú komplexnú prípravu a úpravu terénu pre všetky typy projektov – od rodinných domov až po väčšie stavby či záhrady.",
    serviceFeatures: [
      "Výkopy základov, drenážnych jám, pivníc, bazénov a jazierok",
      "Dovoz a predaj kvalitných sypkých materiálov",
      "Príprava povrchov pre výstavbu ciest, parkovísk a chodníkov",
      "Realizácia prípojok inžinierskych sietí",
      "A mnoho ďalších špecifických prác podľa potreby",
    ],
    img: img1,
  },
  {
    id: 2,
    serviceName: "Stavebná činnosť",
    serviceDesc:
      "Poskytujeme komplexné stavebné služby vrátane stavby, renovácie a údržby rôznych typov objektov – od rodinných domov až po komerčné stavby a infraštruktúru.",
    serviceFeatures: [
      "Príprava stavebných miest a úprava terénu",
      "Odvoz a ekologická likvidácia stavebného odpadu",
      "Búranie, demolácia a recyklácia materiálov",
      "Presná a kvalitná realizácia stavieb podľa projektu",
      "A mnoho ďalších stavebných prác",
    ],
    img: img2,
  },
  {
    id: 3,
    serviceName: "Záhradná činnosť a iné",
    serviceDesc:
      "Ponúkame komplexné riešenia pre úpravu a údržbu záhrad, verejných priestranstiev a zelených plôch, aby vaše okolie pôsobilo upravene a esteticky.",
    serviceFeatures: [
      "Úprava terénov a dizajn záhradnych plôch",
      "Stavba terás, altánkov, plotov a iných záhradných prvkov",
      "Rovnanie svahov a kaskádovanie pozemku",
      "Pokládka zámkovej dlažby a chodníkov",
      "A množstvo ďalších služieb na mieru",
    ],
    img: img3,
  },
];

export default servicesData;
