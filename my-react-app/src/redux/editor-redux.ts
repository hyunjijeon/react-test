import { combineReducers } from "redux";
import { QUERY, QUERY_ARR } from "./test-data";


// action type 
enum MyEditorActionTypes {
    CHANGE_SELECTED_INDEX = "myeditor/CHANGE_SELECTED_INDEX",
    CHANGE_SELECTED_ID = "myeditor/CHANGE_SELECTED_ID",
    CHANGE_SELECTED_TEXT = "myeditor/CHANGE_SELECTED_TEXT"
}

// action 생성 함수
export const MyEditorActions = {
    changeSelectedIndex: (index: number) => ({
        type: MyEditorActionTypes.CHANGE_SELECTED_INDEX,
        index
    }),
    changeSelectedId: (id: string) => ({
        type: MyEditorActionTypes.CHANGE_SELECTED_ID,
        id
    }),
    changeSelectedText: (text: string) => ({
        type: MyEditorActionTypes.CHANGE_SELECTED_TEXT,
        text
    }),
}

// action 객체 타입
type ChangeSelectedIndex = ReturnType<typeof MyEditorActions.changeSelectedIndex>;
type ChangeSelectedId = ReturnType<typeof MyEditorActions.changeSelectedId>;
type ChangeSelectedText = ReturnType<typeof MyEditorActions.changeSelectedText>;


type EditorAction = ChangeSelectedIndex | ChangeSelectedId | ChangeSelectedText;


// state
export interface EditorState {
    queryList: QUERY[];
    selectedIndex: number;
    selectedQuery?: QUERY;
}

export const initialEditorState: EditorState = {
    queryList: QUERY_ARR,
    selectedIndex: 0,
    selectedQuery: QUERY_ARR[0]
}


// reducer
// store에 들어갈 state와 state를 변경할 함수를 작성
function myEditorReducer(state: EditorState = initialEditorState, action: EditorAction): EditorState {
    switch (action.type) {
        case MyEditorActionTypes.CHANGE_SELECTED_INDEX:
            return {
                ...state,
                selectedIndex: (action as ChangeSelectedIndex).index,
                selectedQuery: QUERY_ARR[(action as ChangeSelectedIndex).index]
            };
        case MyEditorActionTypes.CHANGE_SELECTED_ID:
            return {
                ...state,
                selectedQuery: {
                    ...state.selectedQuery as QUERY,
                    id: (action as ChangeSelectedId).id
                }
            };
        case MyEditorActionTypes.CHANGE_SELECTED_TEXT:
            return {
                ...state,
                selectedQuery: {
                    ...state.selectedQuery as QUERY,
                    text: (action as ChangeSelectedText).text
                }
            };
        default:
            return state;
    }
}

export const myEditorReducers = combineReducers({
    editorState: myEditorReducer
});

export type MyEditorRootState = ReturnType<typeof myEditorReducers>;