import React, {useState} from 'react'
import PropTypes from 'prop-types'
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuIcon from '@material-ui/icons/Menu';

import NavItem from '../NavItem/NavItem';

import Logo from '../../../../images/logo.png';

import './NavLeft.css';

const ListItem = [
    {
        icon: <PostAddIcon style={{fontSize:"24px"}}/>,
        content:"Đăng bài"
    },
    {
        icon: <MenuIcon style={{fontSize:"24px"}}/>,
        content:"Thêm danh mục"
    }
]

function NavLeft(props) {
    const [indexFocus, setIndexFocus] = useState(0);

    const onClick = (index) => {
        return () => {
            setIndexFocus(index);
        }
    }

    return (
        <div className="NavLeft">
            <div className="overlay"></div>
            <div className="NF-body">
                <div className="NL-title">
                    <img  src={Logo} alt="Logo"/>
                </div>
                <div className="NL-ListItem">
                    {
                        ListItem.map((item, index) => {
                            if(index === indexFocus){
                                return(
                                    <NavItem 
                                        item={item} 
                                        isFocus={true} 
                                        key={index}
                                        onClick = {onClick(index)}
                                    />
                                ) 
                            }
                            return(
                                <NavItem 
                                    item={item} 
                                    isFocus={false} 
                                    key={index}
                                    onClick = {onClick(index)}
                                />
                            ) 
                        })
                    }
                </div>
            </div>
        </div>
    )
}

NavLeft.propTypes = {

}

export default NavLeft

