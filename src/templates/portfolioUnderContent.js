import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'
import SEO from '../components/seo';



export default ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} /> 
        <PortfolioItems />
    </Layout>
)