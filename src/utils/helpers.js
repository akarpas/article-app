const helpers = {
    /* Format titles that include digits at the beginning of the title */
    formatTitle: title => {
        const firstCharacterIndex = title.length && /[a-z]/i.exec(title).index;
        return title.substring(firstCharacterIndex, title.length);
    },
    /* Function to filter the results according to the keyword
    from the input by checking title, authors and body. the "map"
    part of the chain is to add the correct index for linking
    to the article */
    filterArticles: (dataToFilter, searchTerm) => {
        return [...dataToFilter]
            .map((article, index) => ({ ...article, index }))
            .filter(
                article =>
                    article &&
                    (article.body.toLowerCase().includes(searchTerm) ||
                        article.title.toLowerCase().includes(searchTerm) ||
                        (article.authors &&
                            article.authors
                                .toString()
                                .toLowerCase()
                                .includes(searchTerm)))
            );
    }
};

export default helpers;
