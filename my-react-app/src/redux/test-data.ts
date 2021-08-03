export interface QUERY {
    id: string;
    text: string;
}

export const QUERY_ARR: QUERY[] = [{
    id: "select01",
    text: "select * from a"
}, {
    id: "delete02",
    text: "delete * from a"
}, {
    id: "select03",
    text: "select a, b, c from a where a = 1"
}];