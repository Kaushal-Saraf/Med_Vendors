const { httpAxios } = require("@/helper/axioshelper");

export async function patientSignIn(details){
    const result= await httpAxios.post("/api/patientsignin",details).then((Response)=>Response.data)
    return result
}