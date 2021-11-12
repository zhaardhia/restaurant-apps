import axios from "axios";

class Data{
    static async dataRestaurant(){
        try{
            const response = await axios.get("../DATA.json");
            return await Promise.resolve(console.log(response.data.restaurant));
        }catch(error){
            return await Promise.reject(error);
        }
    }
}
export default Data;