import React from 'react';
import { render } from 'react-dom';

import { hashHistory } from 'react-router';
import RouteMap from './router/routeMap';

// 测试 fetch 的功能
import { getData, postData } from './fetch/test.js'
// import { getData, postData } from './fetch/data.js'
getData();
postData();

class Hello extends React.Component {
    render() {
        return (
            <p>hello world ~~~~~111</p>
        )
    }
}

render(
    <Hello />,
    document.getElementById('root')
)

