import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {PORTFOLIO_ENDPOINT, X_META_SESSION} from '@env';

interface portfolioDataProps {
  portfolioData: any[];
  loading: boolean;
  error: string | null;
}

const initialState: portfolioDataProps = {
  portfolioData: [],
  loading: false,
  error: null,
};

export const fetchPortfolioData = createAsyncThunk(
  'portfolioData/portfoliofetchData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        PORTFOLIO_ENDPOINT,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Metabase-Session': X_META_SESSION,
          },
        }
      );

      if (response.data?.data?.rows) {
        return response.data.data.rows;
      } else {
        return rejectWithValue('No data rows found');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message ||
            error.response?.data ||
            'Failed to fetch data',
        );
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolioSliceData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPortfolioData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolioData = action.payload;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default portfolioSlice.reducer;