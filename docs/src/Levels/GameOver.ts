class GameOver {
  public canvas: HTMLCanvasElement;
  private main: Main;
  private screenImage: ScreenImage[];
  private currentClick: number;
  private player: Player;
  private total: number;

  constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;
    this.canvas.width = 1920;
    this.canvas.height = 1080;

    this.currentClick = 0;
    this.screenImage = [];
    this.screenImage = [new ScreenImage("Gameover-screen", 0, 0)];
    this.screenImage.push(
      new ScreenImage(
        "Restart-button",
        this.canvas.width * 0.425,
        this.canvas.height / 2
      )
    );
  }

  /**
   * Handles the clicking of the Player in the canvas.
   * If he/she clicks on the yes or no button, add score
   * Else substract score
   * @param {MouseEvent} event - mouse event
   */
  private mouseHandler = (event: MouseEvent) => {
    console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);

    //If Restart has been pressed, increment elements by 1.
    if (
      event.clientX >= this.screenImage[1].getXPos() &&
      event.clientX <
        this.screenImage[1].getXPos() + this.screenImage[1].getImageWidth() &&
      event.clientY >= this.screenImage[1].getYPos() &&
      event.clientY <=
        this.screenImage[1].getYPos() + this.screenImage[1].getImageWidth()
    ) {
      this.currentClick++;

      console.log(this.currentClick); // <= debug
      console.log("Has been clicked: ", this.currentClick); // <= debug
    }
  };

  //Draw items each frame when update is called
  public update = (frameIndex: number): void => {
    this.draw();
  };

  //Determines when a level is completed
  public isCompleted = (): boolean => {
    return this.currentClick > 0;
  };

  //Create a mouseHandler on this level
  public addMouseHandler() {
    document.addEventListener("click", this.mouseHandler);
  }

  /**
   * Writes text to the screen
   * @param ctx
   * @param text
   * @param xCoordinate
   * @param yCoordinate
   * @param fontSize
   * @param color
   * @param alignment
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

  private draw() {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext("2d");
    //Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //Draw each image to the canvas
    this.screenImage.forEach((screenImage) => {
      screenImage.draw(ctx);
    });
    this.writeTextToCanvas(
      ctx,
      `${this.total}`,
      this.canvas.width / 2,
      this.canvas.height / 2,
      16
    );
  }
}
