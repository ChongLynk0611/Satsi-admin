import React, {useState, useEffect} from 'react'
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

import CategoryApi from '../../api/CategoryApi';

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
    const [content, setContent] = useState();
    const [detail, setDetail] = useState();
    const [submenu, setSubmenu] = useState();

    const initValues = {
        CategoryName:'',
        subMenuId:'',
        Content:'',
        Detail:'',
        Image:null
    }

    useEffect(() => {
        // call api submenu về và setMenu
        const getSubmenu = async () => {
            try {
                const response = await CategoryApi.getSubmenu();
                setSubmenu(response.data);
            } catch (error) {
                console.log("failed fetch submenu: ", error);
            }
        }

        getSubmenu();
        console.log(submenu);
    }, []);

    const handleSubmit = (values) => {
        const postCategory = async (values) => {
            try {
                const response = await CategoryApi.postCategory(values);
                console.log(response);
            } catch (error) {
                console.log("failed post category: ", error);
            }
        }
        console.log(values);
        // postCategory(values);
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
                            {   submenu &&<Select
                                    labelId="handle"
                                    id="handle"
                                    value={values.subMenuId}
                                    name="subMenuId"
                                    onChange={handleChange}
                                    style={{fontSize:"16px", width:"20%", margin:"10px 0"}}
                                >
                                    {
                                        submenu.map((item, index) => (
                                            <MenuItem value={item.id} key={index}>{item.Title}</MenuItem>
                                        ))
                                    }
                                </Select>
                            }   
                            <p className="CategoryName">Ngành nghề :</p>
                            <input 
                                name="CategoryName"
                                value={values.CategoryName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="Input-category"
                            />
                            <p>Nội dung:</p>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setContent(data);
                                    values.Content = data;
                                }}
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                // onBlur={ handleBlur }
                                name="Content"
                            />
                            <p>Chi tiết:</p>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={detail}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDetail(data);
                                    values.Detail = data;
                                }}
                                // onBlur={ handleBlur }
                                name="Detail"
                            />
                            <input 
                                type="file" 
                                value={values.Image}
                                onChange={handleChange}
                                name="Image"
                            />
                            <button className="btn-submit" type="submit">Đăng tải</button>
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

