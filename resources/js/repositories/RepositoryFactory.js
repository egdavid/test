import FormRepository from "./FormRepository";

const repositories = {
    form: FormRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
