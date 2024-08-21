const publicationsData = [
  {
    id: 1,
    namePublication:
      "The Future of Hiding. Secrecy, Energy Infrastructure and the Recolonization of Estonia’s Siberia. Cornell University Press, 2025",
    image: "1.jpg",
    hyperlink: "The-Future-Of-Hiding",
    category: "monograph",
  },
  {
    id: 2,
    namePublication:
      "Escondites. Un descenso a lo secreto y sus espacios. Bifurcaciones, 2024",
    image: "2.jpg",
    hyperlink: "Escondites",
    category: "monograph",
  },
  {
    id: 3,
    namePublication:
      "Ethnographic Experiments with Artists, Designers and Boundary Objects. UCL Press, 2021",
    image: "3.jpeg",
    hyperlink: "Ethnographic-Experiments-with-Artists",
    category: "monograph",
  },
  {
    id: 4,
    namePublication:
      "Remains of the Soviet Time in Contemporary Estonia. UCL Press, 2018",
    image: "4.jpeg",
    hyperlink: "Remains-of-the-Soviet-Time",
    category: "monograph",
  },
  {
    id: 5,
    namePublication:
      "Peripheral Methodologies: Unlearning, Not-knowing and Ethnographic Limits. Routledge. Edited with Lili Di Puppo & Martin D Frederiksen (Routledge, 2021)",
    image: "5.jpg",
    hyperlink: "Peripheral-Methodologies",
    category: "volumes",
  },
  {
    id: 6,
    namePublication:
      "Politics of Recuperation. Repair and Recovery in Post-crisis Portugal (Bloomsbury, 2020)",
    image: "6.jpg",
    hyperlink: "Politics-Of-Recuperation",
    category: "volumes",
  },
  {
    id: 7,
    namePublication:
      "Repair, Brokenness, Breakthrough. Ethnographic Responses. Edited with Patrick Laviolette (Berghahn, 2019)",
    image: "7.jpeg",
    hyperlink: "Repair-Brokenness-Breakthrough",
    category: "volumes",
  },
  {
    id: 8,
    namePublication:
      "Aesthetics of Repair in Contemporary Georgia. With Marika Agu (Tartu Art Museum, 2016)",
    image: "8.jpeg",
    hyperlink: "Aesthetics-of-Repair-in-Contemporary-Georgia",
    category: "volumes",
  },
  {
    id: 9,
    namePublication:
      "Living with and without Things, with T. Errázuriz. Home Cultures, 2024",
    image: "9.jpeg",
    hyperlink: "Living-With-And-Without-Things",
    category: "issue",
  },
  {
    id: 10,
    namePublication:
      "Anthropology of/at/from Home. A collective multimodal ethnography during the pandemic, with E. Berglund and A. Estalella, Entanglements, 2021",
    image: "10.jpeg",
    hyperlink: "Anthropology-Of-At-From-Home",
    category: "issue",
  },
  {
    id: 11,
    namePublication:
      "Boundary Re-Work in European Anthropology: Conceptual and Historical Explorations’, Anthropological Journal of European Cultures, 2020",
    image: "11.jpeg",
    hyperlink: "Boundary-Re-Work",
    category: "issue",
  },
  {
    id: 12,
    namePublication:
      "Changing margins and relations within European anthropology. ANUAC, 2019",
    image: "12.jpeg",
    hyperlink: "Changing-Margins",
    category: "issue",
  },
  {
    id: 13,
    namePublication:
      "Rethinking Euro-Anthropology. Part Three. Early career scholars forum. Social Anthropology, 2017",
    image: "13.jpeg",
    hyperlink: "Rethinking-Euro-Anthropology",
    category: "issue",
  },
  {
    id: 14,
    namePublication:
      "Garbography: Waste Matter as Asemic Writing, with O. Pyyhtinen. Forthcoming",
    image: "14.jpeg",
    hyperlink: "Garbography-Waste-Matter",
    category: "article",
  },
  {
    id: 15,
    namePublication:
      "Hitchhacking, Passenger Ethnography and Four-wheeled Hospitality, with P. Laviolette, Ethnologia Europeae, 2024",
    image: "15.jpeg",
    hyperlink: "Hitchhacking-Passenger-Ethnography",
    category: "article",
  },
  {
    id: 16,
    namePublication:
      "Time to fix: Repair heuristics in Estonia and Portugal. Etnográfica, 2023",
    image: "16.jpeg",
    hyperlink: "Time-To-Fix",
    category: "article",
  },
  {
    id: 17,
    namePublication:
      "Memory, don’t speak! Monumental neglect and memorial sacrifice in contemporary Estonia. Cultural Geographies 2021",
    image: "17.jpeg",
    hyperlink: "Memory-Dont-Speak",
    category: "article",
  },
  {
    id: 18,
    namePublication:
      "What kind of documents do curators produce? Contemporary cases from Estonia. Curator, the Museum Journal, 2023",

    image: "18.jpeg",
    hyperlink: "What-Kind-Of-Documents",
    category: "article",
  },
  {
    id: 19,
    namePublication:
      "Waste and postsocialism in Estonia. Becoming European through the management of rubbish, with K. Beilmann. Environment and Planning C: Politics and Space, 2019",
    image: "19.jpeg",
    hyperlink: "Waste-And-Postsocialism",
    category: "article",
  },
  {
    id: 20,
    namePublication:
      "Analogue photo booths in Berlin: A stage, a trap, a condenser, and four shots for kissing the person you love. Anthropology and Photography",
    image: "20.jpeg",
    hyperlink: "Analogue-Photo-Booths",
    category: "article",
  },
  {
    id: 21,
    namePublication:
      "Narva as Method. Urban Inventories and the Mutation of the Post-Socialist City. Anthropological Journal of European Cultures, 2020",
    image: "21.jpeg",
    hyperlink: "Narva-As-Method",
    category: "article",
  },
  {
    id: 22,
    namePublication:
      "Doing nothing: Anthropology sits at the same table with contemporary art in Lisbon and Tbilisi. Ethnography, 2018",
    image: "22.jpeg",
    hyperlink: "Doing-Nothing-Anthropology",
    category: "article",
  },
  {
    id: 23,
    namePublication:
      '"This Place Has Potential": Trash, Culture, and Urban Regeneration in Tallinn, Estonia. Suomen Antropologi, 2018',
    image: "23.jpeg",
    hyperlink: "‘This-Place-Has-Potential”",
    category: "article",
  },
  {
    id: 24,
    namePublication:
      "Waste is not the end. For an anthropology of care, maintenance and repair. Social Anthropology, 2017",
    image: "24.jpeg",
    hyperlink: "‘Waste-Is-Not-The-End",
    category: "article",
  },
  {
    id: 25,
    namePublication:
      "Remaining without preservation: The unfitness of Kino Rodina as zombie heritage. In Connecting with Ambivalent Heritage. T. Äikäs and T. Matila (ed.) Bloomsbury, 2024",
    image: "25.jpg",
    hyperlink: "Remaining-Without-Preservation",
    category: "chapter",
  },
  {
    id: 26,
    namePublication:
      "Co-ethnographers in the storm: Investigating post-socialist decline with contemporary artists. In The Trouble with Art. R. Sansi and J. Tinius. Routledge, 2024",
    image: "26.jpg",
    hyperlink: "Co-ethnographers-In-The_storm",
    category: "chapter",
  },
  {
    id: 27,
    namePublication:
      "How to make ethnographic research with exhibitions. In An Ethnographic Inventory. A. Estalella & T.S Criado (eds.) Routledge, 2023",
    image: "27.jpeg",
    hyperlink: "How-To-Make-Ethnographic-Research",
    category: "chapter",
  },
  {
    id: 28,
    namePublication:
      "Fooled into Fieldwork: Epistemic Detours of an Accidental Anthropologist, in Peripheral Methodologies. F. Martínez, L. Di Puppo & M. Frederiksen eds. Routledge, 2021",
    image: "28.jpeg",
    hyperlink: "Fooled-Into-Fieldwork",
    category: "chapter",
  },
  {
    id: 29,
    namePublication:
      "Voids out of Place and Politics below the State in Georgia. In Repair, Brokenness, Breakthrough. F. Martínez & P. Laviolette (eds.) Berghahn, 2019",
    image: "29.jpeg",
    hyperlink: "Voids-Out-Of-Place",
    category: "chapter",
  },
  {
    id: 30,
    namePublication: "Paseo Circular. Bifurcaciones, 2021",
    image: "30.jpg",
    hyperlink: "Paseo-Circular",
    category: "novel",
  },
];

export default publicationsData;
