import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'
// import styled from 'styled-components';
import SEO from '../components/seo';



export default ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} /> 
        {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} /> */}
        <PortfolioItems />
    </Layout>
)