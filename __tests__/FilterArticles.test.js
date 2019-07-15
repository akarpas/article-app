import helpers from '../src/utils/helpers';
import { data } from '../src/data/articles.json';

const { filterArticles } = helpers;

it('filters some data from the original JSON', () => {
    const filtered = filterArticles(data, 'google');

    expect(filtered.length).toBeLessThan(data.length);
});

it('filters specific article from the original JSON', () => {
    const searchTerm = 'greek';
    const filtered = filterArticles(data, searchTerm);

    expect(filtered.length).toEqual(1);
    expect(filtered[0].body.toLowerCase()).toContain(searchTerm);
});