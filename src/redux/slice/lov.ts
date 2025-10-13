import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAxiosInstance } from "../../api/AxiosInstance";
import { setMessage } from "./message";

const AxiosInstance = getAxiosInstance("apiUrl");

export interface Currency {
  id: string;
  name: string;
  isDeleted: boolean;
  [key: string]: any;
}

export interface LcType {
  id: string;
  name: string;
  isDeleted: boolean;
  [key: string]: any;
}

export interface LovState {
  currencies: Currency[];
  currencyDetail: Currency | null;

  lcTypes: LcType[];
  lcTypeDetail: LcType | null;

  loading: boolean;
  error: string | null;
}

const initialState: LovState = {
  currencies: [],
  currencyDetail: null,
  lcTypes: [],
  lcTypeDetail: null,
  loading: false,
  error: null,
};

const extractError = (error: any): string =>
  (error?.response && (error.response.data?.data ?? error.response.data?.message)) ||
  error?.message ||
  String(error);

export const fetchCurrency = createAsyncThunk<Currency[], void, { rejectValue: string }>(
  "currency/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await AxiosInstance.get(`/currency`);
      return Array.isArray(response.data) ? response.data : response.data?.data ?? [];
    } catch (error: any) {
      const message = extractError(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchCurrencyById = createAsyncThunk<Currency, string, { rejectValue: string }>(
  "currency/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await AxiosInstance.get(`/currency/${id}`);
      return response.data?.data ?? response.data;
    } catch (error: any) {
      const message = extractError(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchLcTypes = createAsyncThunk<LcType[], void, { rejectValue: string }>(
  "lc-type/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await AxiosInstance.get(`/lc-type`);
      return Array.isArray(response.data) ? response.data : response.data?.data ?? [];
    } catch (error: any) {
      const message = extractError(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// --- Fetch LC type by ID ---
export const fetchLcTypeById = createAsyncThunk<LcType, string, { rejectValue: string }>(
  "lc-type/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await AxiosInstance.get(`/lc-type/${id}`);
      return response.data?.data ?? response.data;
    } catch (error: any) {
      const message = extractError(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const lovSlice = createSlice({
  name: "lov",
  initialState,
  reducers: {
    clearLovError(state) {
      state.error = null;
    },
    setLovLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action: PayloadAction<Currency[]>) => {
        state.currencies = action.payload;
        state.loading = false;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message ?? "Failed to fetch currencies";
      })

      .addCase(fetchCurrencyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyById.fulfilled, (state, action: PayloadAction<Currency>) => {
        state.currencyDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCurrencyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message ?? "Failed to fetch currency by ID";
      })

      .addCase(fetchLcTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLcTypes.fulfilled, (state, action: PayloadAction<LcType[]>) => {
        state.lcTypes = action.payload;
        state.loading = false;
      })
      .addCase(fetchLcTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message ?? "Failed to fetch LC types";
      })

      .addCase(fetchLcTypeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLcTypeById.fulfilled, (state, action: PayloadAction<LcType>) => {
        state.lcTypeDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchLcTypeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message ?? "Failed to fetch LC type by ID";
      });
  },
});

export const selectAllCurrencies = (state: { lov: LovState }) => state.lov.currencies;
export const selectCurrencyDetail = (state: { lov: LovState }) => state.lov.currencyDetail;

export const selectAllLcTypes = (state: { lov: LovState }) => state.lov.lcTypes;
export const selectLcTypeDetail = (state: { lov: LovState }) => state.lov.lcTypeDetail;

export const selectLovLoading = (state: { lov: LovState }) => state.lov.loading;
export const selectLovError = (state: { lov: LovState }) => state.lov.error;

export const { clearLovError, setLovLoading } = lovSlice.actions;
export default lovSlice.reducer;
