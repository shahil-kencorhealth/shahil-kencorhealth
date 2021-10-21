import React,{useState,useEffect} from 'react'
import { useFormik } from "formik";
import { EditPatientSchema } from "../../validationScrema/user";
import { useDispatch, useSelector } from "react-redux";
import { getContact, login, updatePatient } from "../../redux/action";
import { formatDate } from '../../util/utils';
import { Store } from "../../redux/Actions";
import { MultiSelect } from "react-multi-select-component";

export const EditPatient = ({editPatient,onEditModalClose,epatient,diagnosisType}:any) => {
    const initialValue = [{ label: '', value: '' }];
    const dispatch = useDispatch();
    const [optionalEmail, setoptionalEmail] = useState('')
    const [optionalMRN, setoptionalMRN] = useState('')
    const [selectedDiagnos, setselectedDiagnos] = useState(initialValue)

    const physicianList = useSelector((state: Store) => state.physicianReducer.physicianList);
    
    useEffect(() => {
        console.log("epatient.length", epatient);
        if (epatient) {
            setoptionalMRN(epatient?.mrnNumber || '');
            setoptionalEmail(epatient?.email || '');
        
            const aa:any = []
        
            if (epatient?.diagnosisList) {
                epatient?.diagnosisList.map((i: any) => {
                    aa.push({ label: i.toUpperCase(), value: i });
                })
            }
            setselectedDiagnos(aa);
        }
    }, [epatient])

    useEffect(() => {
        console.log("selectedDiagnos", selectedDiagnos);
    }, [selectedDiagnos]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...epatient,
            firstName: epatient.firstName,
            lastName: epatient.lastName,
            mobileNumber: epatient.mobileNumber,
            dob: epatient.dob,
            email: epatient?.email || ' ',
            physicianId: epatient?.physicianId || '',
            mrnNumber: epatient?.mrnNumber || '',
            diagnosisList : epatient?.diagnosisList || []
            
        },
        validationSchema: EditPatientSchema,
        onSubmit: (values) => {
            // console.log("Editr Submit",values);
            const vals = values;
            if (selectedDiagnos.length > 0) {
            
                vals.diagnosisList =  selectedDiagnos.map(i=>i.value);
            
            }
            if (optionalEmail !== "")
                vals.email = optionalEmail;
            
            if (optionalMRN)
                vals.mrnNumber = optionalMRN;
            
            console.log("vals", vals);
            dispatch(updatePatient(vals));
            // dispatch(getContact());
            onEditModalClose();
        },
    });
    
    const patient = formik.values;
    const { errors, touched } = formik;
    
    return (
        <>
            {/* {console.log("PATIENT", errors)} */}
            {editPatient &&
                <div className="modal fade show" id="EditPatient" tabIndex={-1} aria-labelledby="EditPatientLabel"
                    aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Edit Patient</h3>
                            </div>
                            <div className="modal-body">
                                <div className="row row-cols-1 row-cols-md-2 stats">
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="firstName"
                                                value={patient.firstName} />
                                            {errors.firstName && touched.firstName && (
                                                <div className="text-danger mt-2">{errors.firstName}</div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="lastName"
                                                value={patient.lastName} />
                                            {errors.lastName && touched.lastName && (
                                                <div className="text-danger mt-2">{errors.lastName}</div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="mobileNumber"
                                                value={patient.mobileNumber} />
                                            {errors.mobileNumber && touched.mobileNumber && (
                                                <div className="text-danger mt-2">{errors.mobileNumber}</div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Physician</label>
                                            <select className="form-select" value={patient.physicianId} >
                                                <option value="" >No physician </option>
                                                {physicianList.map((i: any) => (
                                                    <option value={i.id}>{i.fullName}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label" >Email (Optional)</label>
                                        <input type="text" className="form-control" onChange={(e) => { setoptionalEmail(e.target.value) }} value={optionalEmail} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">MRN (Optional)</label>
                                        <input type="text" className="form-control" onChange={(e) => { setoptionalMRN(e.target.value) }} value={optionalMRN}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">DOB</label>
                                            <input type="date" className="form-control"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="dob"
                                                value={formatDate(patient.dob)} />
                                            {errors.dob && touched.dob && (
                                                <div className="text-danger mt-2">{errors.dob}</div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Diagnosis information (optional)</label>
                                            {/* <select className="form-select" onChange={(e)=>setselectedDiagnos(e.target.value)}>
                                                <option>DIAGNOSIS</option>
                                                {diagnosisType.map((i: any) => (
                                                    <option value={i.value}>{i.label}</option>
                                                ))}
                                            </select> */}
                                        {diagnosisType.length > 0 && <MultiSelect
                                            options={diagnosisType}
                                            value={selectedDiagnos}
                                            onChange={setselectedDiagnos}
                                            labelledBy="Select"
                                            
                                        />
                                        }
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary-outline min-w-150" data-bs-dismiss="modal" onClick={onEditModalClose}>Cancel</button>
                                <button type="button" className="btn btn-primary-theme min-w-150" data-bs-dismiss="modal" onClick={() => { formik.handleSubmit() }}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" style={{zIndex:-9999}}></div>
                </div>
            }
        </>
    );
}