## Hello Homie Developers! The challenge was also deployed in vercel through the following link!

https://github-clone-one.vercel.app/yknx4

### Decision design
* I decided not use React context o Redux because it was a small app.
* Elements with no interaction (like follow buttons or other) were discarded

### What would have improved
* A better control of font size through CSS variables
* A better decision would have been to use SASS to have styles nested
* The search bar only find on the actual list of repositories showed in the page and not all the user repositories. One probable solution would be handled the search information into another component, and this fetch and find into all the repo data.
* The find algorithm of the search bar is very dependent of his father (repoList), this reduces the reusability of it cause each element has to be independent of others. This could be resolved by React context or Redux since these can interact directly with the state.

### Miscellaneous
* The project wasn't a parser code, this causes multiples error with the typescript types, it was resolved with @typescript-eslint/parser added to an eslintrc config