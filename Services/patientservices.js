const { httpAxios } = require("@/helper/axioshelper");

export async function patientSignIn(details){
    const result= await httpAxios.post("/api/patient/patientsignin",details).then((Response)=>Response.data)
    return result
}
export async function patientLogIn(loginDetails){
    const result= await httpAxios.post("/api/patient/patientlogin",loginDetails).then((response)=>response.data)
    return result
}