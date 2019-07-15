import helpers from '../src/utils/helpers';

const { formatTitle } = helpers;

it('formats a title and removes non alpha characters from beginning of string', () => {
    const title = '123 |Test Title';
    const expectedTitle = 'Test Title';
    const formattedTitle = formatTitle(title);

    expect(formattedTitle).toEqual(expectedTitle);
});
