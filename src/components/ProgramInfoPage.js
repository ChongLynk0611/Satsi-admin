import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useFetch from './CustomHooks/useFetch';
import { Wrapper, InforContainer } from "./styled";

const ProgramInfoPage = () => {
    const {id} = useParams();
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Categories/' + id);
    const history = useHistory();

    setTimeout(function(){
        window.scrollTo(0,0);
    }, 100)

    return (  
        <Wrapper>
            <InforContainer>
                <button onClick={() => history.push('/')} className="fas fa-arrow-left"></button>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { data && (
                    <Fragment>
                        <h1>{data.data.CategoryName}</h1>
                        <div dangerouslySetInnerHTML={{__html: data.data.Content}}></div>
                    </Fragment>
                )}
            </InforContainer>
        </Wrapper>
    );
}
 
export default ProgramInfoPage;