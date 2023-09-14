import { toast } from 'react-toastify'

interface Req {
  endpoint: string
  method: string
  token?: string
  body?: any
  query?: string
  lookupQuery?: Record<string, string>;
}

const httpRequest = async ({
  endpoint,
  method = 'POST',
  token = '',
  body = null,
  query = '',
  lookupQuery = {},

}: Req) => {
  let url = process.env.NODE_ENV === 'production' ? 
        `${process.env.REACT_APP_API_PROD_URL}/api${endpoint}`
    : 
        `${process.env.REACT_APP_API_DEV_URL}/api${endpoint}`


  console.log(`Query ${query} & lookupQuery  ${lookupQuery} in httpRequest 007`)
  let questionSet = false
   if(query) {
    questionSet?url += `&${new URLSearchParams(query)}`:url += `?${new URLSearchParams(query)}`
    questionSet=true
  }

  if('q' in lookupQuery) {
    questionSet?url += `&${new URLSearchParams(lookupQuery)}`: url += `?${new URLSearchParams(lookupQuery)}`
    questionSet=true
  }
  console.log('Endpoint in httpRequest 007',url)
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')//
  headers.append('Access-Control-Allow-Origin', "*")//Access-Control-Allow-Origin
  token ? headers.append('Authorization', `Bearer ${token}`) : headers.append('Authorization', `NO AUTH`)
 
  body = body ? { body: JSON.stringify(body) } : {}

  
  // console.log("007 HEADER", headers)
  // console.log("007 BODY", body)
  try {
    const response = await fetch(url, {
      method,
      headers,
      ...body
    })
    const data = (await response.json()) || null

    if (data === null) return response
    if (data.status == "Success" && method !== 'GET') {
      toast.success('Success!', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }else if(data.status == 400 && method !== 'GET'){
        toast.error('Something Went Wrong!', {
            position: toast.POSITION.TOP_RIGHT,
          })
    }
    return data
  } catch (error) {
    toast.error('Something Went Wrong!', {
      position: toast.POSITION.TOP_RIGHT,
    })
    console.log(error)
  }
}

export default httpRequest
