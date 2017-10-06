import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subPage/List'


class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <SearchList keyword={this.props.params.keyword} category={this.props.params.category} />
            </div>
        )
    }
}

export default Search
