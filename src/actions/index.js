import axios from "axios";


export function fetchData() {
    return function(dispatch) {
      return axios.get("./data/formData.json").then(({ data }) => {
        dispatch(setArticleDetails(data));
      });
    };
  }
  
  function setArticleDetails(data) {
    return {
      type: 'FETCH_DATA',
      payload: data
    };
  }

