import { Author } from "./author";

export class Post {
    public id!: number;
    public title!: string;
    public markdown!: string;
    public author!: Author;
    public isSubmitted!: boolean;
    public isAccepted!: boolean;
    public isPublished!: boolean;
    public createdAt!: string;
    public lastUpdate!: string;

    constructor(title: string,
        markdown: string,
        author: Author) {
            this.title = title;
            this.markdown = markdown;
            this.author = author;
    }
}
