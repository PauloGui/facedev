import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background: #f3f2ef;
        -webkit-font-smoothing: antialiased !important;
    }
`