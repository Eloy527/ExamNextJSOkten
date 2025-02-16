export interface IRecipe {
    id: number;
    name: string;
    image: string;
    tags: { [key: string]: string };
}
