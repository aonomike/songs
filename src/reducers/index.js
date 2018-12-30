import {combineReducers} from 'redux'
const songsReducer = () => {
    return [{title: 'With Nuts', duration: '3:43'},
            {title: 'Amazing grace', duration: '2.46'},
            {title: 'Taka taka', duration:'4.03'},
            {title: 'Ralph dance', duration: '2:44'}]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});