export default `

    :root {
        --black: #111;
        --grey: #4a4a4a;
        --white: #fff;
        --offWhite: #EDF2F4;
        --red: #8C031C;
        --pageWidth: 96rem;
    }

    html {
        font-size: 10px;
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        line-height: 1.5;
        background-color: var(--white);
    }

    .text-center {
        text-align: center;
    }

    h1,
    h2,
    h3,
    .h1,
    .h2,
    .h3 {
        font-weight: bold;
    }

    h1,
    h2,
    h3,
    .h1,
    .h2,
    .h3 {
        margin: 0 0 1.6rem;
    }

    .text-right {
        text-align: right;
    }
    .container {
        max-width: var(--pageWidth);
        margin: auto;
        padding: 0 2rem;
    }

    a,
    p,
    li {
        margin: 0;
        text-decoration: none;
    }

    p {
        margin-bottom: 1rem;
    }

    a {
        color: var(--black);
        &:hover {
            color: var(--red);
        }
    }

    .highlight {
        color: var(--red);
    }
`
