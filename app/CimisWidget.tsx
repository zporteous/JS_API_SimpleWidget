
import { subclass, property } from "esri/core/accessorSupport/decorators";
import Widget from "esri/widgets/Widget";
import { tsx } from "esri/widgets/support/widget";
tsx;

const CSS = {
  base: "cimis-widget",
};

interface CimisReponseReading {
  Value:String,
  Qc:string,
  Unit:string
}

interface CimisResponse {
  Coordinate:string,
  Date: string,
  DayAsceEto: CimisReponseReading,
  DaySolRadAvg: CimisReponseReading,
  Julian:string,
  Scope:string,
  Standard:string,
  ZipCodes:string
}

@subclass("esri.widgets.CimisWidget")
class CimisWidget extends Widget {
   constructor(params?: any) {
    super(params);
  }

  //----------------------------------
  //  define class properties here
  //----------------------------------

  @property()
  Data:Array<CimisResponse> = [];

  @property()
  Status: string = "Tool is idle";

  @property()
  TodayDT:Date = new Date();

  @property()
  TodayPretty:String = this.TodayDT.getFullYear()+'-'+(this.TodayDT.getMonth()+1)+'-'+this.TodayDT.getDate();

  @property()
  sd:String = this.TodayPretty;

  @property()
  ed:String = this.TodayPretty;

  // private methods

  private _sDateHandler(e:Event) { 
    let target = e.currentTarget as HTMLInputElement;
    console.log(`changed sd to ${target.value}`)
    this.sd = target.value
    console.log(this.sd)
  }

  private _eDateHandler(e:Event) { 
    let target = e.currentTarget as HTMLInputElement;
    console.log(`changed ed to ${target.value}`)
    this.ed = target.value
  }

  private _renderData(arr:Array<CimisResponse>) {
    if (this.Data.length == 0) {
      return (<h5>No data yet...</h5>)
    } 
    else {
      return (
        <tbody>
          {
          this.Data.map((row) => {
            return (

              <tr id={row.Date}>
                <td>{row.DayAsceEto.Value}</td>
                <td>{row.DaySolRadAvg.Value}</td>
                <td>{row.Date}</td>
              </tr>

              )
            })
          }
        </tbody>
      )
    }
  }

render() {
  const table = this._renderData(this.Data)
  
  return (
    <div class={CSS.base}>
      <h4> CIMIS Spatial API </h4>
      <ul>
        <li><p> This simple application retrieves data<br/> for the last week from <a href='https://cimis.water.ca.gov/' target='_blank'>CIMIS</a> </p></li>
        <p> Click anywhere on the map<br></br>to get readings... </p>
      </ul>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Evapotranspiraton (in) </th>
            <th scope="col">Average Solar Radiation (Ly/day)</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        {table} 
      </table>
      <h6>Status: {this.Status}</h6>
    </div>
  );
}
  
  // Private method
}

export = CimisWidget;