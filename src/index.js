import { h, render } from 'preact';
import './index.scss';


function Index() {
    return <div id="index">hello world</div>;
}


render(<Index/>, document.body, document.getElementById('index'));
