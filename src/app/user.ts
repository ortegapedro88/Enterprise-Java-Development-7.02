export class User {
  constructor(
    private _name: string,
    private _occupation: string,
    private _email: string,
    private _subject: string,
    private _content: string
  ) {}

  public get name(): string {
    return this._name;
  }
  public get occupation(): string {
    return this._occupation;
  }
  public get email(): string {
    return this._email;
  }
  public get subject(): string {
    return this._subject;
  }
  public get content(): string {
    return this._content;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set occupation(occupation: string) {
    this._occupation = occupation;
  }
  public set email(email: string) {
    this._email = email;
  }
  public set subject(subject: string) {
    this._subject = subject;
  }
  public set content(content: string) {
    this._content = content;
  }
}
