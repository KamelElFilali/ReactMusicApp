import React, { Component } from 'react'

import ResultatRechercheComponent from '../../component/recherche/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            result: []
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClicks (event) {
        console.log(event.currentTarget.getAttribute('data-key'), ' <---> ', event.currentTarget)
        return event.currentTarget.getAttribute('data-key')
        // console.log(event.currentTarget.getAttribute('data-key'), ' <---> ', event.currentTarget)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recherches', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const result = responseJson.results
                this.state.result = result
            })
    }

    render () {
        return (
            <div>
                {this.state.result.map((item, index) => <ResultatRechercheComponent key={index} textP={item.title} url={item.thumb} masterId={item.master_id} />)}
            </div>
        )
    }
}
export default ResultatRechercheContainer
