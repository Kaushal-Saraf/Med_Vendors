const { httpAxios } = require("@/helper/axioshelper");

export async function sendOTP(details){
    const result= await httpAxios.post("/api/doctor/doctorsignin/sendotp",details).then((Response)=>Response.data)
    return result
}
export async function doctorSignIn(details){
    const result = await httpAxios.post("/api/doctor/doctorsignin/verifyotp",details).then((Response)=>Response.data)
    return result
}

export async function doctorLogIn(details){
    const result = await httpAxios.post("/api/doctor/doctorlogin" ,details).then((Response)=>Response.data)
    return result
}

export async function getDoctorDetails(id){
    const result = await httpAxios.get(`/api/doctor/${id}`).then((Response)=>Response.data)
    return result
}