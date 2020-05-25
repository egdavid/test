import SessionRepository from "./SessionRepository";
import FormRepository from "./FormRepository";

const repositories = {
    form: FormRepository,
    session: SessionRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
