import { Subscriber } from "./subscriber";

export class MSubscriber {
    constructor(public version: string,
        public mutation: string,
        public subscriber: Subscriber) {
    }
}
