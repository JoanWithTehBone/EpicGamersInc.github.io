class PreSet extends Article {
  // contains the number needed to generate true/false articles
  public fake: number;

  //Contains every pregenerated article from allFakeGens and allTrueGens
  private preGens: any[];

  constructor() {
    super();
    //randomly calculates if the article is true (0) or false (1)
    this.fake = Math.round(Math.random());
    //either fills the pregen array with fake news or true news
    console.log(this.fake);
    if (this.fake == 1) {
      this.allFakeGens();
    } else {
      this.allTrueGens();
    }
    this.textGen(this.fake);
  }

  private textGen(fake: number) {
    //for when we have an error it makes it clear wether or not it was successful
    super._header = "Header not found";
    super._author = "Author not found";
    super._text = "Text not found";
    super._source = "Source not found";
    super.bobux	= 0;
    super.credability = 0;
    //choose which article you should get
    let index = Math.floor(Math.random() * this.preGens.length / 6) * 6;

    //sends the right pregereated text into the super class defined protected strings
    super._header = this.preGens[index];
    super._author = this.preGens[index + 1];
    super._text = this.preGens[index + 2];
    super._source = this.preGens[index + 3];
    super.bobux = this.preGens[index + 4];
    super.credability = this.preGens[index + 5];
  }

  private allFakeGens() {
    //database of fake articles, every 4 lines of array = 1 Article
    // 1. Header
    // 2. Author
    // 3. Text
    // 4. Source
    // 5. Amount of Bobux
    // 6. Credability (0 = credible, 1 = not credible, etc.)
    this.preGens = [
      "Scientists Discover Super Rare Alien Planet",
      "Author: Mc-Fergunson, Earl of Scotland",
      "It was discovered yesterday that on the moon, there was a device communicating with an unknown planet. After research, weve discovered that this race of aliens is called Yakanbur. I hope it doesn't come back to bite us. Literally.",
      "Source: Huffington Post",
      250,
      1,
      

      "Big foot is back, But scottisch",
      "Author: Mc-Fergunson, Lord of Little Brechin",
      "Big foot has been spotted in Scotland, this is a first officials say. ",
      "Source: Reddit",
      100,
      1,

      "Slime(tm) is the best",
      "Author:the slime team",
      "All you have to do is join our pyramid scheme and the Slime will make your skin crystal clear",
      "Source:Article(1356 AD.)",
      200,
      1,

      "Free Bobux, just do these simple steps",
      "Author: Bob Buxer",
      "step one: give me your credit card information, step 2 fill in your log in data here, step 3:?, step 4: Profit!",
      "Source: Your mom",
      403,
      1,

      "Meteor to destroy earth in 1 month",
      "Author: Lemony Demard",
      "I think it's time for you to know the awful truth, I've been working on a unified theory, I'm an expert in my field, UFOlogy, yes, it's all real, Ancient aliens, it's all true",
      "Source: Home-made Research",
      350,
      1,
    

      "Red is sus",
      "Author: White impostor",
      "i donno man, he's just been standing there doing nothing",
      "Source: me",
      10304,
      1,

      "Being Stuck In Infinite Time Loop is the Issue",
      "Author: Anonymous",
      "Revealing a persistent concern within the pivotal voting bloc, a new poll from the Pew Research Center found Tuesday that being stuck in an infinite time loop was the biggest issue",
      "Source: the garlic",
      60,
      1,

      "These are the most expensive dogs. Period.",
      "Author: Fakian Namian",
      "they are originally from mars, and they've been blessed by Baba Yaga, which causes them to eat anything they can get their tentacles on",
      "Source: DogEmpire",
      230,
      1,

      "Old man Fuming Over Bad Boy.",
      "Author: Anonymous",
      "Lame person is not cool enough to realise the bad boy is right.",
      "Source: the garlic",
      430,
      1,

      "The big hairy Bigfoot in a café!",
      "Author: Anna Rose",
      "some say it's just a hairy man, but we don't think so.",
      "Source : gossip monster",
      210,
      1,

      "Copy Pasted article",
      "VEry cool author",
      "Balh blah blah",
      "Nice",
      0,
      1,
    ];
  }

  private allTrueGens() {
    //database of true articles,  every 4 lines of array = 1 Article
    // 1. Header
    // 2. Author
    // 3. Text
    // 4. Source
    // 5. Amount of Bobux
    // 6. Credability (0 = credible, 1 = not credible, etc.)
    this.preGens = [
      "het wordt makkelijker om eerder te stoppen met werken",
      "Author: Pieter-Bas Brunemeier",
      "Het wordt voor werknemers makkelijker om eerder te stoppen met werken. De Eerste Kamer is akkoord gegaan met een wetsvoorstel van minister Koolmees, waarin dat is geregeld. Het voorstel is een uitwerking van het pensioenakkoord.",
      "Source: NOS",
      50,
      0,

      "Securitas-werkers hielpen bij cocaïnesmokkel via haven",
      "Author: Jaap-Jan van der Wals",
      "De politie en het Openbaar Ministerie zijn dankzij het gekraakte communicatienetwerk Encrochat een groot lek in de Rotterdamse haven op het spoor, schrijft het AD. Medewerkers van het beveiligingsbedrijf Securitas zouden een drugsbende hebben geholpen om duizenden kilo's cocaïne Nederland binnen te smokkelen.",
      "Source: NOS",
      20,
      0,


      "Belastingontwijking Google leverde Nederland ruim 25.000.000 $ op",
      "Author: Chiel op Hondshorst",
      "De politie en het Openbaar Ministerie zijn dankzij het gekraakte communicatienetwerk Encrochat een groot lek in de Rotterdamse haven op het spoor, schrijft het AD. Medewerkers van het beveiligingsbedrijf Securitas zouden een drugsbende hebben geholpen om duizenden kilo's cocaïne Nederland binnen te smokkelen.",
      "Source: NOS",
      100,
      -1,

      "Ook YouTube weert Trump voorlopig",
      "Author: Greetje Blokzijl",
      "Onder meer Twitter, Facebook en Instagram besloten al om Donald Trump al dan niet tijdelijk te weren, nu heeft ook YouTube hem voorlopig geblokkeerd.",
      "Source: NOS",
      100,
      0,

      "Bosgebieden zo groot als tien keer Nederland kaalgekapt",
      "Author: Heleen Ekker",
      "Bosgebieden ter grootte van tien keer Nederland zijn in de periode 2004-2017 verloren gegaan, vooral om ruimte te maken voor landbouw. Het gaat om 43 miljoen hectare tropische bossen in Azië, Zuid-Amerika en Afrika, staat in een rapport van het Wereld Natuur Fonds.",
      "Source: NOS",
      90,
      0,

      "Rutte: vraag over aftreden vanavond niet aan de orde geweest",
      "Author: Elske Hommeltenkamp",
      "Het kabinet hakt aanstaande vrijdag de knoop door over de vraag of het aftreedt vanwege de toeslagenaffaire. Die vraag is vanavond in de ingelaste ministerraad niet aan de orde geweest.",
      "Source: NOS",
      10,
      0,

      "Chinees vaccin is voor China: kans om invloed in Afrika uit te breiden",
      "Author: Tineke Wernetin",
      "Afrika kijkt reikhalzend uit naar de levering van Chinese coronavaccins. Omdat vaccins van westerse bedrijven grotendeels zijn opgekocht door westerse landen, kijken veel Afrikaanse landen naar het vaccin van Sinopharm. Voor China is dit een kans om de invloed in het continent uit te breiden.",
      "Source: NOS",
      50,
      0,

      "Harde lockdown verlengd: alle maatregelen op een rij",
      "Author: Tineke Wernetin",
      "De strenge lockdown in Nederland is dinsdagavond met drie weken verlengd tot en met 9 februari. Hieronder alle richtlijnen op een rij.",
      "Source: NU",
      80,
      0,

      "Middelbare scholieren moeten onderling weer 1,5 meter afstand houden",
      "Author: Elske Hommeltenkamp",
      "Leerlingen in het middelbaar onderwijs moeten onderling weer 1,5 meter afstand van elkaar houden, zo heeft minister-president Mark Rutte dinsdagavond bekendgemaakt. De maatregel is uit voorzorg en uit angst voor verdere verspreiding van de Britse coronavariant genomen.",
      "Source: NU & minister president",
      30,
      0,

      "Russische autoriteiten vragen rechter om bevel tot arrestatie",
      "Author: Greetje Blokzijl",
      "De Russische autoriteiten hebben de rechtbank gevraagd opdracht te geven voor de arrestatie van oppositieleider Alexei Navalny, een van de meest uitgesproken critici van de Russische president Vladimir Poetin.",
      "Source: NU & Officiele omroep",
      110,
      0,

      "Gedupeerden doen aangifte tegen vijf (oud-)bewindslieden in toeslagenaffaire",
      "Author: Jaap-Jan van der Wals",
      "Advocaat Vasco Groeneveld heeft dinsdag namens twintig gedupeerden in de kindertoeslagaffaire aangifte gedaan tegen vijf (oud-)bewindslieden, onder wie de ministers Tamara van Ark (Medische Zorg), Wopke Hoekstra (Financiën) en Eric Wiebes (Economische Zaken). Volgens Groeneveld hebben zij zich schuldig gemaakt aan een ambtsmisdrijf.",
      "Source: NU & Vasco Groeneveld",
      120,
      -1,

      "Basisscholen mogelijk 25 januari open, maar onderzoek Britse variant cruciaal",
      "Author: Pieter-Bas Brunemeier",
      "Het kabinet streeft ernaar basisscholen en kinderopvangcentra op 25 januari te openen, bevestigen bronnen maandag na berichtgeving van het AD. Een voorwaarde is wel dat uit onderzoek naar de Britse variant moet blijken dat het risico voor de kinderen acceptabel is.",
      "Source: AD & Kabinet",
      60,
      0,

      "In 2020 ruim vierhonderd meldingen fraude rondom coronamaatregelen",
      "Author: Tineke Wernetin",
      "De Fiscale Inlichtingen- en Opsporingsdienst (FIOD) beoordeelde het afgelopen jaar ruim vierhonderd meldingen die te maken hadden met het coronavirus, blijkt uit het maandag verschenen jaarbericht. Drie kwart van de meldingen had betrekking op beschermingsmiddelen, waaronder mondmaskers.",
      "Source: FIOD & NU",
      70,
      0,

      "Nederlandse criminelen wassen geld steeds vaker wit in Afrikaanse landen",
      "Author: Ben Bonenmaler",
      "Nederlandse criminelen wassen steeds vaker illegaal verdiend geld wit in Afrikaanse landen zoals Oeganda en Kenia. Ze kopen daar bijvoorbeeld diamanten en goud met contant geld, om de grondstoffen vervolgens te exporteren en te verkopen. Dat vertelt scheidend directeur Bert Langerak van de Fiscale Inlichtingen- en Opsporingsdienst (FIOD) in een interview met het AD. De FIOD brengt maandag haar jaarcijfers naar buiten.",
      "Source: FIOD & AD",
      40,
      0,

      "Mag Trump in 2024 weer presidentskandidaat zijn?",
      "Author: Ben Bonenmaler",
      "Sinds Trump-aanhangers woensdag het Capitool bestormden, is de Amerikaanse president niet zeker meer van zijn functie. Het zou kunnen dat hij in de laatste tien dagen van zijn presidentschap nog wordt afgezet, al lijkt die kans vooralsnog niet heel groot. Maar áls dat gebeurt.... Mag hij dan zich in 2024 dan opnieuw kandidaat stellen voor het presidentschap?",
      "Source: NU",
      70,
      0,

      "Deze kerk houdt een dienst op TikTok",
      "Author: Pieter-Bas Brunemeier",
      "Veel kerken, moskeeën en synagogen houden hun diensten nu online. Maar sommige jongeren vinden dat maar saai, ontdekte de Gereformeerde Kerk in Enter. Zij bedachten daarom iets nieuws: een kerkdienst op TikTok.",
      "Source: Jeugdjournaal",
      20,
      0,

      "Miljarden om natuur in Afrika beter te beschermen",
      "Author: Tineke Wernetin",
      "Wereldleiders hebben afgesproken dat ze de natuur in Afrikaanse landen beter gaan beschermen. De landen doneren miljarden euro's zodat er meer bomen geplant kunnen worden. De hoop is dat dan minder land in woestijn verandert. De bomen komen in de Sahel te staan. Dat is een woestijngebied dat dwars door Afrika loopt. Het loopt van Senegal aan de ene kant, tot Djibouti aan de andere kant.",
      "Source: Jeugdjournaal",
      50,
      0,

      "Bijna alle stroom uitgevallen in Pakistan",
      "Author: Ben Bonenmaler",
      "Een bizar gezicht in Pakistan. In bijna het hele land is de stroom uitgevallen. Daardoor zitten miljoenen mensen in het donker. Stroomstoringen komen vaker voor in Pakistan, maar nog nooit zaten zoveel mensen tegelijkertijd zonder elektriciteit. En dat is behoorlijk onhandig, want daardoor is er geen licht en kunnen mensen hun apparaten niet opladen. Ook lantaarnpalen doen het niet.",
      "Source: Jeugdjournaal",
      90,
      0,

      "Nu al extra beveiliging voor inhuldiging Joe Biden",
      "Author: Ben Bonenmaler",
      "In de Verenigde Staten zijn mensen druk bezig met de voorbereidingen op de inhuldiging van de nieuwe president Joe Biden. Veel belangrijke gebouwen worden extra beveiligd en er zijn meer agenten op straat. Bij sommige regeringsgebouwen worden expres de ramen dichtgetimmerd, zodat mensen die niet kapot kunnen maken.",
      "Source: Jeugdjournaal",
      40,
      0
    ];
  }
}
