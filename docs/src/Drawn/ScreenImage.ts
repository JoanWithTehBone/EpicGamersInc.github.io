class ScreenImage {
  //All the properties needed to align the image on the screen
  public image: HTMLImageElement;
  private xPosition: number;
  private yPosition: number;
  public item: string;

  constructor(item: string, xPos: number, yPos: number) {
    this.image = this.loadNewImage(`assets/main-screen/${item}.png`);
    this.xPosition = xPos;
    this.yPosition = yPos;
  }

  public getXPos(): number {
    return this.xPosition;
  }

  public getYPos(): number {
    return this.yPosition;
  }

  public getImageWidth(): number {
    return this.image.width;
  }

  public getImageHeight(): number {
    return this.image.height;
  }

  /**
   * Draw all the necessary items to the screen
   */
  public draw(ctx: CanvasRenderingContext2D) {
    //Drawing Items to the screen
    //console.log(ctx);
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }

  //Loading images on the screen each frame
  private loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
