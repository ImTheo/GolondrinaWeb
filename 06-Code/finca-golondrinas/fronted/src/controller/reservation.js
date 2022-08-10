
import axios from 'axios'

export async function createReservation(values, actions){
    const result = await axios.post('/api/reservation', values);
    await axios.put(`api/roomDisailable/${values.room}`);
    actions.resetForm();
    console.log(result)
}