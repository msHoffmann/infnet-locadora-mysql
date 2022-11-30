export interface IMovie {
    "id": number,
    "title": string,
    "description": string,
    "year": number,
    "createdAt": string,
    "updatedAt": string,
    "deletedAt": string | null,
    "Genres": IGenre[]
}

export interface IGenre {
     "description": string
}

export interface IResponseMovie{
    'Total Movies': string,
    Movies: IMovie[]
};