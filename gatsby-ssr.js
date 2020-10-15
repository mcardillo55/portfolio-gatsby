/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const { Helmet } = require("react-helmet")

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()
    headComponents.push(
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />,
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />,
            <script src="https://kit.fontawesome.com/afb8e7f539.js" crossorigin="anonymous"></script>,
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />,
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA" crossorigin="anonymous" />)
    headComponents.sort((x, y) => {
        if (x.type === 'style') {
            return 1
        } else if (y.type ==='style') {
            return -1
        }
        return 0
    })
    replaceHeadComponents(headComponents)
}