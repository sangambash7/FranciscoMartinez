const publicationsData = [
  {
    id: 1,
    namePublication: "The Future of Hiding",
    publisher: "Cornell University Press",
    year: "2025",
    image: "1.jpg",
    hyperlink: "The-Future-Of-Hiding",
    category: "monograph",
  },
  {
    id: 2,
    namePublication: "Escondites. Un descenso a lo secreto y sus espacios",
    publisher: "Bifurcaciones",
    year: "2024",
    image: "2.jpg",
    hyperlink: "Escondites",
    category: "monograph",
  },
  {
    id: 3,
    namePublication:
      "Ethnographic Experiments with Artists, Designers and Boundary Objects",
    publisher: "UCL Press",
    year: "2021",
    image: "3.jpeg",
    hyperlink: "Ethnographic-Experiments-with-Artists",
    category: "monograph",
  },
  {
    id: 4,
    namePublication: "Remains of the Soviet Time in Contemporary Estonia",
    publisher: "UCL Press",
    year: "2018",
    image: "4.jpeg",
    hyperlink: "Remains-of-the-Soviet-Time",
    category: "monograph",
  },
  {
    id: 5,
    namePublication:
      "Peripheral Methodologies: Unlearning, Not-knowing and Ethnographic Limits",
    credit: "Edited with Lili Di Puppo & Martin D Frederiksen",
    publisher: "Routledge",
    year: "2021",
    image: "5.jpg",
    hyperlink: "Peripheral-Methodologies",
    category: "volumes",
  },
  {
    id: 6,
    namePublication:
      "Politics of Recuperation. Repair and Recovery in Post-crisis Portugal",
    publisher: "Bloomsbury",
    year: "2020",
    image: "6.jpg",
    hyperlink: "Politics-Of-Recuperation",
    category: "volumes",
  },
  {
    id: 7,
    namePublication: "Repair, Brokenness, Breakthrough. Ethnographic Responses",
    credit: "Edited with Patrick Laviolette",
    publisher: "Berghahn",
    year: "2019",
    image: "7.jpeg",
    hyperlink: "Repair-Brokenness-Breakthrough",
    category: "volumes",
  },
  {
    id: 8,
    namePublication: "Aesthetics of Repair in Contemporary Georgia",
    credit: "With Marika Agu",
    publisher: "Tartu Art Museum",
    year: "2016",
    image: "8.jpeg",
    hyperlink: "Aesthetics-of-Repair-in-Contemporary-Georgia",
    category: "volumes",
  },
  {
    id: 31,
    namePublication: "Hopeless Youth!",
    credit: "With P. Runnel",
    publisher: "Estonian National Museum",
    year: "2015",
    image: "31.jpeg",
    hyperlink: "Hopeless-Youth",
    category: "volumes",
  },
  {
    id: 32,
    namePublication: "Playgrounds and Battlefields",
    credit: "With K. Slabina",
    publisher: "Tallinn University Press",
    year: "2014",
    image: "32.jpeg",
    hyperlink: "Playgrounds-And-Battlefields",
    category: "volumes",
  },
  {
    id: 9,
    namePublication: "Living with and without Things, with T. Errázuriz",
    publisher: "Home Cultures",
    year: "2024",
    image: "9.jpeg",
    hyperlink: "Living-With-And-Without-Things",
    category: "issue",
  },
  {
    id: 10,
    namePublication:
      "Anthropology of/at/from Home. A collective multimodal ethnography during the pandemic, with E. Berglund and A. Estalella",
    publisher: "Entanglements",
    year: "2021",
    image: "10.JPG",
    hyperlink: "Anthropology-Of-At-From-Home",
    category: "issue",
  },
  {
    id: 11,
    namePublication:
      "Boundary Re-Work in European Anthropology: Conceptual and Historical Explorations",
    publisher: "Anthropological Journal of European Cultures",
    year: "2020",
    image: "11.jpeg",
    hyperlink: "Boundary-Re-Work",
    category: "issue",
  },
  {
    id: 12,
    namePublication:
      "Changing margins and relations within European anthropology",
    publisher: "ANUAC",
    year: "2019",
    image: "12.jpeg",
    hyperlink: "Changing-Margins",
    category: "issue",
  },
  {
    id: 13,
    namePublication:
      "Rethinking Euro-Anthropology. Part Three. Early career scholars forum",
    publisher: "Social Anthropology",
    year: "2017",
    image: "13.jpeg",
    hyperlink: "Rethinking-Euro-Anthropology",
    category: "issue",
  },
  {
    id: 14,
    namePublication:
      "Garbography: Waste Matter as Asemic Writing, with O. Pyyhtinen",
    publisher: "",
    year: "Forthcoming",
    image: "14.jpeg",
    hyperlink: "Garbography-Waste-Matter",
    category: "article",
  },
  {
    id: 15,
    namePublication:
      "Hitchhacking, Passenger Ethnography and Four-wheeled Hospitality, with P. Laviolette",
    publisher: "Ethnologia Europeae",
    year: "2024",
    image: "15.jpeg",
    hyperlink: "Hitchhacking-Passenger-Ethnography",
    category: "article",
  },
  {
    id: 16,
    namePublication: "Time to fix: Repair heuristics in Estonia and Portugal",
    publisher: "Etnográfica",
    year: "2023",
    image: "16.jpeg",
    hyperlink: "Time-To-Fix",
    category: "article",
  },
  {
    id: 18,
    namePublication:
      "What kind of documents do curators produce? Contemporary cases from Estonia. Curator",
    publisher: "the Museum Journal",
    year: "2023",
    image: "18.jpeg",
    hyperlink: "What-Kind-Of-Documents",
    category: "article",
  },
  {
    id: 17,
    namePublication:
      "Memory, don’t speak! Monumental neglect and memorial sacrifice in contemporary Estonia",
    publisher: "Cultural Geographies",
    year: "2021",
    image: "17.jpg",
    hyperlink: "Memory-Dont-Speak",
    category: "article",
  },
  {
    id: 21,
    namePublication:
      "Narva as Method. Urban Inventories and the Mutation of the Post-Socialist City",
    publisher: "Anthropological Journal of European Cultures",
    year: "2020",
    image: "21.jpg",
    hyperlink: "Narva-As-Method",
    category: "article",
  },
  {
    id: 19,
    namePublication:
      "Waste and postsocialism in Estonia. Becoming European through the management of rubbish, with K. Beilmann",
    publisher: "Environment and Planning C: Politics and Space",
    year: "2019",
    image: "19.png",
    hyperlink: "Waste-And-Postsocialism",
    category: "article",
  },
  {
    id: 20,
    namePublication:
      "Analogue photo booths in Berlin: A stage, a trap, a condenser, and four shots for kissing the person you love",
    publisher: "Anthropology and Photography",
    year: "2018",
    image: "20.jpeg",
    hyperlink: "Analogue-Photo-Booths",
    category: "article",
  },
  {
    id: 22,
    namePublication:
      "Doing nothing: Anthropology sits at the same table with contemporary art in Lisbon and Tbilisi",
    publisher: "Ethnography",
    year: "2018",
    image: "22.JPG",
    hyperlink: "Doing-Nothing-Anthropology",
    category: "article",
  },
  {
    id: 23,
    namePublication:
      '"This Place Has Potential": Trash, Culture, and Urban Regeneration in Tallinn, Estonia',
    publisher: "Suomen Antropologi",
    year: "2018",
    image: "23.jpeg",
    hyperlink: "This-Place-Has-Potential”",
    category: "article",
  },
  {
    id: 24,
    namePublication:
      "Waste is not the end. For an anthropology of care, maintenance and repair",
    publisher: "Social Anthropology",
    year: "2017",
    image: "24.jpeg",
    hyperlink: "Waste-Is-Not-The-End",
    category: "article",
  },
  {
    id: 25,
    namePublication:
      "Remaining without preservation: The unfitness of Kino Rodina as zombie heritage. In Connecting with Ambivalent Heritage. T. Äikäs and T. Matila (ed.)",
    publisher: "Bloomsbury",
    year: "2024",
    image: "25.jpg",
    hyperlink: "Remaining-Without-Preservation",
    category: "chapter",
  },
  {
    id: 26,
    namePublication:
      "Co-ethnographers in the storm: Investigating post-socialist decline with contemporary artists. In The Trouble with Art. R. Sansi and J. Tinius",
    publisher: "Routledge",
    year: "2024",
    image: "26.jpg",
    hyperlink: "Co-ethnographers-In-The_storm",
    category: "chapter",
  },
  {
    id: 27,
    namePublication:
      "How to make ethnographic research with exhibitions. In An Ethnographic Inventory. A. Estalella & T.S Criado (eds.)",
    publisher: "Routledge",
    year: "2023",
    image: "27.jpeg",
    hyperlink: "How-To-Make-Ethnographic-Research",
    category: "chapter",
  },
  {
    id: 28,
    namePublication:
      "Fooled into Fieldwork: Epistemic Detours of an Accidental Anthropologist, in Peripheral Methodologies. F. Martínez, L. Di Puppo & M. Frederiksen eds",
    publisher: "Routledge",
    year: "2021",
    image: "28.jpeg",
    hyperlink: "Fooled-Into-Fieldwork",
    category: "chapter",
  },
  {
    id: 29,
    namePublication:
      "What's in a Hole? Voids out of Place and Politics below the State in Georgia. In Repair, Brokenness, Breakthrough. F. Martínez & P. Laviolette (eds.)",
    publisher: "Berghahn",
    year: "2019",
    image: "29.jpeg",
    hyperlink: "Voids-Out-Of-Place",
    category: "chapter",
  },
  {
    id: 30,
    namePublication: "Paseo Circular",
    publisher: "Bifurcaciones",
    year: "2021",
    image: "30.jpg",
    hyperlink: "Paseo-Circular",
    category: "novel",
  },
  {
    id: 33,
    namePublication:
      "Cómo curar (y cuidar) de nuestras preguntas etnográficas de forma colaborativa y experimental",
    publisher: "Xcol",
    year: "2023",
    image: "33.png",
    hyperlink: "Cómo-Curar",
    category: "espanol",
  },
  {
    id: 34,
    namePublication:
      "Agujeros de realidad. Des-diseñando el siglo XX en el este de Estonia",
    publisher: "Diseña",
    year: "2023",
    image: "34.jpeg",
    hyperlink: "Agujeros-De-Realidad",
    category: "espanol",
  },
  {
    id: 35,
    namePublication:
      "Límites etnográficos: una aproximación antropológica en tres experimentos creativos",
    publisher: "Antípoda",
    year: "2022",
    image: "35.png",
    hyperlink: "Límites-Etnográficos",
    category: "espanol",
  },
  {
    id: 36,
    namePublication:
      "Antropología periférica. Los márgenes académicos como un espacio epistemológico",
    publisher: "Revista Murciana de Antropología",
    year: "2020",
    image: "36.png",
    hyperlink: "Antropología-Periférica",
    category: "espanol",
  },
];

export default publicationsData;
