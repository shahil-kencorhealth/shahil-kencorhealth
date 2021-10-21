import * as React from "react";
import {
  ScheduleComponent,
  Year,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
// import { extend } from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { useDispatch, useSelector } from "react-redux";
import { getPatientDashboard } from "../../redux/action";
import { useEffect } from "react";
import { PatientData, Store } from "../../redux/Actions";
import { Spinner } from "reactstrap";

interface DashboardData {
  createTime: Date;
  alertLevel: string;
  alertReason: string;
  patientId: string;
  zipCode: string | null;
  vitalsMeasurement: string | null;
}
export default function Calender(props: any) {
  console.log(props.id);
  const initialState: DashboardData[] = [];
  var nowdate = new Date();
  var monthStartDay = new Date(nowdate.getFullYear(), nowdate.getMonth(), 1);
  var monthEndDay = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatientDashboard(props.id,monthStartDay.getTime(),monthEndDay.getTime()));
  }, []);
  const [dashboardData, setDashBoardData] = React.useState(initialState);

  const loading: any = useSelector(
    (state: Store) => state.patientViewReducer.isCalenderLoading
  );
  console.log(loading);
  const patientDashboardData = useSelector(
    (state: Store) => state.patientViewReducer.data
  );
  useEffect(() => {
    const data = patientDashboardData.map((data: DashboardData) => {
      var epoch: Date = new Date(data.createTime);
      return {
        createTime: epoch,
        alertLevel: data.alertLevel,  
        alertReason: data.alertReason,
        patientId: data.patientId,
        zipCode: data.zipCode,
        vitalsMeasurement: data.vitalsMeasurement,
      };
    });
    setDashBoardData(data);
  }, [patientDashboardData]);
  console.log(dashboardData)
  function onRenderCell(args: any) {
    var z = null;
    if (args.elementType == "workCells" || args.elementType == "monthCells") {
      for (let i = 0; i < dashboardData.length; i++) {
        if (
          args.date.toLocaleDateString("en-US") ===
          dashboardData[i].createTime.toLocaleDateString("en-US")
        ) {
        
          if (i !== dashboardData.length - 1) {
            if (
              dashboardData[i].createTime.toLocaleDateString("en-US") ===
              dashboardData[i + 1].createTime.toLocaleDateString("en-US")
            ) {
            
            } else {
              if (dashboardData[i].alertLevel === "yellow") {
                z = document.createElement("div");
                z.className = "templatewrap";
                z.innerHTML = "<img height= 20px src='img/yellow.png' />";
                args.element.appendChild(z);
              } else if (dashboardData[i].alertLevel === "red") {
                z = document.createElement("div");
                z.className = "templatewrap";
                z.innerHTML = "<img height= 20px src='img/red.png' alt=red />";
                args.element.appendChild(z);
              } else if (dashboardData[i].alertLevel === "green") {
                z = document.createElement("div");
                z.className = "templatewrap";
                z.innerHTML =
                  "<img height= 20px src='img/green.png'  alt=green />";
                args.element.appendChild(z);
              } else if (dashboardData[i].alertLevel === "orange") {
                z = document.createElement("div");
                z.className = "templatewrap";
                z.innerHTML =
                  "<img height= 20px src='img/orange.png'  alt=orange />";
                args.element.appendChild(z);
              }
            }
          } else {
            if (dashboardData[i].alertLevel === "yellow") {
            } else if (dashboardData[i].alertLevel === "red") {
              z = document.createElement("div");
              z.className = "templatewrap";
              z.innerHTML = "<img height= 20px src='img/red.png' alt=red />";
              args.element.appendChild(z);
            } else if (dashboardData[i].alertLevel === "green") {
              z = document.createElement("div");
              z.className = "templatewrap";
              z.innerHTML =
                "<img height= 20px src='img/green.png'  alt=green />";
              args.element.appendChild(z);
            } else if (dashboardData[i].alertLevel === "orange") {
              z = document.createElement("div");
              z.className = "templatewrap";
              z.innerHTML =
                "<img height= 20px src='img/orange.png'  alt=orange />";
              args.element.appendChild(z);
            }
          }
        }
      }
    }
  }

  return (
    <div className="container">
      {loading == true ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner>
            <span></span>
          </Spinner>{" "}
        </div>
      ) : (
        <ScheduleComponent
       
          width="100%"
          height="550px"
          selectedDate={new Date(2021, 9, 15)}
          renderCell={(e: any) => (dashboardData ? onRenderCell(e) : null)}
        >
          <ViewsDirective>
            <ViewDirective option="Month" readonly={true} />
          </ViewsDirective>
          <Inject services={[Month]} />
        </ScheduleComponent>
      )}
    </div>
  );
}
