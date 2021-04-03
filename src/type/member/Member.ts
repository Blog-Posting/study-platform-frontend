export class Member {
  email: string;

  name: string;

  pictureUrl: string;

  constructor(email: string, name: string, pictureUrl: string) {
    this.email = email;
    this.name = name;
    this.pictureUrl = pictureUrl;
  }
}

export default { Member };
