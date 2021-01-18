class Main {
  public canvas: HTMLCanvasElement;
  private player: Player;
  private screenImage: ScreenImage[];
  public totalScore: number;
  private article: Article;
  private transparancy: number;

  constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;
    this.player = new Player(800, 10);

    this.screenImage = [];
    this.screenImage = [new ScreenImage("Background", 0, 0)];
    this.screenImage.push(new ScreenImage("Article-screen", 650, 350));
    this.screenImage.push(
      new ScreenImage(
        "Yes-button",
        this.canvas.width * 0.72,
        this.canvas.height * 0.88
      )
    );
    this.screenImage.push(
      new ScreenImage(
        "No-button",
        this.canvas.width * 0.85,
        this.canvas.height * 0.88
      )
    );
    this.screenImage.push(
      new ScreenImage("Settings-Button", this.canvas.width * 0.94, 0)
    );
    this.screenImage.push(new ScreenImage("Bars-UI", 0, 0));
    this.screenImage.push(
      new ScreenImage("Shop-button", 0, this.canvas.height * 0.9)
    );

    //Testing if getting a new article would log
    this.article = new PreSet();
    console.log(this.article.getArticle());

    this.totalScore = 0;
  }

  public update = (frameIndex: number): void => {
    this.draw();
  };

  /**
   * Handles the clicking of the Player in the canvas.
   * If he/she clicks on the yes or no button, add score
   * Else substract score
   * @param {MouseEvent} event - mouse event
   */
  private mouseHandler = (event: MouseEvent) => {
    console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);

    //If yes has been pressed, increment elements by 1. Otherwise, if no is clicked, decrement elements by 1
    if (
      event.clientX >= this.screenImage[2].getXPos() &&
      event.clientX <
        this.screenImage[2].getXPos() + this.screenImage[2].getImageWidth() &&
      event.clientY >= this.screenImage[2].getYPos() &&
      event.clientY <=
        this.screenImage[2].getYPos() + this.screenImage[2].getImageWidth()
    ) {
      //Adds new Article
      this.player.bobux += this.article.bucks;
      this.player.credability -= this.article.credit;
      this.article = new PreSet();
      this.totalScore++;
      //Debug
      console.log("Yes has been clicked");
      console.log(this.player.bobux);
      console.log(this.player.credability);
    } else if (
      event.clientX >= this.screenImage[3].getXPos() &&
      event.clientX <
        this.screenImage[3].getXPos() + this.screenImage[3].getImageWidth() &&
      event.clientY >= this.screenImage[3].getYPos() &&
      event.clientY <=
        this.screenImage[3].getYPos() + this.screenImage[3].getImageWidth()
    ) {
      this.article = new PreSet(); // <= write new article to canvas when yes or no is clicked
      //Debug
      console.log(this.screenImage[3]);
      console.log("No has been clicked");
      //Add name of what image is in this index
    } else if (
      event.clientX >= this.screenImage[4].getXPos() &&
      event.clientX <
        this.screenImage[4].getXPos() + this.screenImage[4].getImageWidth() &&
      event.clientY >= this.screenImage[4].getYPos() &&
      event.clientY <=
        this.screenImage[4].getYPos() + this.screenImage[4].getImageWidth()
    ) {
      //Debug
      console.log(this.screenImage);

      //Detects whether the settings button has been clicked or not
      const index = this.screenImage.indexOf(this.screenImage[7]);
      if (index > -1) {
        this.screenImage.splice(index, 1);
      } else {
        this.screenImage[7] = new ScreenImage("Settings-screen", 0, 0);
        console.log("Settings Button Has Been Clicked"); // <= debug
      }
    } else if (
      event.clientX >= this.screenImage[6].getXPos() &&
      event.clientX <
        this.screenImage[6].getXPos() + this.screenImage[6].getImageWidth() &&
      event.clientY >= this.screenImage[6].getYPos() &&
      event.clientY <=
        this.screenImage[6].getYPos() + this.screenImage[6].getImageWidth()
    ) {
      //Debug
      console.log(this.screenImage);
      this.createShop();
      console.log("Settings Button Has Been Clicked"); // <= debug
    }
  };

  private createShop() {
    //Debug
    console.log(this.screenImage);
    //Detects whether the settings button has been clicked or not
    const index = this.screenImage.indexOf(this.screenImage[8]);
    if (index > -1) {
      this.screenImage.splice(index, 5);
    } else {
      this.screenImage[8] = new ScreenImage("Shop-menu", 0, 0);
      this.screenImage[9] = new ScreenImage(
        "Buy-Button",
        this.canvas.width * 0.7025,
        this.canvas.height * 0.255
      );
      this.screenImage[10] = new ScreenImage(
        "Buy-Button",
        this.canvas.width * 0.7025,
        this.canvas.height * 0.405
      );
      this.screenImage[11] = new ScreenImage(
        "Buy-Button",
        this.canvas.width * 0.7025,
        this.canvas.height * 0.555
      );
      this.screenImage[12] = new ScreenImage(
        "Buy-Button",
        this.canvas.width * 0.7025,
        this.canvas.height * 0.705
      );
      console.log("Settings Button Has Been Clicked"); // <= debug
    }
  }

  public addMouseHandler() {
    document.addEventListener("click", this.mouseHandler);
  }

  private draw() {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext("2d");

    //Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw each image to the canvas
    this.screenImage.forEach((screenImage) => {
      screenImage.draw(ctx);
    });

    //Calling the fucntion to write all different text elements to the array
    // 0. Bobux
    // 1. Header
    // 2. Author
    // 3. Text
    // 4. Source
    const index = this.screenImage.indexOf(this.screenImage[7]);
    const text = "";
    const index2 = this.screenImage.indexOf(this.screenImage[12]);
    //Drawing the Bobux on Screen
    this.writeTextToCanvas(
      ctx,
      `Bobux: ${this.player.bobux}`,
      this.canvas.width * 0.04,
      this.canvas.height * 0.09,
      34
    );
    if (index > -1) {
      this.writeTextToCanvas(ctx, text, 0, 0);
    } else if (index2 > -1) {
      this.writeTextToCanvas(ctx, text, 0, 0);
    } else {
      this.writeTextToCanvas(
        ctx,
        this.article.head,
        this.canvas.width * 0.7,
        this.canvas.height * 0.53,
        24
      );
      this.writeTextToCanvas(
        ctx,
        this.article.auth,
        this.canvas.width * 0.7,
        this.canvas.height * 0.53 + 20,
        12
      );
      this.writeMultiLineToCanvas(
        ctx,
        this.article.tex,
        458,
        this.canvas.width * 0.7,
        this.canvas.height * 0.53 + 45
      );
      this.writeTextToCanvas(
        ctx,
        this.article.sour,
        this.canvas.width * 0.7,
        this.canvas.height * 0.8,
        12
      );
    }
  }

  /**
   * Writes text to the canvas
   * @param {string} text - Text to write
   * @param {number} fontSize - Font size in pixels
   * @param {number} xCoordinate - Horizontal coordinate in pixels
   * @param {number} yCoordinate - Vertical coordinate in pixels
   * @param {string} alignment - Where to align the text
   * @param {string} color - The color of the text
   * @param {number} transparancy - the opacity of the text
   */
  public writeTextToCanvas(
    ctx: CanvasRenderingContext2D,
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number = 20,
    color: string = "black",
    alignment: CanvasTextAlign = "start"
  ) {
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.globalAlpha = this.transparancy;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  public writeMultiLineToCanvas(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    x: number,
    y: number,
    fontSize: number = 20,
    color: string = "black",
    alignment: CanvasTextAlign = "start"
  ) {
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
      } else {
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
    //console.log(lines);
  }

  public get score(): number {
    return this.totalScore;
  }

  public isCompleted = (): boolean => {
    return this.player.credability <= 0;
  };
}
