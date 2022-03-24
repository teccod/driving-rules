import { createSlice } from '@reduxjs/toolkit'

function itemToRowTable(item, key, description) {
	return [key].concat(
		item.map((value) => {
			return value[key];
		})
	);
}

export const filterSlice = createSlice({
  name: 'compareTable',
  initialState: {
    dataTable: false,
    response: {},
    filterParams: {
        knowCountry: "",
        destinationCountry: "",
        onlyDifferences: true
    }
  },
  reducers: {
    setOnlyDifferences(state, value){
        state.filterParams.onlyDifferences = value.payload;
    },

    setResponse: (state, value) =>{
        state.response = value.payload;
    },

    setKnowCountry(state, value){ 
        state.filterParams.knowCountry = value.payload;
    },
    setDestinationCountry(state, value){
        state.filterParams.destinationCountry = value.payload
    },

    updateDataTable(state){
        var kCountry = state.filterParams.knowCountry;
        var dCountry = state.filterParams.destinationCountry;

        if(kCountry !== '' || dCountry !== ''){
            var data = (state.response.data).filter(item => {
                return item.Country === kCountry || item.Country === dCountry
            });

            const header = [kCountry, dCountry].filter(item => { return item !== '' })
    
            state.dataTable = {
                header: header,
                content: [
                    itemToRowTable(data, "Speed_limit_on_motorway_kmh"),
                    itemToRowTable(data, "Speed_limit_on_dual_carriageway_kmh"),
                    itemToRowTable(data, "Speed_limit_on_single_carriageway_kmh"),
                    itemToRowTable(data, "Speed_limit_in_urban_area"),
                    itemToRowTable(data, "Permitted_alcohol_level_"),
                    itemToRowTable(data, "Toll_roads"),
                    itemToRowTable(data, "Seatbelt_required"),
                    itemToRowTable(data, "Minimum_child_age_front_seat"),
                    itemToRowTable(data, "Triangle_required"),
                    itemToRowTable(data, "First_aid_required"),
                    itemToRowTable(data, "Fire_extinguisher_required"),
                    itemToRowTable(data, "Spare_bulb_required"),
                    itemToRowTable(data, "Minimum_drivers_age"),
                    itemToRowTable(data, "Tow_rope_required"),
                ],
            };

            if(state.filterParams.onlyDifferences){
                state.dataTable.content = (state.dataTable.content).filter(item => {
                    return item[1] !== item[2]
                })
            }
            
        }else{
            state.dataTable = false
        }
    }
  },
})

export const { setOnlyDifferences, setResponse, updateDataTable, setKnowCountry, setDestinationCountry } = filterSlice.actions

export const dataTable = (state) => state.compareTable.dataTable
export const response = (state) => state.compareTable.response
export const filterParams = (state) => state.compareTable.filterParams

export default filterSlice.reducer