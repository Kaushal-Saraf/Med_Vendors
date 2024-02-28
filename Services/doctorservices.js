const { httpAxios } = require("@/helper/axioshelper");

export async function doctorSignIn(details){
    const result= await httpAxios.post("/api/doctor/doctorsignin/sendotp",details).then((Response)=>Response.data)
    return result
}