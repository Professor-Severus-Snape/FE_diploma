import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarriage, IOrder } from '../models/models';

interface IArrivalState {
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
  currentCopyTypeCarriagesList: ICarriage[];
  activeCarriageIndex: number;

  wiFiPrice: number;
  linensPrice: number;

  orderList: IOrder[];
}

const initialState: IArrivalState = {
  route_direction_id: '',

  adults: {
    count: 0, // количество взрослых билетов
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
  currentTypeCarriagesList: [], // массив вагонов выбранного класса - для блокировки выбора мест
  currentCopyTypeCarriagesList: [], // массив вагонов выбранного класса - с выбранными местами
  activeCarriageIndex: 0, // индекс активного вагона

  wiFiPrice: 0, // стоимость услуги 'wi-fi'
  linensPrice: 0, // стоимость постельного белья

  orderList: [],

  // NOTE: объект, который позже надо будет передать в order по ключу 'arrival':
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

const arrivalSlice = createSlice({
  name: 'arrival',
  initialState,
  reducers: {
    setArrivalRouteDestinationId: (state, action: PayloadAction<string>) => {
      state.route_direction_id = action.payload;
    },
    setArrivalAdultsCount: (state, action: PayloadAction<number>) => {
      state.adults.count = action.payload;
    },
    setArrivalChildrenCount: (state, action: PayloadAction<number>) => {
      state.children.count = action.payload;
    },
    setArrivalBabyCount: (state, action: PayloadAction<number>) => {
      state.baby.count = action.payload;
    },
    setArrivalActivePerson: (state, action: PayloadAction<number>) => {
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
    setArrivalCurrentCarriageType: (state, action: PayloadAction<string>) => {
      state.currentCarriageType = action.payload;
    },
    setArrivalCurrentTypeCarriagesList: (
      state,
      action: PayloadAction<ICarriage[]>
    ) => {
      state.currentTypeCarriagesList = JSON.parse(
        JSON.stringify(action.payload)
      );
    },
    setArrivalCopyCurrentTypeCarriagesList: (
      state,
      action: PayloadAction<ICarriage[]>
    ) => {
      state.currentCopyTypeCarriagesList = JSON.parse(
        JSON.stringify(action.payload)
      );
    },
    setArrivalActiveCarriageIndex: (state, action: PayloadAction<number>) => {
      state.activeCarriageIndex = action.payload;
    },
    setArrivalWiFiPrice: (state, action: PayloadAction<number>) => {
      state.wiFiPrice = action.payload;
    },
    setArrivalLinensPrice: (state, action: PayloadAction<number>) => {
      state.linensPrice = action.payload;
    },
    setArrivalOrder: (state, action: PayloadAction<IOrder[]>) => {
      state.orderList = action.payload;
    },
  },
});

export const {
  setArrivalRouteDestinationId,
  setArrivalAdultsCount,
  setArrivalChildrenCount,
  setArrivalBabyCount,
  setArrivalActivePerson,
  setArrivalCurrentCarriageType,
  setArrivalCurrentTypeCarriagesList,
  setArrivalCopyCurrentTypeCarriagesList,
  setArrivalActiveCarriageIndex,
  setArrivalWiFiPrice,
  setArrivalLinensPrice,
  setArrivalOrder,
} = arrivalSlice.actions;

export default arrivalSlice.reducer;
