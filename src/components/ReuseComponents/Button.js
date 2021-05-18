import ScrollTo from "react-scroll-into-view";
import styled from 'styled-components';

import { Button as Btn } from '../styled/index';

const Button = (props) => {
    return (
        <ScrollToThis selector="#contactForm">
            <Btn>
                {props.children}
            </Btn>
        </ScrollToThis>
    );
}

const ScrollToThis = styled(ScrollTo)`
    display: inline-block;
`

export default Button;