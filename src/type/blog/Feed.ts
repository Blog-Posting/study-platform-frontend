export class Feed {
  id: number;

  title: string;

  link: string;

  description: string;

  pubData: string;

  constructor(id: number, title: string, link: string, description: string, pubData: string) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.pubData = pubData;
  }
}

export default { Feed };
