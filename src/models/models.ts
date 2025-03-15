export interface ITown {
  _id: string;
  name: string;
}

export interface ISearchParams {
  from_city_id: string;
  to_city_id: string;

  date_start: string;
  date_end: string;

  minPrice?: number;
  maxPrice?: number;

  startDepartureHourFrom?: number;
  startDepartureHourTo?: number;

  endDepartureHourFrom?: number;
  endDepartureHourTo?: number;

  startArrivalHourFrom?: number;
  startArrivalHourTo?: number;

  endArrivalHourFrom?: number;
  endArrivalHourTo?: number;

  firstClass?: boolean;
  secondClass?: boolean;
  thirdClass?: boolean;
  fourthClass?: boolean;

  wifi?: boolean;
  express?: boolean;
}

export interface ITrain {
  // город прибытия:
  arrival?: {
    _id: string;

    available_seats: number;
    available_seats_info: {
      first?: number;
      second?: number;
      third?: number;
      fourth?: number;
    };

    duration: number;

    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;

    is_express: boolean;

    min_price: number;

    // стоимость мест по классам:
    price_info: {
      first?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
      };
      second?: {
        top_price?: number;
        bottom_price?: number;
      };
      third?: {
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
      };
      fourth?: {
        top_price?: number;
        bottom_price?: number;
      };
    };

    // город отправления:
    from: {
      railway_station_name: string;
      city: {
        _id: string;
        name: string;
      };
      datetime: number;
    };

    // город прибытия:
    to: {
      railway_station_name: string;
      city: {
        _id: string;
        name: string;
      };
      datetime: number;
    };

    // название поезда:
    train: {
      _id: string;
      name: string;
    };
  };

  // количество свободных мест:
  available_seats: number;

  // распределение мест по вагонам:
  available_seats_info: {
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };

  // город отправления:
  departure: {
    _id: string;

    available_seats: number;
    available_seats_info: {
      first?: number;
      second?: number;
      third?: number;
      fourth?: number;
    };

    duration: number;

    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;

    is_express: boolean;

    min_price: number;

    // стоимость мест по классам:
    price_info: {
      first?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
      };
      second?: {
        top_price?: number;
        bottom_price?: number;
      };
      third?: {
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
      };
      fourth?: {
        top_price?: number;
        bottom_price?: number;
      };
    };

    // город отправления:
    from: {
      railway_station_name: string;
      city: {
        _id: string;
        name: string;
      };
      datetime: number;
    };

    // город прибытия:
    to: {
      railway_station_name: string;
      city: {
        _id: string;
        name: string;
      };
      datetime: number;
    };

    // название поезда:
    train: {
      _id: string;
      name: string;
    };
  };

  // наличие опций:
  have_air_conditioning: boolean;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;

  // экспресс:
  is_express: boolean;

  // минимальная стоимость:
  min_price: number;
}

export interface IСarriage {
  coach: {
    _id: string;
    name: string;
    class_type: string; // класс вагона
    have_wifi: true;
    have_air_conditioning: false;
    price: number;
    top_price: number;
    bottom_price: number;
    side_price: number;
    linens_price: number;
    wifi_price: number;
    is_linens_included: true;
    available_seats: number;
    train: string;
  };
  seats: { index: number; available: boolean }[];
}
