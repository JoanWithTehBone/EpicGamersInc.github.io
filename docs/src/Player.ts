class Player {
  //Duplicated from Article class
  protected _bobux: number;
  protected _credability: number;

  constructor(startingBobux: number, startingCredability: number) {
    this._bobux = startingBobux;
    this._credability = startingCredability;
  }

  public get bobux(): number {
    return this._bobux;
  }

  public set bobux(value: number) {
    this._bobux = value;
  }

  public get credability(): number {
    return this._credability;
  }

  public set credability(value: number) {
    this._credability = value;
  }
}
