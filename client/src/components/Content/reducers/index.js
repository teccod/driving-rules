import { createSlice, combineReducers, configureStore, current } from '@reduxjs/toolkit'

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
    onlyDifferences: true,
    dataTable: false,
    response: {},
    filterParams: {
        knowCountry: "",
        destinationCountry: ""
    }
  },
  reducers: {
    setOnlyDifferences(state, value){
        state.onlyDifferences = value.payload;
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

    setDataTable(state){
        var kCountry = state.filterParams.knowCountry;
        var dCountry = state.filterParams.destinationCountry;

        if(kCountry === '' && dCountry === ''){
            state.dataTable = false
        }else{
            const data = (state.response.data).filter(item => {
                return item.Country === kCountry || item.Country === dCountry
            });
    
            state.dataTable = {
                header: [
                    kCountry,
                    dCountry
                ],
                content: [
                    itemToRowTable(data, "Spare_bulb_required"),
                    itemToRowTable(data, "Speed_limit_on_motorway_kmh"),
                    itemToRowTable(data, "Speed_limit_on_dual_carriageway_kmh"),
                    itemToRowTable(data, "Seatbelt_required"),
                    itemToRowTable(data, "Speed_limit_on_single_carriageway_kmh"),
                    itemToRowTable(data, "Tow_rope_required"),
                ],
            };
        }
    }
  },
})

export const { setOnlyDifferences, setResponse, setDataTable, setKnowCountry, setDestinationCountry } = filterSlice.actions

export const onlyDifferences = (state) => state.compareTable.onlyDifferences
export const dataTable = (state) => state.compareTable.dataTable
export const response = (state) => state.compareTable.response
export const filterParams = (state) => state.compareTable.filterParams

export default filterSlice.reducer