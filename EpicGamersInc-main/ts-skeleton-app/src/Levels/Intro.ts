class Introduction {
  public canvas: HTMLCanvasElement;
  private screenImage: ScreenImage[];

  constructor(canvas: HTMLElement) {
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
  }

  public update = (frameIndex: number): void => {
    this.draw();
  };

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
    }
  };

  private draw() {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext("2d");

    //Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public addMouseHandler() {
    document.addEventListener("click", this.mouseHandler);
  }
}
