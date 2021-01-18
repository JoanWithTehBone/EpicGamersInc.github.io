abstract class Article {
  //these are invisable stats to the article
  protected bobux: number;
  protected credability: number;

  //these can be used to construct an article
  protected _header: string;
  protected _author: string;
  protected _text: string;
  protected _source: string;

  //function to get all the information/elements inside a preset article
  getArticle(): string {
    return this.head + this.auth + this.tex + this.sour;
  }

  //Getter and Setter for the header
  public get head(): string {
    return this._header;
  }

  //Setter
  public set head(value: string) {
    this._header = value;
  }

  //Getter and Setter for the author
  public get auth(): string {
    return this._author;
  }

  //Setter
  public set auth(value: string) {
    this._author = value;
  }

  //Getter and Setter for the text
  public get tex(): string {
    return this._text;
  }

  //Setter
  public set tex(value: string) {
    this._text = value;
  }

  //Getter and Setter for the source
  public get sour(): string {
    return this._source;
  }

  //Setter
  public set sour(value: string) {
    this._source = value;
  }

  //Getter and Setter for Bobux inside of Articles
  public get bucks(): number {
    return this.bobux;
  }

  public set bucks(value: number) {
    this.bobux = value;
  }

  //Getter and Setter for credability
  public get credit(): number {
    return this.credability;
  }

  public set credit(value: number) {
    this.credability = value;
  }
}
