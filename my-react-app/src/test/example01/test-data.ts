export interface QUERY {
    key: string; // for solution02
    id: string;
    text: string;
}

export const QUERY_ARR: QUERY[] = [{
    key: "key01",
    id: "select01",
    text: "select * from a"
}, {
    key: "key02",
    id: "delete02",
    text: "delete * from a"
}, {
    key: "key03",
    id: "select03",
    text: "select a, b, c from a where a = 1"
}];