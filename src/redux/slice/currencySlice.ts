import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAxiosInstance } from "../../api/AxiosInstance";
import { setMessage } from "./message";

const AxiosInstance = getAxiosInstance("apiUrl");

export interface Currency {
  id: string;
  name: string;
  isDeleted: boolean;
}

interface CurrencyState {
  currencies: Currency[];
  currencyDetail: Currency | null;
  loading: boolean;
  error: string | null;
}

const initialState: CurrencyState = {
  currencies: [],
  currencyDetail: null,
  loading: false,
  error: null,
};

export const fetchCurrency = createAsyncThunk<
  Currency[],
  void,
  { rejectValue: string }
>("currency/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(`/currency`);
    return response.data?.data ?? response.data;
  } catch (error: any) {
    const message =
      (error.response && (error.response.data?.data || error.response.data?.message)) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchCurrencyById = createAsyncThunk<
  Currency,
  string,
  { rejectValue: string }
>("currency/fetchById", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(`/currency/${id}`);
    return response.data?.data ?? response.data;
  } catch (error: any) {
    const message =
      (error.response && (error.response.data?.data || error.response.data?.message)) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
  }
});

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
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
        state.error = action.payload ?? "Failed to fetch currencies";
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
        state.error = action.payload ?? "Failed to fetch currency by ID";
      });
  },
});

export const selectAllCurrency = (state: { currency: CurrencyState }) =>
  state.currency.currencies;

export const selectCurrencyDetail = (state: { currency: CurrencyState }) =>
  state.currency.currencyDetail;

export const selectCurrencyLoading = (state: { currency: CurrencyState }) =>
  state.currency.loading;

export default currencySlice.reducer;
