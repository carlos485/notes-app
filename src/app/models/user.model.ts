export class User {
  constructor(
    public name: string,
    public email: string,
    public token: string
  ) {}

  public static fromLogin(obj: any, token: string): User {
    return new User(obj['name'], obj['email'], token);
  }
}
