const base = `
    appearance: none;
    border-radius: 5px;
    border: 0;
    box-shadow: 0 5px 15px rgba(0,0,0,.3);
    cursor: pointer;
    padding: 1rem 1.5rem;
    text-decoration: none;
    text-align: center;
`

const primaryBtn = `
    ${base};
    background-color: var(--red);
    color: var(--white);
    &:hover,
    &:focus,
    &:active {
        color: var(--white);
        opacity: .9;
    }
`

const secondaryBtn = `
    ${base};
    background-color: var(--white);
    color: var(--black);
    &:hover,
    &:focus,
    &:active {
        color: var(--black);
        opacity: .9;
    }
`

export { primaryBtn, secondaryBtn }
