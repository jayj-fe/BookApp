import axios from "axios"

async function useAxios( targetUrl, prop, startInt = 1 ) {
    const id_key = '8IiMl1maLyiMIr5jFKMB';
    const sercet_key = 'vQpeLNtwWZ';

    const res = await axios.get(
            targetUrl,
            {
                params: {
                    query: prop,
                    start: startInt
                },
                headers: {
                "X-Naver-Client-Id": id_key,
                "X-Naver-Client-Secret": sercet_key,
                },
            }
        ).then((response) => {
            // console.log('response', response.data.items); 

            return {
                data : response.data.items,
                pageIdx : startInt
            }
        });

    // console.log(res);

    return res
}
 
export default useAxios