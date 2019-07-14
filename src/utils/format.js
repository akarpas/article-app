/* Format titles that include digits at the beginning of the title */
const formatTitle = title => {
    const firstCharacterIndex = title.length && /[a-z]/i.exec(title).index;
    return title.substring(firstCharacterIndex, title.length);
};

module.exports = { formatTitle };