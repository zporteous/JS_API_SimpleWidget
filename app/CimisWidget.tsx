
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
  //  define class properties here
  //----------------------------------

  @property()
  Asce: string = "No data...";

  @property()
  Rad: string = "No data...";

  @property()
  Status: string = "Tool is idle";

// Public method
render() {
  return (
    <div>
      <h4> CIMIS Spatial API </h4>
      <h6> Click anywhere on the map<br></br>to get readings </h6>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Evapotranspiraton (in) </th>
            <th scope="col">Average Solar Radation (Ly/day)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{this.Asce}</td>
            <td scope="row">{this.Rad}</td>
          </tr>
        </tbody>
      </table>
      <h6>Status: {this.Status}</h6>
    </div>
  );
}
  
  // Private method

}

export = CimisWidget;