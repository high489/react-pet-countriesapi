import { RootState } from '../../store';

export const selectCountryDetails = (state: RootState) => state.countryDetails;
export const selectCountryNeighbours = (state: RootState) => ({
  neighbours: state.countryDetails.neighbours,
  areNeighboursLoading: state.countryDetails.areNeighboursLoading,
  neighboursError: state.countryDetails.neighboursError
});