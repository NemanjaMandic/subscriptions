import { api } from '../shared/api';
import Template from '../model/Template';

class TemplatesService {
    async fetchTemplates() {
        const templatesArr = await api.get('/v1/templates');

        const templates = templatesArr.map(template => {
            return new Template(template);
        })

        return templates;
    }
}

export const templatesService = new TemplatesService();
