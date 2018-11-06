import React, { Component } from 'react';


export default class Form extends Component {
    render() {
        return (
            <form>
                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"/>
                    <small id="emailHelp" class="form-text text-muted">That way we know who we're conversating with!</small>
                </div>
                <div class="form-group col-lg-4">
                    <label for="exampleInputPassword1">Intention of Website</label>
                    <input type="text-area" class="form-control" id="exampleInputPassword1" placeholder="e.i photography website, portfolio website...etc" />
                </div>
                <div class="form-check col-lg-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}
