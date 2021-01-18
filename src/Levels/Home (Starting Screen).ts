class Home {
  public canvas: HTMLCanvasElement;
  private screenImage: ScreenImage[];
  private game: Game;

  private currentClick: number;

  constructor(canvas: HTMLElement) {
    this.addMouseHandler();
    this.canvas = <HTMLCanvasElement>canvas;

    this.screenImage = [];
    this.screenImage = [new ScreenImage("Start-screen", 0, 0)];
    this.screenImage.push(
      new ScreenImage(
        "Start-Button",
        this.canvas.width * 0.425,
        this.canvas.height / 2
      )
    );

    this.currentClick = 0;
  }
  /**
   * Handles the clicking of the Player in the canvas.
   * If he/she clicks on the yes or no button, add score
   * Else substract score
   * @param {MouseEvent} event - mouse event
   */
  private mouseHandler = (event: MouseEvent) => {
    console.log(`this.xPos ${event.clientX}, this.yPos ${event.clientY}`);

    //If start has been pressed, increment elements by 1.
    if (
      event.clientX >= this.screenImage[1].getXPos() &&
      event.clientX <
        this.screenImage[1].getXPos() + this.screenImage[1].getImageWidth() &&
      event.clientY >= this.screenImage[1].getYPos() &&
      event.clientY <=
        this.screenImage[1].getYPos() + this.screenImage[1].getImageWidth()
    ) {
      //Increments the amount of clicks
      this.currentClick++;

      console.log("Has been clicked - Home.ts: ", this.currentClick); // <= debug
      console.log(this.currentClick); // <= debug
    }
  };
  //Draw items each frame when update is called
  public update = (frameIndex: number): void => {
    this.draw();
  };

  //Checks if level has been completed
  public isCompleted = (): boolean => {
    return this.currentClick > 0;
  };

  //Create a mouseHandler on this level
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
  }
}
