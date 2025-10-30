import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../types/Profile";

interface ProfileState {
  profiles: Profile[];
  draft: Partial<Profile>;
}

const initialState: ProfileState = {
  profiles: [],
  draft: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateDraft: (state, action: PayloadAction<Partial<Profile>>) => {
      state.draft = { ...state.draft, ...action.payload };
    },
    addProfile: (state) => {
      const newProfile = { id: Date.now().toString(), ...state.draft } as Profile;
      state.profiles.push(newProfile);
      state.draft = {};
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter((p) => p.id !== action.payload);
    },
    editProfile: (state, action: PayloadAction<Profile>) => {
      state.draft = action.payload;
      state.profiles = state.profiles.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { updateDraft, addProfile, deleteProfile, editProfile } = profileSlice.actions;
export default profileSlice.reducer;
