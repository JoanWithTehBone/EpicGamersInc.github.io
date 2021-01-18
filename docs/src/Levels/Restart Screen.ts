class Restart {
  private canvas: HTMLCanvasElement;
  private player: Player;

  constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;
    this.canvas.width = 1920;
    this.canvas.height = 1080;

    this.player = new Player(9999999999999999, 9999999999999999);
  }

  public update = (frameIndex: number): void => {
    this.draw();
  };

  public isCompleted = (): boolean => {
    return this.player.credability <= 0;
  };

  private draw() {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext("2d");

    //Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
