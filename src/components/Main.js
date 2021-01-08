import PropTypes from 'prop-types'
import React from 'react'
import Layout from './layout'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Layout>
          {/* <SEO title="Planbus website in construction!" /> */}
          <div className="gatsby-image-wrapper">LALALALA</div>
        </Layout>
      </div>
    )
  }
}

export default Main
