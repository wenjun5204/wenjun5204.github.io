"use client"
import React from 'react';
import { fetchEventSource } from '@fortaine/fetch-event-source';
import { Button } from '@/components/ui/button';

export default function Page() {

    const sendMessage = async () => {
      const myHeaders = new Headers()
      myHeaders.append('Pragma', 'no-cache')
      myHeaders.append(
        'access-token',
        'eAGFkLtLA0EYxFkUDakklZ1XWCQBk91vX7dWep7R0hcINrK3t4cQyAmJ2FiYdGqhWKlJESVoEVDs7NW_QtDGRwpLOxsviLXVMDAM85sUGmk9HKWd5ufBUwsgTSCUGLQWMOlwpS1WIIylgmlOtMGQD4kVWhilqfC-USa3aoNlYyt2xy-VsA8MM2-6xLHkriuBuQo8T_oeVr7z_HXYbkMWwb_Fbn_S1PD842v3pQkL9yeXiTRQPj20uDQThzaTeetc9W7P3_e6H-1677rTu6mPDjq7d6e57G_4GKX-hp2hAo9oQCJJBFBsiCUSK07ANTSQhoU6WCcSOKOMA-GEXaDxbRvsMCFpiJUyFDPGEnqXS03DKMDEmAjkmhMSnbxFVSjzjFludeKjqM9tk3sC0UBjxVhv1TaggIubZWOL2hhbrU7U4rKtFOZmV_bRQLUa_wCVsn0t**eAENyckBwDAIA7CVMJgUxgnH_iuk-sqTHcbmrInck3pAwWxchlgAAWutFuNEZQnY7quF_P5_DM8QHg**pYUkMVsS2Brl7MK77-8QRvHG_NMNnp_hIjq7Pg9RC9bEyWeYQCaP0fmsOiJEMI7Ecvqp44wGN-YbFcasnjthOg**MjEyNDIzOTYsbGl1d2VuanVuMDUs5YiY5paH5L-KLGxpdXdlbmp1bjA1QG1laXR1YW4uY29tLDEsMzQwODk0ODgsMTcyNTY5NDE0NjA3NQ',
      )
      myHeaders.append('appfactory-context-appid', '1831223936403484689')
      myHeaders.append('appfactory-context-spaceid', '131567')
      myHeaders.append('m-appkey', 'fe_com.sankuai.speechfe.ai.factory')
      myHeaders.append('m-traceid', '4972886242491977267')
      myHeaders.append(
        'Cookie',
        'WEBDFPID=yz042x4w5vy956361165ywz54874121081y5921171397958v8881w2x-2012953721445-1697593720281QSCCUSS75613c134b6a252faa6802015be905518710; _lxsdk_cuid=18b40787d61c8-0cdb5faf3a48b2-1b525634-1d73c0-18b40787d61c8; s_u_745896=E5fCUan9f8nvw3UVXX67Xg; _lxsdk=18b40787d61c8-0cdb5faf3a48b2-1b525634-1d73c0-18b40787d61c8; e_b_id_352126=438545ce8a54447bfea684776a2731e4; e_u_id_3299326472=06b1857e3797256082b41e44afb8d11d; u=2847619032; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22191a1ecc20d22b1-07720f07a7c97fc-17525637-2073600-191a1ecc20e1300%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkxYTFlY2MyMGQyMmIxLTA3NzIwZjA3YTdjOTdmYy0xNzUyNTYzNy0yMDczNjAwLTE5MWExZWNjMjBlMTMwMCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22191a1ecc20d22b1-07720f07a7c97fc-17525637-2073600-191a1ecc20e1300%22%7D; com.sankuai.speechfe.ai.factory_strategy=; com.sankuai.speechfe.ai.factory_random=; com.sankuai.friday.agent.h5_strategy=; com.sankuai.friday.agent.h5_random=; moa_deviceId=DFF0D2404BAF507588724892BB7DB09D; 12d702aa62_ssoid=eAGFkLtLA0EYxFkUDakklZ1XWCQBk91vX7dWep7R0hcINrK3t4cQyAmJ2FiYdGqhWKlJESVoEVDs7NW_QtDGRwpLOxsviLXVMDAM85sUGmk9HKWd5ufBUwsgTSCUGLQWMOlwpS1WIIylgmlOtMGQD4kVWhilqfC-USa3aoNlYyt2xy-VsA8MM2-6xLHkriuBuQo8T_oeVr7z_HXYbkMWwb_Fbn_S1PD842v3pQkL9yeXiTRQPj20uDQThzaTeetc9W7P3_e6H-1677rTu6mPDjq7d6e57G_4GKX-hp2hAo9oQCJJBFBsiCUSK07ANTSQhoU6WCcSOKOMA-GEXaDxbRvsMCFpiJUyFDPGEnqXS03DKMDEmAjkmhMSnbxFVSjzjFludeKjqM9tk3sC0UBjxVhv1TaggIubZWOL2hhbrU7U4rKtFOZmV_bRQLUa_wCVsn0t**eAENyckBwDAIA7CVMJgUxgnH_iuk-sqTHcbmrInck3pAwWxchlgAAWutFuNEZQnY7quF_P5_DM8QHg**pYUkMVsS2Brl7MK77-8QRvHG_NMNnp_hIjq7Pg9RC9bEyWeYQCaP0fmsOiJEMI7Ecvqp44wGN-YbFcasnjthOg**MjEyNDIzOTYsbGl1d2VuanVuMDUs5YiY5paH5L-KLGxpdXdlbmp1bjA1QG1laXR1YW4uY29tLDEsMzQwODk0ODgsMTcyNTY5NDE0NjA3NQ; webNewUuid=5f3b1f716230c1e17095128c3b7c4dab_1725434521514; moaDeviceId=DFF0D2404BAF507588724892BB7DB09D; logan_session_token=79vnxwfbcabt5av32wz5; s_m_id_3299326472=AwMAAAA5AgAAAAIAAAE9AAAALN7pK5Xe2/pJrSap24VxHXkRUyQX109NHPOlt4bDK7GrLNMAdZ18UlyEOGMQAAAAJIoUzkKmKV2EfU0kfsGzxB9uyWec9/5B6epoxopCvqG5F+tWIA; _lxsdk_s=191bc9db539-d2a-54a-a85%7C%7C22',
      )
      myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
      myHeaders.append('content-type', 'application/json')
  
      const raw = JSON.stringify({
        appId: '1831223936403484689',
        conversationId: '20240904163204_1831223936403484689_7480416',
        channel: 'APP_MARKET',
        stream: true,
        utterances: [
          {
            content: '你开心吗',
            type: 'TEXT',
          },
        ],
        redo: true,
      })
  
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow',
      }
      

      fetchEventSource(`/api/conversation/v1/market`, {
        ...requestOptions,
        onmessage(event) {
          try {
            const data = JSON.parse(event.data);
            if (Array.isArray(data.contents) && data.contents.length > 0) {
              console.log(data.contents[0]);
            }
          } catch (e) {
            console.log('Failed to parse JSON:', e);
          }
        },
        onopen() {
          console.log('Connection opened');
        },
        onerror(err) {
          console.error('EventSource failed:', err);
        },
      });
  
      // const response = await fetch(
      //   'https://friday.sankuai.com/conversation/v1/market',
      //   requestOptions,
      // )
  
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`)
      // }
  
      // const reader = response.body && response.body.getReader()
      // const decoder = new TextDecoder();
      // const newReader = await reader?.read()
      // // console.log(666, newReader)
      // while (true) {
      //   const { done, value } = await reader.read()
      //   if (done) break
  
      //   const chunk = decoder.decode(value)
      //   try {

      //     console.log(6666, chunk)
      //     const data = JSON.parse(chunk)
      //     if (Array.isArray(data.contents) && data.contents.length > 0) {
      //       console.log(666, data.contents[0])
      //     }
      //   } catch (e) {
      //     // 如果解析失败，可能是部分数据块，可以忽略或做其他处理
      //     console.log('Failed to parse JSON:', e)
      //   }
      // }
    }

    const handleClick = () => {
      sendMessage();
    };
    return (
        <div>
            <Button onClick={handleClick}>点击</Button>
        </div>
    );
}
