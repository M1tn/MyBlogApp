import React, { Component } from 'react';

import classnames from "classnames";
import CKEditor from "react-ckeditor-component";
import Select from 'react-select'

import EclipseWidget from '../Eclipse';
import { connect } from 'react-redux';


class AddPost extends Component {


    constructor(props) {
        super(props);
        this.state = {

            data: "",
            name: "",
            short_description: "",
            errors: {

            }


        }
    }




    setStateByErrors = (name, value) => {

        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                }
            )
        }
        else {
            this.setState(
                { [name]: value })
        }
    }



    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
        //console.log(this.state);
    }
    updateContent = (newContent) => {
        this.setState({
            content: newContent
        })
    }


    onChange = (evt) => {
        //console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        //console.log("SSSSS", evt.editor.getData())
        this.setState({
            data: newContent
        })
    }


    render() {
        const { errors, short_description, name } = this.state;

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]

        return (
            <>
                <div className="login-form">

                    <div className="row justify-content-center">

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">Додати статтю</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit} action="" method="">

                                        <div className="form-group row">
                                            <label htmlFor="name"
                                                className="col-md-2 col-form-label text-md-right">Назва</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    value={name}
                                                    onChange={this.handleChange}
                                                    id="name"
                                                    className={classnames('form-control')}
                                                    name="name" />
                                                {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                                            </div>
                                        </div>


                                    

 <div className="form-group row">
                                            <label htmlFor="name"
                                                className="col-md-2 col-form-label text-md-right">Категорія</label>
                                            <div className="col-md-10">
                                            <Select options={options} />
                                                {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                                            </div>
                                        </div>




                                        <div className="form-group row">
                                            <label htmlFor="short_description"
                                                className="col-md-2 col-form-label text-md-right">Короткий опис</label>
                                            <div className="col-md-10">
                                                <textarea rows="5" type="text"
                                                    value={short_description}
                                                    onChange={this.handleChange}

                                                    id="short_description"
                                                    className={classnames('form-control')}
                                                    name="short_description" />
                                                {!!errors.short_description ? <span className="help-block">{errors.short_description}</span> : ''}
                                            </div>
                                        </div>

                                        <div className="App">

                                            <CKEditor onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                                                content={this.state.data}
                                                events={{
                                                    "change": this.onChange
                                                }} data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />

                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default AddPost;