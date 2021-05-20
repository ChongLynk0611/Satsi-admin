import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as Yup from 'yup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import NavLeft from '../Admin/NavLeft/NavLeft';

import './AdminPage.css';

const listMenu = [
    {
        id:1, 
        subName:"Du học Đức",
        Categories:[
            {
                id:1,
                CategoryName:"Nấu ăn"
            },
            {

                id:2,
                CategoryName:"Quản trị khách sạn"
            }
        ]
    },
    {
        id:2, 
        subName:"du học Úc",
        Categories:[
            {
                id:3,
                CategoryName:"Lái đò"
            },
            {

                id:4,
                CategoryName:"Lái taxi"
            }
        ]
    }

]
function AdminPage(props) {
    const [text, setText] = useState();
    
    const initValues = {
        id_categories:'',
        idSubmenu:listMenu[0].id,
        content:''
    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="AdminPage">
            <NavLeft />
            <div className="Admin-body">
                <h2>Nội dung tuyển dụng</h2>
                <Formik
                    initialValues={initValues}
                    onSubmit = {handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className="formSubmit">
                            <InputLabel id="handle" style={{fontSize:"16px"}}>Hình thức tuyển</InputLabel>
                            <Select
                                labelId="handle"
                                id="handle"
                                value={values.idSubmenu}
                                name="idSubmenu"
                                onChange={handleChange}
                                style={{fontSize:"16px", width:"20%", margin:"10px 0"}}
                            >
                                {
                                    listMenu.map((item, index) => (
                                        <MenuItem value={item.id} key={index}>{item.subName}</MenuItem>
                                    ))
                                }
                            </Select>
                            <Select
                                labelId="handle"
                                id="handle"
                                value={values.id_categories}
                                name="id_categories"
                                onChange={handleChange}
                                style={{fontSize:"16px", width:"20%", margin:"10px 0"}}
                            >
                                {
                                    listMenu.find(submenu => submenu.id === values.idSubmenu).Categories.map((Item, index) => (
                                        <MenuItem value={Item.id} key={index}>{Item.CategoryName}</MenuItem>
                                    ))
                                }
                            </Select>
                            {
                                
                            }
                            <CKEditor
                                editor={ ClassicEditor }
                                data={text}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setText(data);
                                    values.content = data;
                                }}
                                // onBlur={ handleBlur }
                                name="content"
                            />
                            <button type="submit">Submit</button>
                        </form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

AdminPage.propTypes = {
    
}

export default AdminPage

