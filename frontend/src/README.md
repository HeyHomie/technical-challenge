## Growth decisions

Sorry for this PR, but at the moment, I can not invest enough time to complete the challenge; on the other hand, please check out these notes I came up with while thinking about the solution.

### Tradeoff

From my perspective, I think the excellent solution for the challenge is using NextJS, because the router system based on files is more efficient.
Now users are looking for efficient and fast services, and NextJS provides SSR or SSG; I know it is totally out of scope, but if we think it is maintainable and offers good performance and features in the long term.

Typescript is the solution to create good practices and order in the components, but a good combination with that is Styled components because Github has an excellent design system available for all kinds of users: https://primer.style/react/Header

With Styled components, we create tons of functionalities with the css, but with postCss and Sass we have other good possibilities to move faster. It is an exciting topic to discuss with the team :)

Another robust framework to maintain and create an order in the components is a storybook with atomic design (divide and conquer)

The interfaces and custom hooks allow us to create reusable code, but writing good documentation about the inputs, outputs, and considerations will be the key when other teammates use those parts of the code.

Finally, to guarantee the quality of the code, write some tests or take snapshots of the components to identify which components changes and, if is necessary, create tests about the data retrieved for the external API
