
import { subclass, property } from "esri/core/accessorSupport/decorators";
import Widget from "esri/widgets/Widget";
import { tsx, messageBundle } from "esri/widgets/support/widget";

const CSS = {
  base: "cimis-widget",
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

  @property()
  TodayDT:Date = new Date()
  TodayPretty:String = this.TodayDT.getFullYear()+'-'+(this.TodayDT.getMonth()+1)+'-'+this.TodayDT.getDate();

  @property()
// Public method
render() {
  return (
    <div>
      <h4> CIMIS Spatial API </h4>
      <p> Click anywhere on the map<br></br>to get readings </p>
      <label for="start"><strong>Choose a day..</strong> </label><br></br>
      <input type="date" id="start" name="trip-start"
       value={this.TodayPretty}
       max={this.TodayPretty}></input>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Evapotranspiraton (in) </th>
            <th scope="col">Average Solar Radiation (Ly/day)</th>
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