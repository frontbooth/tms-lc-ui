import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAxiosInstance } from "../../api/AxiosInstance";
import { setMessage } from "./message";

const AxiosInstance = getAxiosInstance("apiUrl");

export interface LcType {
  id: string;
  name: string;
  isDeleted: boolean;
}

interface LcTypeState {
  lcTypes: LcType[];
  lcTypeDetail: LcType | null;
  loading: boolean;
  error: string | null;
}

const initialState: LcTypeState = {
  lcTypes: [],
  lcTypeDetail: null,
  loading: false,
  error: null,
};

export const fetchLcTypes = createAsyncThunk<
  LcType[],
  void,
  { rejectValue: string }
>("lc-type/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(`/lc-type`);
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

export const fetchLcTypeById = createAsyncThunk<
  LcType,
  string,
  { rejectValue: string }
>("lc-type/fetchById", async (id, thunkAPI) => {
  try {
    const response = await AxiosInstance.get(`/lc-type/${id}`);
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

const lcTypeSlice = createSlice({
  name: "lc-type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.error = action.payload ?? "Failed to fetch LC types";
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
        state.error = action.payload ?? "Failed to fetch LC type by ID";
      });
  },
});

export const selectAllLcTypes = (state: { lcType: LcTypeState }) => state.lcType.lcTypes;
export const selectLcTypeDetail = (state: { lcType: LcTypeState }) => state.lcType.lcTypeDetail;
export const selectLcTypeLoading = (state: { lcType: LcTypeState }) => state.lcType.loading;

export default lcTypeSlice.reducer;
