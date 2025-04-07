import http from "../http-common";
import ITutorialData from "../types/Tutorials";

const getAll = () => {
    return http.get<Array<ITutorialData>>("/tutorials");
    };

const get = (id: string) => {
    return http.get<ITutorialData>(`/tutorials/${id}`);
    };

const create = (data: ITutorialData) => {
    return http.post<ITutorialData>("/tutorials", data);
    };

const update = (id: string, data: ITutorialData) => {
    return http.put<ITutorialData>(`/tutorials/${id}`, data);
    };

const remove = (id: string) => {    
    return http.delete<ITutorialData>(`/tutorials/${id}`);
    };

const removeAll = () => {
    return http.delete<Array<ITutorialData>>("/tutorials");
    };

const findByTitle = (title: string) => {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
    };

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};        
export default TutorialService;


