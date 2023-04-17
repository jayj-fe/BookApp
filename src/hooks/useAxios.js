import axios from "axios"

async function useAxios( targetUrl, prop ) {
    const id_key = '8IiMl1maLyiMIr5jFKMB';
    const sercet_key = 'vQpeLNtwWZ';

    const res = await axios.get(
            targetUrl,
            {
                params: { query: prop },
                headers: {
                "X-Naver-Client-Id": id_key,
                "X-Naver-Client-Secret": sercet_key,
                },
            }
        ).then((response) => {
            // console.log('response', response.data.items); 

            return response.data.items
        });

    // console.log(res);

    return res
}
 
export default useAxios