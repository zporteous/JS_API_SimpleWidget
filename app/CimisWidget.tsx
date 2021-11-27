
import { subclass, property } from "esri/core/accessorSupport/decorators";

import Widget from "esri/widgets/Widget";

import { tsx, messageBundle } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-cimis-widget",
  emphasis: "esri-cimis-widget--emphasis"
};

@subclass("esri.widgets.CimisWidget")
class CimisWidget extends Widget {
   constructor(params?: any) {
    super(params);
  }

  //----------------------------------
  //  firstName
  //----------------------------------

  @property()
  firstName: string = "John";

  //----------------------------------
  //  lastName
  //----------------------------------

  @property()
  lastName: string = "Smith";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  emphasized: boolean = false;

  //----------------------------------
  //  messages
  //----------------------------------

  @property()
  @messageBundle("HelloWorld/assets/t9n/widget")
  messages: { greeting: any; } = null;

 
// Public method
render() {
  
  // const form = this._renderForm();
  const classes = {
    [CSS.emphasis]: this.emphasized
  };
  
    return (
    <div id="form">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
  
  // Private method

  // private _renderForm(): string {
  //   return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  // }

}

export = CimisWidget;