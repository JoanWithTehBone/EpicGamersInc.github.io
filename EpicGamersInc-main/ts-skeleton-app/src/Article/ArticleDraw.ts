class ArticleDraw {
  private MainGame: Game;
  private testArticle: Article;
  private screenImage: ScreenImage[];

  constructor(canvas: HTMLCanvasElement) {
    this.testArticle = new PreSet();
    console.log(this.testArticle.getArticle());
  }

  public draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Test to display image
    this.screenImage.forEach((screenImage) => {
      screenImage.draw(ctx);
    });

    //Calling the fucntion to write all different text sources to the array
    // 1. Header
    // 2. Author
    // 3. Text
    // 4. Source
    this.writeTextToCanvas(
      ctx,
      this.testArticle.head,
      canvas.width * 0.65,
      canvas.height * 0.5,
      24
    );
    this.writeTextToCanvas(
      ctx,
      this.testArticle.auth,
      canvas.width * 0.65,
      canvas.height * 0.5 + 20,
      12
    );
    this.writeMultiLineToCanvas(
      ctx,
      this.testArticle.tex,
      458,
      canvas.width * 0.65,
      canvas.height * 0.5 + 45
    );
    this.writeTextToCanvas(
      ctx,
      this.testArticle.sour,
      canvas.width * 0.65,
      canvas.height * 0.8,
      12
    );
  }
  /**
   * Writes text to the canvas
   * @param {string} text - Text to write
   * @param {number} fontSize - Font size in pixels
   * @param {number} xCoordinate - Horizontal coordinate in pixels
   * @param {number} yCoordinate - Vertical coordinate in pixels
   * @param {string} alignment - Where to align the text
   * @param {string} color - The color of the text
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
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Canvas detection to that text is structured
   * @param ctx
   * @param text
   * @param maxWidth
   * @param x
   * @param y
   * @param fontSize
   * @param color
   * @param alignment
   */
  private writeMultiLineToCanvas(
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
}
