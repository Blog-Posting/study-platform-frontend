export class Feed {
  id: number;

  title: string;

  link: string;

  description: string;

  pubData: string;

  userName: string;

  userPictureUrl: string;

  constructor(
    id: number,
    title: string,
    link: string,
    description: string,
    pubData: string,
    userName: string,
    userPictureUrl: string,
  ) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.pubData = pubData;
    this.userName = userName;
    this.userPictureUrl = userPictureUrl;
  }
}

export default { Feed };
