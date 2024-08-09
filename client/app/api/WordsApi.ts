import axios from "axios";

const url = 'https://api.datamuse.com/words?sp=?????&max=99';

interface WordData {
    word: string,
    score: number
}

export const getWord = async(): Promise<Array<string>> => {
    try {
        const response = await axios.get<WordData[]>(url);
        const data = response.data;
        if (data.length > 0) {
            return data[Math.floor(Math.random() * 100)].word.split("");
        } else {
            return []
        }
    } catch (error) {
       return []
    }
}