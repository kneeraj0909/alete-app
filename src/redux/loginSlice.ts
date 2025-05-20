import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {LOGIN_ENDPOINT, X_META_SESSION} from '@env';

interface userLoginDataProps {
  userData: any[];
  loggedInPhone: null
  loading: boolean;
  error: string | null;
}

const initialState: userLoginDataProps = {
  userData: [],
  loggedInPhone: null,
  loading: false,
  error: null,
};

export const fetchLoginData = createAsyncThunk(
  'userData/fetchData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        LOGIN_ENDPOINT,
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

const loginSlice = createSlice({
  name: 'loginData',
  initialState,
  reducers: {
     setLoggedInPhone: (state, action) => {
      state.loggedInPhone = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLoginData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoginData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
      
  },
});

export const {setLoggedInPhone} = loginSlice.actions;
export default loginSlice.reducer;