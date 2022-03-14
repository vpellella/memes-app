export class MemeResponse {
    success!: string
    data!: {
        "memes": {
            id: number,
            name: string,
            url: string,
            width: number,
            height: number,
            box_count: number
        }[]
    };
}

// export class Meme {
//     id!: number;
//     name!: string;
//     url!: string;
//     width!: number;
//     height!: number;
//     box_count!: number;
// }