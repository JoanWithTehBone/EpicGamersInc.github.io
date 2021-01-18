class Game {
    constructor(canvas) {
        this.step = () => {
            if (this.currentLevel == 3) {
                this.currentLevel = 0;
                this.levels[0] = new Home(this.canvas);
                this.levels[1] = new Main(this.canvas);
                this.levels[2] = new GameOver(this.canvas);
            }
            this.frameIndex++;
            const level = this.levels[this.currentLevel];
            level.update(this.frameIndex);
            const next = this.levels[this.currentLevel + 1];
            if (level.isCompleted()) {
                document.removeEventListener("click", level.mouseHandler);
                this.currentLevel++;
                document.addEventListener("click", next.mouseHandler);
            }
            requestAnimationFrame(this.step);
        };
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.levels = [
            new Home(this.canvas),
            new Main(this.canvas),
            new GameOver(this.canvas),
            new Restart(this.canvas),
        ];
        this.currentLevel = 0;
        this.frameIndex = 0;
        requestAnimationFrame(this.step);
    }
}
class KeyboardListener {
    constructor() {
        this.keyDown = (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        };
        this.keyUp = (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        };
        this.keyCodeStates = new Array();
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
}
KeyboardListener.KEY_SPACE = 32;
KeyboardListener.KEY_LEFT = 37;
KeyboardListener.KEY_UP = 38;
KeyboardListener.KEY_RIGHT = 39;
KeyboardListener.KEY_DOWN = 40;
KeyboardListener.KEY_R = 82;
KeyboardListener.KEY_T = 84;
KeyboardListener.KEY_B = 66;
class Player {
    constructor(startingBobux, startingCredability) {
        this._bobux = startingBobux;
        this._credability = startingCredability;
    }
    get bobux() {
        return this._bobux;
    }
    set bobux(value) {
        this._bobux = value;
    }
    get credability() {
        return this._credability;
    }
    set credability(value) {
        this._credability = value;
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game(document.getElementById('canvas'));
});
class Article {
    getArticle() {
        return this.head + this.auth + this.tex + this.sour;
    }
    get head() {
        return this._header;
    }
    set head(value) {
        this._header = value;
    }
    get auth() {
        return this._author;
    }
    set auth(value) {
        this._author = value;
    }
    get tex() {
        return this._text;
    }
    set tex(value) {
        this._text = value;
    }
    get sour() {
        return this._source;
    }
    set sour(value) {
        this._source = value;
    }
    get bucks() {
        return this.bobux;
    }
    set bucks(value) {
        this.bobux = value;
    }
    get credit() {
        return this.credability;
    }
    set credit(value) {
        this.credability = value;
    }
}
class ArticleDraw {
    constructor(canvas) {
        this.testArticle = new PreSet();
        console.log(this.testArticle.getArticle());
    }
    draw(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.screenImage.forEach((screenImage) => {
            screenImage.draw(ctx);
        });
        this.writeTextToCanvas(ctx, this.testArticle.head, canvas.width * 0.65, canvas.height * 0.5, 24);
        this.writeTextToCanvas(ctx, this.testArticle.auth, canvas.width * 0.65, canvas.height * 0.5 + 20, 12);
        this.writeMultiLineToCanvas(ctx, this.testArticle.tex, 458, canvas.width * 0.65, canvas.height * 0.5 + 45);
        this.writeTextToCanvas(ctx, this.testArticle.sour, canvas.width * 0.65, canvas.height * 0.8, 12);
    }
    writeTextToCanvas(ctx, text, xCoordinate, yCoordinate, fontSize = 20, color = "black", alignment = "start") {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    writeMultiLineToCanvas(ctx, text, maxWidth, x, y, fontSize = 20, color = "black", alignment = "start") {
        const words = text.split(" ");
        const lines = [];
        let currentLine = words[0];
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        const lineHeight = ctx.measureText("M").width * 1.2;
        for (let i = 0; i < lines.length; ++i) {
            this.writeTextToCanvas(ctx, lines[i], x, y, 18);
            y += lineHeight;
        }
    }
}
class PreSet extends Article {
    constructor() {
        super();
        this.fake = Math.round(Math.random());
        console.log(this.fake);
        if (this.fake == 1) {
            this.allFakeGens();
        }
        else {
            this.allTrueGens();
        }
        this.textGen(this.fake);
    }
    textGen(fake) {
        super._header = "Header not found";
        super._author = "Author not found";
        super._text = "Text not found";
        super._source = "Source not found";
        super.bobux = 0;
        super.credability = 0;
        let index = Math.floor(Math.random() * this.preGens.length / 6) * 6;
        super._header = this.preGens[index];
        super._author = this.preGens[index + 1];
        super._text = this.preGens[index + 2];
        super._source = this.preGens[index + 3];
        super.bobux = this.preGens[index + 4];
        super.credability = this.preGens[index + 5];
    }
    allFakeGens() {
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
    allTrueGens() {
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
class ScreenImage {
    constructor(item, xPos, yPos) {
        this.image = this.loadNewImage(`assets/main-screen/${item}.png`);
        this.xPosition = xPos;
        this.yPosition = yPos;
    }
    getXPos() {
        return this.xPosition;
    }
    getYPos() {
        return this.yPosition;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class GameOver {
    constructor(canvas) {
        this.mouseHandler = (event) => {
            console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);
            if (event.clientX >= this.screenImage[1].getXPos() &&
                event.clientX <
                    this.screenImage[1].getXPos() + this.screenImage[1].getImageWidth() &&
                event.clientY >= this.screenImage[1].getYPos() &&
                event.clientY <=
                    this.screenImage[1].getYPos() + this.screenImage[1].getImageWidth()) {
                this.currentClick++;
                console.log(this.currentClick);
                console.log("Has been clicked: ", this.currentClick);
            }
        };
        this.update = (frameIndex) => {
            this.draw();
        };
        this.isCompleted = () => {
            return this.currentClick > 0;
        };
        this.canvas = canvas;
        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.currentClick = 0;
        this.screenImage = [];
        this.screenImage = [new ScreenImage("Gameover-screen", 0, 0)];
        this.screenImage.push(new ScreenImage("Restart-button", this.canvas.width * 0.425, this.canvas.height / 2));
    }
    addMouseHandler() {
        document.addEventListener("click", this.mouseHandler);
    }
    writeTextToCanvas(ctx, text, xCoordinate, yCoordinate, fontSize = 20, color = "black", alignment = "start") {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.screenImage.forEach((screenImage) => {
            screenImage.draw(ctx);
        });
        this.writeTextToCanvas(ctx, `${this.total}`, this.canvas.width / 2, this.canvas.height / 2, 16);
    }
}
class Home {
    constructor(canvas) {
        this.mouseHandler = (event) => {
            console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);
            if (event.clientX >= this.screenImage[1].getXPos() &&
                event.clientX <
                    this.screenImage[1].getXPos() + this.screenImage[1].getImageWidth() &&
                event.clientY >= this.screenImage[1].getYPos() &&
                event.clientY <=
                    this.screenImage[1].getYPos() + this.screenImage[1].getImageWidth()) {
                this.currentClick++;
                console.log("Has been clicked - Home.ts: ", this.currentClick);
                console.log(this.currentClick);
            }
        };
        this.update = (frameIndex) => {
            this.draw();
        };
        this.isCompleted = () => {
            return this.currentClick > 0;
        };
        this.addMouseHandler();
        this.canvas = canvas;
        this.screenImage = [];
        this.screenImage = [new ScreenImage("Start-screen", 0, 0)];
        this.screenImage.push(new ScreenImage("Start-Button", this.canvas.width * 0.425, this.canvas.height / 2));
        this.currentClick = 0;
    }
    addMouseHandler() {
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.screenImage.forEach((screenImage) => {
            screenImage.draw(ctx);
        });
    }
}
class Introduction {
    constructor(canvas) {
        this.update = (frameIndex) => {
            this.draw();
        };
        this.mouseHandler = (event) => {
            console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);
            if (event.clientX >= this.screenImage[1].getXPos() &&
                event.clientX <
                    this.screenImage[1].getXPos() + this.screenImage[1].getImageWidth() &&
                event.clientY >= this.screenImage[1].getYPos() &&
                event.clientY <=
                    this.screenImage[1].getYPos() + this.screenImage[1].getImageWidth()) {
            }
        };
        this.canvas = canvas;
        this.screenImage = [];
        this.screenImage = [new ScreenImage("Start-screen", 0, 0)];
        this.screenImage.push(new ScreenImage("Start-Button", this.canvas.width * 0.425, this.canvas.height / 2));
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    addMouseHandler() {
        document.addEventListener("click", this.mouseHandler);
    }
}
class Main {
    constructor(canvas) {
        this.update = (frameIndex) => {
            this.draw();
        };
        this.mouseHandler = (event) => {
            console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);
            if (event.clientX >= this.screenImage[2].getXPos() &&
                event.clientX <
                    this.screenImage[2].getXPos() + this.screenImage[2].getImageWidth() &&
                event.clientY >= this.screenImage[2].getYPos() &&
                event.clientY <=
                    this.screenImage[2].getYPos() + this.screenImage[2].getImageWidth()) {
                this.player.bobux += this.article.bucks;
                this.player.credability -= this.article.credit;
                this.article = new PreSet();
                this.totalScore++;
                console.log("Yes has been clicked");
                console.log(this.player.bobux);
                console.log(this.player.credability);
            }
            else if (event.clientX >= this.screenImage[3].getXPos() &&
                event.clientX <
                    this.screenImage[3].getXPos() + this.screenImage[3].getImageWidth() &&
                event.clientY >= this.screenImage[3].getYPos() &&
                event.clientY <=
                    this.screenImage[3].getYPos() + this.screenImage[3].getImageWidth()) {
                this.article = new PreSet();
                console.log(this.screenImage[3]);
                console.log("No has been clicked");
            }
            else if (event.clientX >= this.screenImage[4].getXPos() &&
                event.clientX <
                    this.screenImage[4].getXPos() + this.screenImage[4].getImageWidth() &&
                event.clientY >= this.screenImage[4].getYPos() &&
                event.clientY <=
                    this.screenImage[4].getYPos() + this.screenImage[4].getImageWidth()) {
                console.log(this.screenImage);
                const index = this.screenImage.indexOf(this.screenImage[7]);
                if (index > -1) {
                    this.screenImage.splice(index, 1);
                }
                else {
                    this.screenImage[7] = new ScreenImage("Settings-screen", 0, 0);
                    console.log("Settings Button Has Been Clicked");
                }
            }
            else if (event.clientX >= this.screenImage[6].getXPos() &&
                event.clientX <
                    this.screenImage[6].getXPos() + this.screenImage[6].getImageWidth() &&
                event.clientY >= this.screenImage[6].getYPos() &&
                event.clientY <=
                    this.screenImage[6].getYPos() + this.screenImage[6].getImageWidth()) {
                console.log(this.screenImage);
                this.createShop();
                console.log("Settings Button Has Been Clicked");
            }
        };
        this.isCompleted = () => {
            return this.player.credability <= 0;
        };
        this.canvas = canvas;
        this.player = new Player(800, 10);
        this.screenImage = [];
        this.screenImage = [new ScreenImage("Background", 0, 0)];
        this.screenImage.push(new ScreenImage("Article-screen", 650, 350));
        this.screenImage.push(new ScreenImage("Yes-button", this.canvas.width * 0.72, this.canvas.height * 0.88));
        this.screenImage.push(new ScreenImage("No-button", this.canvas.width * 0.85, this.canvas.height * 0.88));
        this.screenImage.push(new ScreenImage("Settings-Button", this.canvas.width * 0.94, 0));
        this.screenImage.push(new ScreenImage("Bars-UI", 0, 0));
        this.screenImage.push(new ScreenImage("Shop-button", 0, this.canvas.height * 0.9));
        this.article = new PreSet();
        console.log(this.article.getArticle());
        this.totalScore = 0;
    }
    createShop() {
        console.log(this.screenImage);
        const index = this.screenImage.indexOf(this.screenImage[8]);
        if (index > -1) {
            this.screenImage.splice(index, 5);
        }
        else {
            this.screenImage[8] = new ScreenImage("Shop-menu", 0, 0);
            this.screenImage[9] = new ScreenImage("Buy-Button", this.canvas.width * 0.7025, this.canvas.height * 0.255);
            this.screenImage[10] = new ScreenImage("Buy-Button", this.canvas.width * 0.7025, this.canvas.height * 0.405);
            this.screenImage[11] = new ScreenImage("Buy-Button", this.canvas.width * 0.7025, this.canvas.height * 0.555);
            this.screenImage[12] = new ScreenImage("Buy-Button", this.canvas.width * 0.7025, this.canvas.height * 0.705);
            console.log("Settings Button Has Been Clicked");
        }
    }
    addMouseHandler() {
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.screenImage.forEach((screenImage) => {
            screenImage.draw(ctx);
        });
        const index = this.screenImage.indexOf(this.screenImage[7]);
        const text = "";
        const index2 = this.screenImage.indexOf(this.screenImage[12]);
        this.writeTextToCanvas(ctx, `Bobux: ${this.player.bobux}`, this.canvas.width * 0.04, this.canvas.height * 0.09, 34);
        if (index > -1) {
            this.writeTextToCanvas(ctx, text, 0, 0);
        }
        else if (index2 > -1) {
            this.writeTextToCanvas(ctx, text, 0, 0);
        }
        else {
            this.writeTextToCanvas(ctx, this.article.head, this.canvas.width * 0.7, this.canvas.height * 0.53, 24);
            this.writeTextToCanvas(ctx, this.article.auth, this.canvas.width * 0.7, this.canvas.height * 0.53 + 20, 12);
            this.writeMultiLineToCanvas(ctx, this.article.tex, 458, this.canvas.width * 0.7, this.canvas.height * 0.53 + 45);
            this.writeTextToCanvas(ctx, this.article.sour, this.canvas.width * 0.7, this.canvas.height * 0.8, 12);
        }
    }
    writeTextToCanvas(ctx, text, xCoordinate, yCoordinate, fontSize = 20, color = "black", alignment = "start") {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.globalAlpha = this.transparancy;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    writeMultiLineToCanvas(ctx, text, maxWidth, x, y, fontSize = 20, color = "black", alignment = "start") {
        const words = text.split(" ");
        const lines = [];
        let currentLine = words[0];
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        const lineHeight = ctx.measureText("M").width * 1.2;
        for (let i = 0; i < lines.length; ++i) {
            this.writeTextToCanvas(ctx, lines[i], x, y, 18);
            y += lineHeight;
        }
    }
    get score() {
        return this.totalScore;
    }
}
class Restart {
    constructor(canvas) {
        this.update = (frameIndex) => {
            this.draw();
        };
        this.isCompleted = () => {
            return this.player.credability <= 0;
        };
        this.canvas = canvas;
        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.player = new Player(9999999999999999, 9999999999999999);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
//# sourceMappingURL=app.js.map