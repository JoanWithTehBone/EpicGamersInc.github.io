class Game {
  // The canvas
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;
  // Current Levels
  private levels: any[];
  private currentLevel: number;
  private player: Player;
  // Current frame number
  private frameIndex: number;

  public constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 1920;
    this.canvas.height = 1080;

    this.levels = [
      new Home(this.canvas),
      //new Introduction(this.canvas),
      new Main(this.canvas),
      new GameOver(this.canvas),
      new Restart(this.canvas),
    ];

    this.currentLevel = 0;
    this.frameIndex = 0;

    requestAnimationFrame(this.step);
  }

  /**
   * This MUST be an arrow method in order to keep the this constiable
   * working correctly. It will be overwritten by another object otherwise
   * caused by javascript scoping behaviour.
   */
  step = () => {
    //Reset the game and initialize the values again so variables work properly
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

    //If statement to check if the Game is over.
    if (level.isCompleted()) {
      document.removeEventListener("click", level.mouseHandler);
      this.currentLevel++;
      document.addEventListener("click", next.mouseHandler);
    }

    requestAnimationFrame(this.step);
  };
}
