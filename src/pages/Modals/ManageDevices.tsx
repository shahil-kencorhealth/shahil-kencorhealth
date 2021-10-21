import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientDevices, addManageDevice, getContact } from '../../redux/action';
import { Store } from '../../redux/Actions';

export const ManageDevices = ({manageDevice,onEditModalClose,eManageDevice}:any) => {

    const dispatch = useDispatch();
    const devices = useSelector((state: Store) => state.patientReducer.devices);
    
    const initialState: any = [];
    const [BPMonitor, setBPMonitor] = useState(initialState);
    const [weightScaleMonitor, setWeightScaleMonitor] = useState(initialState);
    const [SPOMonitor, setSPOMonitor] = useState(initialState);

    const [selectedBPMonitor, setSelectedBPMonitor] = useState("");
    const [selectedWeightScaleMonitor, setSelectedWeightScaleMonitor] = useState("");
    const [selectedSPOMonitor, setSelectedSPOMonitor] = useState("");

    const [defaultBPMonitor, setdefaultBPMonitor] = useState("");
    const [defaultWeightScaleMonitor, setdefaultWeightScaleMonitor] = useState("");
    const [defaultSPOMonitor, setdefaultSPOMonitor] = useState("");


    useEffect(() => {
        // console.log("emaane", eManageDevice);
        dispatch(getPatientDevices(eManageDevice.clinicId));

    }, [eManageDevice]);

    useEffect(() => {
        seprateDevices();
        return () => {
            setdefaultBPMonitor('');
            setdefaultWeightScaleMonitor('');
            setdefaultSPOMonitor('');
            setSelectedBPMonitor('');
            setSelectedSPOMonitor('');
            setSelectedWeightScaleMonitor('');
            // console.log("SELECTED",{ defaultSPOMonitor,defaultWeightScaleMonitor, defaultBPMonitor });
        }
    }, [devices]);

    const seprateDevices = () => {
        // console.log("DEVICES", devices);
        // console.log("manageDevice", manageDevice);
        const bp:any = []; const SPO:any = [];const weightScale:any = []
        Object.values(devices).map(i => {
            // console.log(
            //     "i.patientId: "+i.patientId+ "/manageDevice.id"+ manageDevice.id
            // )
            if (i.deviceType === "weighing_scale" && i.status === "allocated" && i.patientId === eManageDevice.id) {
                setdefaultWeightScaleMonitor(i.id);
            }
            if (i.deviceType === "weighing_scale"  && i.status === "available" ) {
                weightScale.push(i);
            }
             if (i.deviceType === "bp_monitor"  && i.status === "available") {
                bp.push(i);
            }
            if (i.deviceType === "bp_monitor" && i.status === "allocated" && i.patientId === eManageDevice.id) {
                setdefaultBPMonitor(i.id);
                bp.push(i);
            }
             
            if (i.deviceType === "SPO_monitor" && i.status === "available" ) {
                SPO.push(i);
            }
            if (i.deviceType === "SPO_monitor" && i.status === "allocated" && i.patientId === eManageDevice.id) {
                setdefaultSPOMonitor(i.id);
            }
        });
        // console.log("THREEE",{ weightScale, bp, SPO });
        // console.log("SELECTED",{ selectedSPOMonitor, selectedWeightScaleMonitor, selectedBPMonitor });
        setBPMonitor(bp);
        setWeightScaleMonitor(weightScale);
        setSPOMonitor(SPO);
    }

    const onAddManageDevice = () => {
        const selected = [];
        if (selectedBPMonitor)
        {
            selected.push({ id: selectedBPMonitor, status: "allocated" });
            // dispatch(addManageDevice( selectedBPMonitor, "allocated"));
        }
        if (selectedSPOMonitor)
        {
            selected.push({ id: selectedSPOMonitor, status: "allocated" });
            // dispatch(addManageDevice( selectedSPOMonitor, "allocated"));
        }
        if (selectedWeightScaleMonitor)
        {
            selected.push({ id: selectedWeightScaleMonitor, status: "allocated" });
            // dispatch(addManageDevice( selectedWeightScaleMonitor, "allocated"));
        }
        const id = eManageDevice.id;
        dispatch(addManageDevice(selected,id));
        dispatch(getPatientDevices(eManageDevice.clinicId));
        dispatch(getContact());
        onEditModalClose();
    
    }

    const onDeleteDevice = (id:string) => {
        dispatch(addManageDevice([{ id: id, status: "available" }], eManageDevice.id));
        dispatch(getPatientDevices(eManageDevice.clinicId));
        dispatch(getContact());
        onEditModalClose();
    }
    
    return (
        <>
            {manageDevice &&
                <div className="modal fade show" id="AddDevice" tabIndex={-1} aria-labelledby="AddDeviceLabel"
                    aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Add/Manage Device</h3>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <label className="form-label">Add By</label>
                                    <select className="form-select">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">BP</label>
                                    <select className="form-select"  defaultValue={defaultBPMonitor} value={selectedBPMonitor || defaultBPMonitor} onChange={(e)=>setSelectedBPMonitor(e.target.value)} disabled={defaultBPMonitor.trim().length > 0}>
                                        <option>Select BP monitor</option>
                                    {BPMonitor.map((i:any) => (
                                        <option value={i.id}>{i.serialNumber}</option>
                                        ))}

                                </select>
                                {defaultBPMonitor.trim().length > 0 && <button type="button" onClick={()=>onDeleteDevice(defaultBPMonitor)}>DELETE</button>}

                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Weight</label>
                                <select className="form-select" value={selectedWeightScaleMonitor || defaultWeightScaleMonitor} disabled={defaultWeightScaleMonitor.trim().length > 0} defaultValue ={defaultWeightScaleMonitor} onChange={(e) => {  setSelectedWeightScaleMonitor(e.target.value)}}>
                                        <option>Select weight</option>
                                        {weightScaleMonitor.map((i:any) => (
                                        <option value={i.id}>{i.serialNumber}</option>
                                        ))}
                                </select>
                                {defaultWeightScaleMonitor.trim().length > 0 && <button type="button" onClick={()=>onDeleteDevice(defaultWeightScaleMonitor)}>DELETE</button>}
                                
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Select SPO2</label>
                                    <select className="form-select" value={selectedSPOMonitor} defaultValue={defaultSPOMonitor} onChange={(e)=>setSelectedSPOMonitor(e.target.value)}>
                                        <option>Select SPO</option>
                                        {SPOMonitor.map((i:any) => (
                                        <option value={i.id}>{i.serialNumber}</option>
                                        ))}
                                </select>
                                {defaultSPOMonitor.trim().length > 0 && <button type="button" onClick={()=>onDeleteDevice(defaultSPOMonitor)}>DELETE</button>}

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary-outline min-w-150" data-bs-dismiss="modal" onClick={onEditModalClose}>Cancel</button>
                                <button type="button" className="btn btn-primary-theme min-w-150" data-bs-dismiss="modal" onClick={onAddManageDevice}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}