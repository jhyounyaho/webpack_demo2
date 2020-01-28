import _ from 'lodash';
import './style.css';
import './hello.scss';

console.log('src/index.js');
cost component = () => {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], '');

    return element;
}

document.body.appendChild(component());