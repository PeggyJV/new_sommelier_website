import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/HeadSeo"

export default class extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Sommelier" description="Sommelier is the new Coprocessor for the Ethereum VM" image={null}/>
        <div className='jobs-container'>
            <div className='jobs-container-header'>
                <h1>Sommelier Jobs</h1>
            </div>
            <iframe
                src='https://sommelier.bamboohr.com/jobs/'
                className='jobs-container-bamboo'
            />
        </div>
      </Layout>
    )
  }
}
