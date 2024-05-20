import { httpAxios } from "@/helper/axioshelper";

export async function getMachineDetails( id) {
    const result = await httpAxios
      .get(`/api/machine/${id}`)
      .then((Response) => Response.data);
    return result;
  }
  
  export async function addMedicine(id, details) {
    const result = await httpAxios
      .patch(`/api/machine/${id}/addmedicine`, details)
      .then((Response) => Response.data);
    return result;
  }
  