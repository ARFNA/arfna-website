import { Author } from "./author";

export class Post {
    public id!: number;
    public title!: string;
    public markdown!: string;
    public author!: Author;
    public thumbnail!: string;
    public isSubmitted!: boolean;
    public isAccepted!: boolean;
    public isPublished!: boolean;
    public createdAt!: string;
    public lastUpdate!: string;

    constructor(title: string,
        markdown: string,
        id?: number,
        author?: Author) {
            this.title = title;
            this.markdown = markdown;
            if (author) {
                this.author = author;
            }
            if (id) {
                this.id = id;
            }
            
    }
}
