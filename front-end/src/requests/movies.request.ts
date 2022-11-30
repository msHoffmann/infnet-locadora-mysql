import instance from "../services/api";
import { IResponseMovie } from "../interfaces/IMovies";

export const getMovies = async ():Promise<IResponseMovie>  => {
    const {data} = await instance.get<IResponseMovie>('/movies-api/movies')
    return data;
}


