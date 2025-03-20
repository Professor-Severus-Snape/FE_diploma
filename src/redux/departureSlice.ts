import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarriage } from '../models/models';

interface IDepartureState {
  route_direction_id: string;

  adults: {
    count: number;
    isActive: boolean;
  };

  children: {
    count: number;
    isActive: boolean;
  };

  baby: {
    count: number;
    isActive: boolean;
  };

  currentCarriageType: string;
  currentTypeCarriagesList: ICarriage[];
  activeCarriageIndex: number;

  wiFiPrice: number;
  linensPrice: number;
}

const initialState: IDepartureState = {
  route_direction_id: '',

  adults: {
    count: 3, // количество взрослых билетов
    isActive: true, // активность вкладки
  },

  children: {
    count: 0, // количество детских билетов
    isActive: false, // активность вкладки
  },

  baby: {
    count: 0, // количество детских билетов (без места)
    isActive: false, // активность вкладки
  },

  currentCarriageType: '', // выбранный тип вагона ('first', 'second', 'third', 'fourth' или '')
  currentTypeCarriagesList: [], // массив вагонов выбранного класса
  activeCarriageIndex: 0, // индекс активного вагона

  wiFiPrice: 0, // стоимость услуги 'wi-fi'
  linensPrice: 0, // стоимость постельного белья

  // NOTE: объект, который позже надо будет передать в order по ключу 'departure':
  // route_direction_id: '',
  // seats: [
  //   {
  //     coach_id: '12341',
  //     person_info: {
  //       is_adult: true,
  //       first_name: 'Ivan',
  //       last_name: 'Popov',
  //       patronymic: 'Popovich',
  //       gender: true,
  //       birthday: '1980-01-01',
  //       document_type: 'паспорт',
  //       document_data: '45 6790195',
  //     },
  //     seat_number: 10,
  //     is_child: true,
  //     include_children_seat: true,
  //   },
  // ],
};

const departureSlice = createSlice({
  name: 'departure',
  initialState,
  reducers: {
    setDepartureRouteDestinationId: (state, action: PayloadAction<string>) => {
      state.route_direction_id = action.payload;
    },
    setDepartureAdultsCount: (state, action: PayloadAction<number>) => {
      state.adults.count = action.payload;
    },
    setDepartureChildrenCount: (state, action: PayloadAction<number>) => {
      state.children.count = action.payload;
    },
    setDepartureBabyCount: (state, action: PayloadAction<number>) => {
      state.baby.count = action.payload;
    },
    setDepartureActivePerson: (state, action: PayloadAction<number>) => {
      if (action.payload === 1) {
        state.adults.isActive = false;
        state.children.isActive = true;
        state.baby.isActive = false;
      } else if (action.payload === 2) {
        state.adults.isActive = false;
        state.children.isActive = false;
        state.baby.isActive = true;
      } else {
        state.adults.isActive = true;
        state.children.isActive = false;
        state.baby.isActive = false;
      }
    },
    setDepartureCurrentCarriageType: (state, action: PayloadAction<string>) => {
      state.currentCarriageType = action.payload;
    },
    setDepartureCurrentTypeCarriagesList: (
      state,
      action: PayloadAction<ICarriage[]>
    ) => {
      state.currentTypeCarriagesList = JSON.parse(
        JSON.stringify(action.payload)
      );
    },
    setDepartureActiveCarriageIndex: (state, action: PayloadAction<number>) => {
      state.activeCarriageIndex = action.payload;
    },
    setDepartureWiFiPrice: (state, action: PayloadAction<number>) => {
      state.wiFiPrice = action.payload;
    },
    setDepartureLinensPrice: (state, action: PayloadAction<number>) => {
      state.linensPrice = action.payload;
    },
  },
});

export const {
  setDepartureRouteDestinationId,
  setDepartureAdultsCount,
  setDepartureChildrenCount,
  setDepartureBabyCount,
  setDepartureActivePerson,
  setDepartureCurrentCarriageType,
  setDepartureCurrentTypeCarriagesList,
  setDepartureActiveCarriageIndex,
  setDepartureWiFiPrice,
  setDepartureLinensPrice,
} = departureSlice.actions;

export default departureSlice.reducer;
